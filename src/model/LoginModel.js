// Model
export function validateForm(name, email, password) {
  const errors = {};

  if (!name) {
    errors.name = "Name must be filled out!";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    errors.email = "Invalid email!";
  }

  if (!password) {
    errors.password = "Password must be filled out!";
  }
  

  return errors;
}
