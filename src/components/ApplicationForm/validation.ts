import { InputTypes } from "constants/input";
import { validationErrors } from "constants/messages";

type Validations = {
  [x in InputTypes]: (value: any, required?: boolean) => string | boolean;
};

const validations: Validations = {
  email: (value?: string, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    if (value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      return validationErrors.invalidFormat;
    return true;
  },
  text: (value?: string, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    if (value && !/^[\w\s.,]+$/.test(value))
      return validationErrors.invalidFormat;
    return true;
  },
  name: (value?: string, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    if (value && !/^[A-Za-z ]+$/.test(value))
      return validationErrors.invalidFormat;
    return true;
  },
  textarea: (value?: string, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    if (value && !/^[\w\s.,\r]+$/.test(value))
      return validationErrors.invalidFormat;
    return true;
  },
  select: (value, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    return true;
  },
  phone: (value: string, required?: boolean) => {
    if (required && !value) return validationErrors.isEmpty;
    if (
      value &&
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    )
      return validationErrors.invalidFormat;
    return true;
  },
};

const validate = (type: InputTypes, required?: boolean) => (value: any) =>
  validations[type](value, required);
export default validate;
