import React from "react";
import NewSingerForm from "../components/NewSingerForm";
import NewAlbumForm from "../components/NewAlbumForm";
import Screen from "../components/Screen";
import NewUserForm from "../components/NewUserForm";

function InsertDataScreen(props) {
  return (
    <Screen>
      <h1>Insert</h1>
      <NewSingerForm />
      <NewAlbumForm />
      <NewUserForm />
    </Screen>
  );
}

export default InsertDataScreen;
