import { InputTypes } from "./input";

export interface Field {
  id: string;
  label?: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  type: InputTypes;
}

export type FieldSets = (Field | Field[])[];

const FIELD_SET: FieldSets = [
  [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "First name",
      required: true,
      type: "name",
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Last name",
      required: true,
      type: "name",
    },
  ],
  {
    id: "email",
    label: "Email",
    required: true,
    type: "email",
  },
  {
    id: "address1",
    label: "Address 1",
    placeholder: "Address 1",
    type: "text",
  },
  [
    {
      id: "city",
      label: "City",
      type: "text",
    },
    {
      id: "state",
      label: "State",
      type: "text",
    },
    {
      id: "zip",
      label: "ZIP",
      type: "text",
    },
  ],
  {
    id: "phone",
    label: "Phone number",
    required: true,
    type: "phone",
    placeholder: "999 999 9999",
  },
  {
    id: "jobTitle",
    label: "Job Title",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junion",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
  },
  {
    id: "reason",
    label: "Reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
  },
];

export default FIELD_SET;
