import React, { useEffect } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

export default function GeneralForm() {

const onSubmit=async(values,actions)=>{
    console.log(values)
    console.log(actions)
 await new Promise((resolve) => {
    setTimeout(resolve,1000)
 })
 actions.resetForm();
}

  const {values, errors,isSubmitting ,handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema:basicSchema,
    onSubmit,
  });

 

  return (
    <form className="form-cntainer" onSubmit={handleSubmit}>
      <div className="input-div">
        <label>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your e-mail address..."
          onChange={handleChange}
          value={values.email}
          className={errors.email ? "input-error" : ""}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input-div">
        <label>Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age..."
          onChange={handleChange}
          value={values.age}
          className={errors.age ? "input-error" : ""}
        ></input>
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="input-div">
        <label>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          onChange={handleChange}
          value={values.password}
          className={errors.password ? "input-error" : ""}
        ></input>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="input-div">
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Repeat your password"
          onChange={handleChange}
          value={values.confirmPassword}
          className={errors.confirmPassword ? "input-error" : ""}
        ></input>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
}
