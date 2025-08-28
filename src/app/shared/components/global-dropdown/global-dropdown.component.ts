import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownOption {
  id: any;
  name: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-global-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-dropdown.component.html',
  styleUrls: ['./global-dropdown.component.scss']
})
export class GlobalDropdownComponent implements OnInit {
  @Input() options: DropdownOption[] = [];
  @Input() selectedOption: DropdownOption | null = null;
  @Input() placeholder: string = 'Select option';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() searchable: boolean = false;
  @Input() maxHeight: string = '300px';

  @Output() selectionChange = new EventEmitter<DropdownOption>();

  showDropdown = false;
  searchTerm = '';
  filteredOptions: DropdownOption[] = [];

  ngOnInit(): void {
    this.filteredOptions = [...this.options];
  }

  ngOnChanges(): void {
    this.filteredOptions = [...this.options];
  }

  toggleDropdown(): void {
    if (this.disabled) return;
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      this.searchTerm = '';
      this.filteredOptions = [...this.options];
    }
  }

  selectOption(option: DropdownOption): void {
    if (option.disabled) return;
    
    this.selectedOption = option;
    this.showDropdown = false;
    this.selectionChange.emit(option);
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    
    if (this.searchTerm.trim() === '') {
      this.filteredOptions = [...this.options];
    } else {
      this.filteredOptions = this.options.filter(option =>
        option.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (option.description && option.description.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }

  clearSelection(): void {
    this.selectedOption = null;
    this.selectionChange.emit(null as any);
  }

  @HostListener('document:click')
  closeOnOutsideClick(): void {
    this.showDropdown = false;
  }

  getOptionDescription(option: DropdownOption): string {
    return option.description || '';
  }

  hasFieldError(): boolean {
    return this.error && this.errorMessage !== '';
  }

  getFieldError(): string {
    return this.errorMessage;
  }
}
