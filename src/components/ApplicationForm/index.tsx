import { useForm } from "react-hook-form";
import { Field as FieldProps } from "constants/field-set";
import { validationErrors } from "constants/messages";
import InputField from "components/InputField";
import Button from "components/Button";
import DynamicLayout from "components/DynamicLayout";
import { RequiredAsterisk } from "components/InputField/styled";
import validate from "./validation";

type FormData = { [x: string]: any };

interface ApplicationFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

const ApplicationForm = ({ onSubmit, isLoading }: ApplicationFormProps) => {
  const { register, handleSubmit, formState } = useForm();

  const renderInputField = (field: FieldProps) => (
    <InputField
      error={formState.errors[field.id]?.message?.toString()}
      key={field.id}
      label={field.label}
      options={field.options}
      placeholder={field.placeholder}
      required={field.required}
      type={field.type}
      {...register(field.id, {
        validate: validate(field.type, field.required),
        required: field.required && validationErrors.isEmpty,
      })}
    />
  );

  return (
    <DynamicLayout
      renderField={renderInputField}
      containerProps={{
        as: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
      loading={isLoading}
    >
      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
      <p>
        <RequiredAsterisk>*</RequiredAsterisk>Required field
      </p>
    </DynamicLayout>
  );
};

export default ApplicationForm;
