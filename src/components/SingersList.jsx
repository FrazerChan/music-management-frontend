import React, { useEffect, useState } from "react";
import axios from "axios";

function SingersList(props) {
  const [singers, setSingers] = useState();

  const getSingers = async () => {
    const response = await axios.get("http://localhost:8080/singers");

    if (response.data) {
      setSingers(response.data);
    }
  };

  useEffect(() => {
    getSingers();
  }, []);

  return <div></div>;
}

export default SingersList;
