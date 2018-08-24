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
  const error = { messages: [], key: {}};
  const isEmailEmpty = isRequired(email, "email");
  const isPasswordEmpty = isRequired(password, "password")
  const isEmail = validateEmail(email, "email");
  const isPasswordLength = validatePasswordLength(password, "password")

  //Checks
  if (typeof isEmailEmpty === "string") { 
    error.messages.push(isEmailEmpty);
    error.key.email = true;
  }
  if (typeof isEmail === "string") { 
    error.messages.push(isEmail);
    error.key.email = true;
  }
  if (typeof isPasswordEmpty === "string") {
    error.messages.push(isPasswordEmpty);
    error.key.password = true;
  }
  if (typeof isPasswordLength === "string") { 
    error.messages.push(isPasswordLength);
    error.key.password = true;
  }
  return error.messages.length > 0 ? error : true;
}

export const isSignupCredentialsValid_stepOne = fields => {
  const error = { messages: [], key: {}}
  const { firstName, lastName, email, phoneNumber, password } = fields;
  const isFirstNameEmpty = isRequired(firstName, "firstName")
  const isLastNameEmpty = isRequired(lastName, "lastName")
  const isEmailEmpty = isRequired(email, "email");
  const isEmail = validateEmail(email, "email");
  const isPasswordEmpty = isRequired(password, "password")
  const isPasswordLength = validatePasswordLength(password, "password")

  if (typeof isFirstNameEmpty === "string") {
    error.messages.push(isFirstNameEmpty);
    error.key.firstName = true;
  }
  if (typeof isLastNameEmpty === "string") {
    error.messages.push(isLastNameEmpty);
    error.key.lastName = true;
  }
  if (typeof isEmailEmpty === "string") { 
    error.messages.push(isEmailEmpty);
    error.key.email = true;
  }
  if (typeof isEmail === "string") { 
    error.messages.push(isEmail);
    error.key.email = true;
  }
  if (typeof isPasswordEmpty === "string") {
    error.messages.push(isPasswordEmpty);
    error.key.password = true;
  }
  if (typeof isPasswordLength === "string") { 
    error.messages.push(isPasswordLength);
    error.key.password = true;
  }
  return error.messages.length > 0 ? error : true;
}

export const isSignupCredentialsValid_stepTwo = fields => {
  const error = { messages: [], key: {}}
  const { country, state, localGovernment, phoneNumber } = fields;
  const isPhoneNumberEmpty = isRequired(phoneNumber, "phoneNumber")
  const isValidPhoneNumber = validateNumber(phoneNumber, "phoneNumber")
  const isCountryEmpty = isRequired(country, "country")
  const isStateEmpty = isRequired(state, 'state');
  const islocalGovernmentEmpty = isRequired(localGovernment, 'localGovernment');

  if (typeof isPhoneNumberEmpty === "string") {
    error.messages.push(isPhoneNumberEmpty);
    error.key.phoneNumber = true;
  }
  if (typeof isValidPhoneNumber === "string") {
    error.messages.push(isValidPhoneNumber);
    error.key.phoneNumber = true;
  }
  if (typeof isCountryEmpty === 'string') {
    error.messages.push(isCountryEmpty);
    error.key.phoneNumber = true;
  }
  if (typeof isStateEmpty === 'string') {
    error.messages.push(isStateEmpty);
    error.key.phoneNumber = true;
  }

  if (typeof islocalGovernmentEmpty === 'string') {
    error.messages.push(islocalGovernmentEmpty);
    error.key.phoneNumber = true;
  }
  return error.messages.length > 0 ? error : true;
}

