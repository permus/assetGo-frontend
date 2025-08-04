import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    google: any;
  }
}

export interface PlaceResult {
  formatted_address: string;
  place_id: string;
  geometry?: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  address_components?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private isLoaded = false;
  private loadPromise: Promise<void> | null = null;

  constructor() {}

  async loadGoogleMaps(): Promise<void> {
    if (this.isLoaded) {
      return Promise.resolve();
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = new Promise((resolve, reject) => {
      if (typeof window.google !== 'undefined' && window.google.maps) {
        this.isLoaded = true;
        resolve();
        return;
      }

      // Check if script is already loading
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          this.isLoaded = true;
          resolve();
        });
        existingScript.addEventListener('error', reject);
        return;
      }

      // If no script exists, wait for it to load (it should be in index.html)
      const checkGoogle = () => {
        if (typeof window.google !== 'undefined' && window.google.maps) {
          this.isLoaded = true;
          resolve();
        } else {
          setTimeout(checkGoogle, 100);
        }
      };
      checkGoogle();
    });

    return this.loadPromise;
  }

  async initializeAutocomplete(
    inputElement: HTMLInputElement,
    onPlaceSelected: (place: PlaceResult) => void,
    options: any = {}
  ): Promise<any> {
    await this.loadGoogleMaps();

    const defaultOptions = {
      types: ['geocode'],
      fields: ['formatted_address', 'place_id', 'geometry', 'address_components']
    };

    const autocompleteOptions = { ...defaultOptions, ...options };

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputElement,
      autocompleteOptions
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        onPlaceSelected({
          formatted_address: place.formatted_address,
          place_id: place.place_id,
          geometry: place.geometry,
          address_components: place.address_components
        });
      }
    });

    return autocomplete;
  }

  async searchPlaces(query: string, options: any = {}): Promise<PlaceResult[]> {
    await this.loadGoogleMaps();

    return new Promise((resolve, reject) => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      const request = {
        query: query,
        fields: ['formatted_address', 'place_id', 'geometry'],
        ...options
      };

      service.textSearch(request, (results: any[], status: any) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(results || []);
        } else {
          reject(new Error(`Places search failed: ${status}`));
        }
      });
    });
  }
}