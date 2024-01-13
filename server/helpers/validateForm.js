function validateSubmission(form, submission) {
    const errors = [];
  
    form.fields.forEach(field => {
      const value = submission[field.name];
  
      if (field.required && !value) {
        errors.push(`The field "${field.name}" is required.`);
      }
  
      if (field.type === 'radio' && !field.options.includes(value)) {
        errors.push(`The field "${field.name}" must be one of the following options: ${field.options.join(', ')}`);
      }
  
    });
  
    return errors;
  }

  module.exports = validateSubmission