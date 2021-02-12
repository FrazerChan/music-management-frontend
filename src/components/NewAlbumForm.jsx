import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import settings from "../config/settings";

function NewAlbumForm(props) {
  const [album, setAlbum] = useState("");
  const [singer, setSinger] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");

  const [albumError, setAlbumError] = useState();
  const [singerError, setSingerError] = useState();
  const [yearError, setYearError] = useState();
  const [companyError, setCompanyError] = useState();

  const [requestError, setRequestError] = useState();
  const [requestSuccess, setRequestSuccess] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    try {
      const response = await axios.post(settings.apiEndpoint + "add_album", {
        album: album.trim(),
        singer: singer.trim(),
        year: year.trim(),
        company: company.trim(),
      });

      setRequestError();
      setRequestSuccess("Album added.");
    } catch (error) {
      if (error.response?.status === 409) {
        setRequestError("Album already exists.");
      } else {
        setRequestError("An unexpected error has occured.");
      }
      setRequestSuccess();
    }
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
            label="Singer"
            name="singer"
            onChange={handleSingerChange}
            value={singer}
          />
          <InputField
            error={yearError}
            label="Year YYYY"
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
        {requestError && (
          <div className="alert alert-danger mt-2">{requestError}</div>
        )}
        {requestSuccess && (
          <div className="alert alert-success mt-2">{requestSuccess}</div>
        )}
      </div>
    </div>
  );
}

export default NewAlbumForm;
