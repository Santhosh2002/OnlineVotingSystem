import React from "react";
import "./List.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Datatable from "../../Components/UserData/Datatable";
const List = () => {
  return (
    <div className="listcomponent">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
