import { useForm } from "react-hook-form";
import { Field as FieldProps } from "constants/field-set";
import { validationErrors } from "constants/messages";
import withApplicationSubmission from "hoc/withApplicationSubmission/withApplicationSubmission";
import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import DynamicLayout from "components/DynamicLayout/DynamicLayout";
import { RequiredAsterisk } from "components/InputField/styled";
import validate from "./validation";
import { ErrorMessage } from "./styled";

type FormData = { [x: string]: any };

interface ApplicationFormProps {
  onSubmit: (data: FormData) => void;
  loading?: boolean;
  error?: string;
}

const ApplicationForm = ({
  onSubmit,
  loading,
  error,
}: ApplicationFormProps) => {
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
      loading={loading}
    >
      <Button type="submit" disabled={loading}>
        Submit
      </Button>

      <p>
        <RequiredAsterisk>*</RequiredAsterisk>Required field
      </p>

      {error && (
        <ErrorMessage>
          <p>😧 {error}</p>
        </ErrorMessage>
      )}
    </DynamicLayout>
  );
};

export default withApplicationSubmission(ApplicationForm);
