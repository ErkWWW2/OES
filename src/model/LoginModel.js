// Model
export function validateForm(name, email) {
    const errors = {};
  
    if (!name) {
      errors.name = "Name must be filled out!";
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      errors.email = "Invalid email address!";
    }
  
    return errors;
  }
  