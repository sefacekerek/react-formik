import { useField } from "formik";
import React from "react";

export default function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <div className="check-box">
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      ></input>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
