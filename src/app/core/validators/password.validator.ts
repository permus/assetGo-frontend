import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface PasswordStrength {
  score: number; // 0-4
  level: 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  color: string;
  percentage: number;
}

export class PasswordValidator {
  /**
   * Custom validator for password complexity
   * Requires: min 8 chars, 1 uppercase, 1 lowercase, 1 number
   */
  static strong(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasMinLength = value.length >= 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);

      const passwordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber;

      if (!passwordValid) {
        const errors: any = {};
        if (!hasMinLength) errors.minLength = true;
        if (!hasUpperCase) errors.uppercase = true;
        if (!hasLowerCase) errors.lowercase = true;
        if (!hasNumber) errors.number = true;
        
        return { passwordStrength: errors };
      }

      return null;
    };
  }

  /**
   * Calculate password strength
   */
  static calculateStrength(password: string): PasswordStrength {
    if (!password) {
      return {
        score: 0,
        level: 'weak',
        feedback: ['Enter a password'],
        color: 'red',
        percentage: 0
      };
    }

    let score = 0;
    const feedback: string[] = [];

    // Length check
    if (password.length >= 8) {
      score++;
    } else {
      feedback.push('At least 8 characters');
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score++;
    } else {
      feedback.push('One uppercase letter');
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      score++;
    } else {
      feedback.push('One lowercase letter');
    }

    // Number check
    if (/\d/.test(password)) {
      score++;
    } else {
      feedback.push('One number');
    }

    // Special character bonus
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score++;
    }

    // Determine level and color
    let level: 'weak' | 'medium' | 'strong' | 'very-strong' = 'weak';
    let color = 'red';
    let percentage = 0;

    if (score >= 5) {
      level = 'very-strong';
      color = 'green';
      percentage = 100;
    } else if (score >= 4) {
      level = 'strong';
      color = 'green';
      percentage = 80;
    } else if (score >= 3) {
      level = 'medium';
      color = 'yellow';
      percentage = 60;
    } else if (score >= 2) {
      level = 'weak';
      color = 'orange';
      percentage = 40;
    } else {
      level = 'weak';
      color = 'red';
      percentage = 20;
    }

    return {
      score,
      level,
      feedback: feedback.length > 0 ? feedback : ['Password looks good!'],
      color,
      percentage
    };
  }

  /**
   * Check if password meets minimum requirements
   */
  static meetsRequirements(password: string): {
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    allMet: boolean;
  } {
    return {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      allMet: password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
    };
  }
}

