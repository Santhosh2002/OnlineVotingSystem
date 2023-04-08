import React from "react";
import "./NewCandi.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
const NewCandidate = () => {
  const [image, setImage] = useState(null);
  return (
    <>
      <div className="CandiComponent">
        <Sidebar />
        <div className="CandiContainer">
          <Navbar />
          <div className="top">
            <h1>Add New Candidate</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="Image"
              />
            </div>
            <div className="right">
              <form action="">
                <div className="forminput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="forminput">
                  <label>Candidate Name</label>
                  <input type="text" placeholder="San John" />
                </div>
                <div className="forminput">
                  <label>Aadhar Number</label>
                  <input type="text" placeholder="123145675054" />
                </div>
                <div className="forminput">
                  <label>Age</label>
                  <input type="text" placeholder="42" />
                </div>
                <div className="forminput">
                  <label>Gender</label>
                  <input type="text" placeholder="Male/Female" />
                </div>
                <div className="forminput">
                  <label>Party</label>
                  <input type="text" placeholder="Congress" />
                </div>
                <div className="forminput">
                  <label>Qualifications</label>
                  <textarea placeholder="BTech/Degree"></textarea>
                </div>
                <div className="forminput">
                  <label>Qualities</label>
                  <textarea placeholder="Great Leader"></textarea>
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCandidate;
