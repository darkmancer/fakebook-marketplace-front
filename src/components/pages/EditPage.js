import React from "react";
import ContentEdit from "../layout/AccountUserLayout/ContentEdit";
import Header from "../layout/Header";
import axios from "../../config/axios";

function EditPage() {
  return (
    <div>
      <Header />
      <ContentEdit />
    </div>
  );
}

export default EditPage;
