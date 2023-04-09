import React from "react";
import "./NewCandi.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
const NewCandidate = () => {
  const [image, setImage] = useState(null);
  const [party, setParty] = useState();
  const [candidate, setCandidate] = useState();
  const [aadharnum, setAadharnum] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [qualifications, setQualifications] = useState();
  const [qualities, setQualities] = useState();

  const doSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/NewCandidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        party,
        candidate,
        qualifications,
        aadharnum,
        gender,
        age,
        qualities,
      }),
    });

    if (res.status === 421) {
      toast.warn("Warning!  Please fill the Fields");
    } else {
      if (res.status === 201) {
        toast.success("Success!  Candidate added Successfull");
        // navigate("/ElectionList");
      } else if (res.status === 422) {
        toast.error("Unsuccess!  Candidate Already Exists");
      }
    }
  };

  return (
    <>
      <div className="CandiComponent">
        <Sidebar />
        <div className="CandiContainer">
          <Navbar />
          <div className="top">
            <h1>Add New Candidate</h1>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
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
                  <input
                    type="text"
                    placeholder="San John"
                    onChange={(e) => setCandidate(e.target.value)}
                  />
                </div>
                <div className="forminput">
                  <label>Aadhar Number</label>
                  <input
                    type="number"
                    placeholder="123145675054"
                    onChange={(e) => setAadharnum(e.target.value)}
                  />
                </div>
                <div className="forminput">
                  <label>Age</label>
                  <input
                    type="text"
                    placeholder="42"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="forminput">
                  <label>Gender</label>
                  <input
                    type="text"
                    placeholder="Male/Female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="forminput">
                  <label>Party</label>
                  <input
                    type="text"
                    placeholder="Congress"
                    onChange={(e) => setParty(e.target.value)}
                  />
                </div>
                <div className="forminput">
                  <label>Qualifications</label>
                  <textarea
                    placeholder="BTech/Degree"
                    onChange={(e) => setQualifications(e.target.value)}
                  ></textarea>
                </div>
                <div className="forminput">
                  <label>Qualities</label>
                  <textarea
                    placeholder="Great Leader"
                    onChange={(e) => setQualities(e.target.value)}
                  ></textarea>
                </div>
                <button onClick={doSubmit}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCandidate;
