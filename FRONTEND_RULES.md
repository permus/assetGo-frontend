### Frontend Rules


### Rule 1 — Standard Dropdown Pattern
All dropdowns must follow this structure, behavior, and class naming. Use this as the canonical template.

- **Structure**: `relative` container, `button.dropdown-button`, `div.dropdown-content`, `svg.dropdown-arrow`, `div.dropdown-menu` with `button.dropdown-item` rows.
- **Behavior**: toggle open/close on button click, close on outside click, set selected item and close on selection.
- **States**: `active` when open, `error` when invalid, `selected` on chosen item.
- **UX**: placeholder when empty, icon + name + description per option, rotating arrow, validation message under field.


#### HTML template
```html
<div class="form-group" [class.error]="hasFieldError('field_id')">
  <label>Label <span class="required" *ngIf="isRequired">*</span></label>

  <div class="relative generic-dropdown" (click)="$event.stopPropagation()">
    <button
      type="button"
      (click)="toggleDropdown()"
      class="dropdown-button"
      [class.error]="hasFieldError('field_id')"
      [class.active]="showDropdown">
      <div class="dropdown-content">
        <span *ngIf="!selectedOption" class="placeholder">Select option</span>

        <div *ngIf="selectedOption" class="selected-item">
          <div class="item-icon">
            <!-- optional icon; colorize as needed -->
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="selected-text">{{ selectedOption.name }}</span>
        </div>

        <svg class="dropdown-arrow" [class.rotated]="showDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </button>

    <div *ngIf="showDropdown" class="dropdown-menu">
      <div class="dropdown-header">Select option</div>

      <button
        *ngFor="let option of options"
        type="button"
        (click)="selectOption(option)"
        class="dropdown-item"
        [class.selected]="selectedOption?.id === option.id">
        <div class="item-content">
          <div class="item-icon">
            <!-- optional icon; colorize as needed -->
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="item-details">
            <div class="item-name">{{ option.name }}</div>
            <div class="item-description">{{ getOptionDescription(option) }}</div>
          </div>
        </div>
      </button>
    </div>
  </div>

  <div class="field-error" *ngIf="hasFieldError('field_id')">
    {{ getFieldError('field_id') }}
  </div>
</div>
```


#### Component (TypeScript)
```ts
showDropdown = false;
selectedOption: { id: number | string; name: string } | null = null;
options: Array<{ id: number | string; name: string }> = [];

toggleDropdown(): void {
  this.showDropdown = !this.showDropdown;
}

selectOption(option: any): void {
  this.selectedOption = option;
  this.showDropdown = false;
  // Sync to form
  this.form.patchValue({ field_id: option?.id ?? null });
}

@HostListener('document:click')
closeOnOutsideClick(): void {
  this.showDropdown = false;
}
```


#### Styling contract (classnames)
- `relative`, `dropdown-button`, `dropdown-content`, `dropdown-arrow`, `dropdown-menu`
- `dropdown-header`, `dropdown-item`, `item-content`, `item-icon`, `item-details`, `item-name`, `item-description`
- State classes: `active`, `error`, `selected`, `placeholder`, `selected-item`, `selected-text`


#### Validation and disabled states
- Apply `[class.error]` on the `form-group` and `dropdown-button` when invalid.
- Show `div.field-error` with the exact validation message below the control.
- Use `[disabled]` on the button when the option list is empty or loading; show an appropriate placeholder.


#### Notes
- Icons and colors are optional but should use the same structure for consistency.
- Keep labels concise; placeholders must clearly indicate the expected choice.
- Arrow rotation is the visual indicator of open/close state.


### Rule 2 — Standard Input Pattern (text/number/date/email)
All inputs must follow this structure, validation handling, and class naming. Use this as the canonical template.

- **Structure**: `div.form-row` → `div.form-group`, `label`, `input` (or `textarea`), `div.field-error`.
- **States**: `error` on `form-group`, `error-input` on the control when invalid.
- **UX**: required asterisk, clear placeholder, show validation message under control.


#### HTML template (generic)
```html
<div class="form-row full-width">
  <div class="form-group" [class.error]="hasFieldError('field_id')">
    <label>Label <span class="required" *ngIf="isRequired">*</span></label>
    <input
      type="text"
      formControlName="field_id"
      placeholder="Enter value"
      [class.error-input]="hasFieldError('field_id')">
    <div class="field-error" *ngIf="hasFieldError('field_id')">
      {{ getFieldError('field_id') }}
    </div>
  </div>
</div>
```


#### Example (Title input)
```html
<div class="form-row full-width">
  <div class="form-group" [class.error]="hasFieldError('title')">
    <label>Title <span class="required">*</span></label>
    <input
      type="text"
      formControlName="title"
      placeholder="Enter work order title"
      [class.error-input]="hasFieldError('title')">
    <div class="field-error" *ngIf="hasFieldError('title')">
      {{ getFieldError('title') }}
    </div>
  </div>
</div>
```


#### Component helpers (TypeScript)
```ts
hasFieldError(controlName: string): boolean {
  const control = this.form.get(controlName);
  return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
}

getFieldError(controlName: string): string {
  const control = this.form.get(controlName);
  if (!control || !control.errors) return '';
  if (control.errors['required']) return 'This field is required.';
  if (control.errors['email']) return 'Enter a valid email address.';
  if (control.errors['minlength']) return `Minimum ${control.errors['minlength'].requiredLength} characters.`;
  if (control.errors['maxlength']) return `Maximum ${control.errors['maxlength'].requiredLength} characters.`;
  if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}.`;
  if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}.`;
  return 'Invalid value.';
}
```


#### Styling contract (classnames)
- `form-row`, `full-width`, `form-group`, `error-input`, `field-error`, `required`
- State class on group: `error`


#### Notes
- Use `textarea` with the same pattern for multi-line inputs.
- Keep placeholders actionable; keep labels short and clear.


### Rule 3 — Standard Textarea Pattern
All textareas must use this exact element signature, and follow the same structure/validation as Rule 2 when needed.

- **Element signature (canonical)**
```html
<textarea
  formControlName="description"
  placeholder="Enter work order description"></textarea>
```

- **Structure**: Wrap with the same `form-row` → `form-group` container as inputs when part of a form section.
- **Validation**: Apply `[class.error]` on `form-group`, `[class.error-input]` on the `textarea`, and show `div.field-error` like Rule 2.


#### Full pattern example (with validation)
```html
<div class="form-row full-width">
  <div class="form-group" [class.error]="hasFieldError('description')">
    <label>Description</label>
    <textarea
      formControlName="description"
      placeholder="Enter work order description"
      [class.error-input]="hasFieldError('description')"></textarea>
    <div class="field-error" *ngIf="hasFieldError('description')">
      {{ getFieldError('description') }}
    </div>
  </div>
</div>
```

- Reuse the same TypeScript helpers from Rule 2: `hasFieldError` and `getFieldError`.
