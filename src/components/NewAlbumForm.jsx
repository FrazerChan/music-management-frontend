import React, { useState } from "react";
import InputField from "./InputField";

function NewAlbumForm(props) {
  const [album, setAlbum] = useState("");
  const [singer, setSinger] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");

  const [albumError, setAlbumError] = useState();
  const [singerError, setSingerError] = useState();
  const [yearError, setYearError] = useState();
  const [companyError, setCompanyError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    console.log(album);
    console.log(singer);
    console.log(year);
    console.log(company);
  };

  const handleAlbumChange = (e) => {
    setAlbum(e.currentTarget.value);
  };

  const handleSingerChange = (e) => {
    setSinger(e.currentTarget.value);
  };

  const handleYearChange = (e) => {
    setYear(e.currentTarget.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.currentTarget.value);
  };

  const validate = () => {
    let error = false;
    if (album.trim() === "") {
      setAlbumError("Album is required.");
      error = true;
    } else {
      setAlbumError();
    }
    if (singer.trim() === "") {
      setSingerError("Singer is required.");
      error = true;
    } else {
      setSingerError();
    }
    if (year.trim().length !== 4 || isNaN(year.trim())) {
      setYearError("Year is required.");
      error = true;
    } else {
      setYearError();
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
      <h4>New album:</h4>
      <div className="border border-dark rounded p-4">
        <form onSubmit={handleSubmit}>
          <InputField
            autoFocus={true}
            error={albumError}
            label="Album"
            name="album"
            onChange={handleAlbumChange}
            value={album}
          />
          <InputField
            error={singerError}
            label="Singer (YYYYMMDD)"
            name="singer"
            onChange={handleSingerChange}
            value={singer}
          />
          <InputField
            error={yearError}
            label="Year"
            name="year"
            onChange={handleYearChange}
            value={year}
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

export default NewAlbumForm;
