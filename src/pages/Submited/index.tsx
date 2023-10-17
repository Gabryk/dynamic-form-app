import { useSelector } from "react-redux";
import { RootState } from "store";
import { Field } from "constants/field-set";
import DynamicLayout from "components/DynamicLayout";
import Header from "components/Header";
import { FieldStyled } from "./styled";

const Submited = () => {
  const { data } = useSelector((state: RootState) => state.userApplication);

  const renderField = (field: Field) => {
    return (
      <FieldStyled key={field.id}>{data?.[field.id] || "N/A"}</FieldStyled>
    );
  };

  return (
    <div>
      <Header
        title="Thanks you!"
        description="Your application was successfully submitted."
      />

      <DynamicLayout renderField={renderField} />
    </div>
  );
};

export default Submited;
