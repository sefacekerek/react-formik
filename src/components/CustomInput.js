import { useField } from "formik";
import React from "react";

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <div className="input-div">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      ></input>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
