import React, { forwardRef } from "react";
import {
  ContainerStyled,
  ErrorStyled,
  InputStyled,
  LabelStyled,
  RequiredAsterisk,
} from "./styled";

interface InputFieldProps
  extends React.InputHTMLAttributes<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > {
  error?: string;
  label?: string;
  options?: string[];
}

const InputField = (
  {
    error,
    label,
    name,
    options,
    placeholder,
    required = false,
    type = "text",
    ...inputProps
  }: InputFieldProps,
  ref: any
) => {
  const acValidationMessage = `exp-${name}`;

  return (
    <ContainerStyled error={!!error}>
      <LabelStyled htmlFor={name}>
        {label} {required ? <RequiredAsterisk>*</RequiredAsterisk> : null}
      </LabelStyled>

      {!["textarea", "select"].includes(type) && (
        <InputStyled
          aria-describedby={acValidationMessage}
          aria-required={required}
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          type={type}
          {...inputProps}
        />
      )}

      {type === "select" && (
        <InputStyled
          aria-required={required}
          as="select"
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...inputProps}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </InputStyled>
      )}

      {type === "textarea" && (
        <InputStyled
          aria-required={required}
          as="textarea"
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...inputProps}
        />
      )}

      {error ? (
        <ErrorStyled id={acValidationMessage} role="alert">
          {error}
        </ErrorStyled>
      ) : null}
    </ContainerStyled>
  );
};

export default forwardRef(InputField);
