const checkMinLength = (value, minLength) => value && value.length > minLength;
const checkMaxLength = (value, maxLength) => value && value.length <= maxLength;
const isNotEmpty = value => checkMinLength(value, 0);

export { checkMinLength, checkMaxLength, isNotEmpty };
