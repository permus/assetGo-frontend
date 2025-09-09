import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';
import {Location, LocationService} from '../../services/location.service';
import {ClickOutsideDirective} from '../../../shared/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-qr-view',
  imports: [
    NgIf,
    ClickOutsideDirective
  ],
  templateUrl: './qr-view.component.html',
  styleUrl: './qr-view.component.scss',
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.7) translateY(-50px)'
        }),
        animate('200ms ease-out', style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.7) translateY(-50px)'
        }))
      ])
    ])
  ]
})
export class QrViewComponent {
  @Input() isOpen = false;
  @Input() location: Location | null = null;
  @Output() closeModal = new EventEmitter<void>();

  loading = false;
  regenLoading = false;
  errorMessage?: string;

  constructor(private locationService: LocationService) {

  }

  closeModalHandler() {
    if (this.loading) return;
    this.isOpen = false;
    this.closeModal.emit();
    this.resetModal();
  }

  private resetModal() {
    this.errorMessage = '';
    this.loading = false;
  }


  regenerateQr(){
    this.regenLoading = true;
    setTimeout(() =>{
      this.regenLoading = false;
    },500)
  }

  downloadQr(){

  }


  getLocationTypeById(id:number | null){
    return
  }
}
