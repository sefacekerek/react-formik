import { useField } from "formik";
import React from "react";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <div className="input-div">
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      ></select>

      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
