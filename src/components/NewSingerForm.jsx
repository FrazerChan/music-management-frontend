import React, { useState } from "react";
import InputField from "./InputField";

function NewSingerForm(props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [company, setCompany] = useState("");

  const [nameError, setNameError] = useState();
  const [dobError, setDobError] = useState();
  const [sexError, setSexError] = useState();
  const [companyError, setCompanyError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    console.log(name);
    console.log(dob);
    console.log(sex);
    console.log(company);
  };

  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleDobChange = (e) => {
    setDob(e.currentTarget.value);
  };

  const handleSexChange = (e) => {
    setSex(e.currentTarget.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.currentTarget.value);
  };

  const validate = () => {
    let error = false;
    if (name.trim() === "") {
      setNameError("Name is required.");
      error = true;
    } else {
      setNameError();
    }
    if (dob.trim().length !== 8 || isNaN(dob.trim())) {
      setDobError("Dob of YYYYMMDD is required.");
      error = true;
    } else {
      setDobError();
    }
    if (sex.trim() === "") {
      setSexError("Sex is required.");
      error = true;
    } else {
      setSexError();
    }
    if (company.trim() === "") {
      setCompanyError("Company is required.");
      error = true;
    } else {
      setCompanyError();
    }
    return error;
  };

  return (
    <div className="mt-4">
      <h4>New singer:</h4>
      <div className="border border-dark rounded p-4">
        <form onSubmit={handleSubmit}>
          <InputField
            autoFocus={true}
            error={nameError}
            label="Name"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
          <InputField
            error={dobError}
            label="Dob (YYYYMMDD)"
            name="dob"
            onChange={handleDobChange}
            value={dob}
          />
          <InputField
            error={sexError}
            label="Sex"
            name="sex"
            onChange={handleSexChange}
            value={sex}
          />
          <InputField
            error={companyError}
            label="Company"
            name="company"
            onChange={handleCompanyChange}
            value={company}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewSingerForm;
