class Form(object):

    fields = []

    def __init__(self, payload, files=None):
        self.payload = payload
        self.files = files

    def validate(self):
        """
        Fill the form with errrors if any.
        Return True if the form is valide, Falses otherwise
        """

        self.errors = {}
        for field in self.fields:
            errors = getattr(self, field).validate(field, self.payload)
            if errors:
                self.errors[field] = errors
        return not self.errors

    def save(self):
        """
        once the form fields and the form as been validated globally,
        you can do whatever you need with the data
        (like save it in a database or else)
        """
        pass


class Field(object):

    validators = []

    def validate(self, field, payload):
        """
        For each field validator run the validation
        with form data return the list of error
        """

        data = payload[field]
        errors = []
        for validator in self.validators:
            error = validator(data)
            if error:
                errors.append(error)
        return errors


def validate_integer(data):
    try:
        int(data)
    except ValueError:
        return "value must be an integer"
