// src/app/core/validators/password.validator.ts
var PasswordValidator = class {
  /**
   * Custom validator for password complexity
   * Requires: min 8 chars, 1 uppercase, 1 lowercase, 1 number
   */
  static strong() {
    return (control) => {
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
        const errors = {};
        if (!hasMinLength)
          errors.minLength = true;
        if (!hasUpperCase)
          errors.uppercase = true;
        if (!hasLowerCase)
          errors.lowercase = true;
        if (!hasNumber)
          errors.number = true;
        return { passwordStrength: errors };
      }
      return null;
    };
  }
  /**
   * Calculate password strength
   */
  static calculateStrength(password) {
    if (!password) {
      return {
        score: 0,
        level: "weak",
        feedback: ["Enter a password"],
        color: "red",
        percentage: 0
      };
    }
    let score = 0;
    const feedback = [];
    if (password.length >= 8) {
      score++;
    } else {
      feedback.push("At least 8 characters");
    }
    if (/[A-Z]/.test(password)) {
      score++;
    } else {
      feedback.push("One uppercase letter");
    }
    if (/[a-z]/.test(password)) {
      score++;
    } else {
      feedback.push("One lowercase letter");
    }
    if (/\d/.test(password)) {
      score++;
    } else {
      feedback.push("One number");
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score++;
    }
    let level = "weak";
    let color = "red";
    let percentage = 0;
    if (score >= 5) {
      level = "very-strong";
      color = "green";
      percentage = 100;
    } else if (score >= 4) {
      level = "strong";
      color = "green";
      percentage = 80;
    } else if (score >= 3) {
      level = "medium";
      color = "yellow";
      percentage = 60;
    } else if (score >= 2) {
      level = "weak";
      color = "orange";
      percentage = 40;
    } else {
      level = "weak";
      color = "red";
      percentage = 20;
    }
    return {
      score,
      level,
      feedback: feedback.length > 0 ? feedback : ["Password looks good!"],
      color,
      percentage
    };
  }
  /**
   * Check if password meets minimum requirements
   */
  static meetsRequirements(password) {
    return {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      allMet: password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
    };
  }
};

export {
  PasswordValidator
};
//# sourceMappingURL=chunk-R7TAE5GV.js.map
