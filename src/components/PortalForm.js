import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import {Link} from "react-router-dom"

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

export default function PortalForm() {
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
            ></CustomInput>
            <CustomSelect
              label="University"
              name="university"
              placeholder="Enter your university"
            >
              <option value="">Please select your university</option>
              <option value="UCLL">UCLL</option>
              <option value="KDG">KDG</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted"></CustomCheckBox>
            <button disabled={isSubmitting} type="submit">Save</button>
            <Link className="link" to="/">Go to Home Page</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
