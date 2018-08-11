const defaultRules = {
  numberPattern: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
  emailPattern: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
  required: /\S+/,
  minlength(value, length) {
    if (length === void(0)) {
      throw 'ERROR: It is not a valid length, checkout your minlength settings.';
    } else if(value.length > length) {
      return true;
    }
    return false;
  }
};

const defaultMessages = {
  numbers: fieldName => `The field ${fieldName} must be a valid number.`,
  email: emailField => `The field ${emailField} must be a valid email address.`,
  required: fieldName => `The field ${fieldName} is mandatory.`,
  minlength: (fieldName, limit) => `The field ${fieldName} length must be greater than ${limit}.`
};

// Validations
const validateEmail = (email, emailField) => {
  const { emailPattern } = defaultRules;
  if (!emailPattern.test(email)) {
    return defaultMessages.email(emailField);
  }
  return true;
}

const validateNumber = (number, fieldName) => {
  const { numberPattern } = defaultRules;
  if (!numberPattern.test(number)) {
    return defaultMessages.email(fieldName);
  }
  return true;
}

const validatePasswordLength = (password, fieldName) => {
  const { minlength } = defaultRules;
  const limit = 6;
  if (!minlength(password, limit)) {
    return defaultMessages.minlength(fieldName, limit);
  }
  return true;
}

const isRequired = (input, fieldName) => {
  const { required } = defaultRules;
  if (!required.test(input)) {
    return defaultMessages.required(fieldName)
  }
  return true;
}


// handleLoginValidation

export const isLoginCredentialsValid = (email, password) => {
  const error = []
  const isEmailEmpty = isRequired(email, "email");
  const isPasswordEmpty = isRequired(password, "password")
  const isEmail = validateEmail(email, "email");
  const isPasswordLength = validatePasswordLength(password, "password")

  //Checks
  if (typeof isEmailEmpty === "string") { error.push(isEmailEmpty); }
  if (typeof isEmail === "string") { error.push(isEmail); }
  if (typeof isPasswordEmpty === "string") { error.push(isPasswordEmpty) }
  if (typeof isPasswordLength === "string") { error.push(isPasswordLength); }
  return error.length > 0 ? error : true;
}

