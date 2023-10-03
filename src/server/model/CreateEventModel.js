
export function validateForm(name, start, end) {
    const errors = {};

    if (!name) {
        errors.name = "Name must be filled out!";
    }

    if (!start) {
        console.log(start);
        errors.start = "Your event must have a start!";
    }

    if (!end) {
        console.log(end);
        errors.end = "Your event must have an end";
    }

    return errors;
}