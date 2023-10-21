import { ReactNode } from "react";
import DynamicLayoutContainer, { FielGroupContainer } from "./styled";
import FIELD_SET, { Field as FieldProps } from "constants/field-set";

interface RenderFieldProps extends FieldProps {
  key: string;
}
interface DynamicLayoutProps {
  children?: ReactNode;
  containerProps?: { [x: string]: any };
  loading?: boolean;
  renderField: (props: RenderFieldProps) => ReactNode;
}

const DynamicLayout = ({
  children,
  containerProps,
  loading,
  renderField,
}: DynamicLayoutProps) => {
  return (
    <DynamicLayoutContainer {...containerProps} loading={loading}>
      {FIELD_SET.map((field, index) => {
        if (Array.isArray(field))
          return (
            <FielGroupContainer key={index}>
              {field.map((field) => renderField({ ...field, key: field.id }))}
            </FielGroupContainer>
          );

        return renderField({
          ...field,
          key: field.id,
        });
      })}

      {children}
    </DynamicLayoutContainer>
  );
};

export default DynamicLayout;
