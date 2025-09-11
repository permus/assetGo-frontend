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

  printLabel() {
    if (this.location?.quick_chart_qr_url) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
         <head>
           <title>Print Label</title>
           <style>
             body {
               font-family: Arial, sans-serif;
               text-align: center;
               margin: 20px;
             }
             img {
               max-width: 100%;
               height: auto;
               margin: 10px 0;
             }
             .info {
               margin-top: 15px;
               font-size: 14px;

             }
             .info strong {
               display: inline-block;
              margin: 0 auto;
               width: 120px;
             }
           </style>
         </head>
         <body>
           <h1>${this.location.name}</h1>
           <img src="${this.location.quick_chart_qr_url}" alt="QR Code for ${this.location.name}">
           <p>Scan this QR code to access location details.</p>

           <div class="info text-center">
             <p><strong>Branch:</strong> ${this.location.name}</p>
             <p><strong>Location ID:</strong> ${this.location.id}</p>
             <p><strong>Type:</strong> ${this.location.type.name}</p>
             <p><strong>Address:</strong> ${this.location.address}</p>
           </div>

           <script>
             window.onload = function() {
               setTimeout(() => {
                 window.print();
                 window.close();
               }, 200);
             };
           </script>
         </body>
       </html>
       `);
        printWindow.document.close();
      }
    } else {
      console.error('QR code URL is not available for printing.');
    }
  }

}
