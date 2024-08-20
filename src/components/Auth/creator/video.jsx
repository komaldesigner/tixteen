// import React, { useState } from "react";
// import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.    min.css';

// const Video = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     shippin: "",
//     phone: "",
//     email: "",
//     password: "",
//     profileimg: "",
//     shipcountry: "",
//     shipstate: "",
//     shipcity: "",
//     language: "",
//     shipaddress: "",
//     industry: "",
//     gender: "",
//     dob: "",
//     instagram: "",
//     followers: "",
//     link: ""
//   });

//   const [video, setVideo] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setVideo(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });
//     if (video) {
//       const uniqueId = `${Date.now()}-${video.name}`;
//       data.append("introvideo", video, uniqueId);
//     }

//     try {
//       const response = await axios.post("completeProfile3.php", data, {
//         onUploadProgress: (progressEvent) => {
//           const total = progressEvent.total;
//           const current = progressEvent.loaded;
//           setProgress((current / total) * 100);
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error uploading the video:", error);
//     }
//   };

//   return (
//     <div className="complete-profile">
//       <div className="fp1">
//         <div className="Arrow21" style={{ display: "none" }}>
//           <img src="../assets/img/Group 61.png" alt="" />
//         </div>

//         <div className="Arrow21hd">
//           <h3>Complete Profile</h3>
//         </div>
//       </div>

//       <form id="frm" onSubmit={handleSubmit} encType="multipart/form-data">
//         <div className="g10img">
//           <img src="../assets/img/g10.png" alt="" />
//         </div>

//         <div className="YCnUpldVdCont">
//           <div className="YCnUpldVd">Your video is uploaded</div>
//           <div className="YCnUpldVdTxt"></div>
//         </div>

//         <div className="uploadVidBtn2">
//           <div>
//             <div className="uploadbtninnr2">
//               {video && (
//                 <video width="100%" height="70.5vw" controls>
//                   <source src={URL.createObjectURL(video)} type="video/mp4" />
//                 </video>
//               )}
//               <label htmlFor="fileInput2" id="uploadBtn2">
//                 <img
//                   src="../assets/img/ion_arrow-up-outline.png"
//                   alt="Upload Icon"
//                   id="uploadIcon2"
//                 />
//                 Upload Video
//                 <input
//                   type="file"
//                   name="introvideo"
//                   id="fileInput2"
//                   style={{ display: "none" }}
//                   onChange={handleFileChange}
//                 />
//               </label>
//             </div>
//           </div>

//           {progress > 0 && (
//             <div className="uploadVidProcess">
//               <div className="progress mt-4 mb-3">
//                 <div
//                   className="progress-bar bg-success"
//                   role="progressbar"
//                   style={{ width: `${progress}%` }}
//                 >
//                   {progress}%
//                 </div>
//               </div>
//               <div id="result"></div>
//             </div>
//           )}
//         </div>

//         <div className="group103">
//           <div className="personIcons1">
//             <img src="../assets/img/material-symbols_person-outline.png" alt="" />
//             <div className="line line2"></div>
//           </div>
//           <div className="loactionIcons1">
//             <img src="../assets/img/locat.png" alt="" />
//             <div className="line line2"></div>
//           </div>
//           <div className="industryIcons1">
//             <img src="../assets/img/cil_industry.png" alt="" />
//             <div className="line line2"></div>
//           </div>
//           <div className="DashIcons1">
//             <img src="../assets/img/Vector (3).png" alt="" />
//           </div>
//         </div>

//         <div className="profilebtn">
//           <input type="submit" value="Submit" name="completeregistration" />
//         </div>
//       </form>

//       <div className="AlreadyHaveAnAccountSignIn" style={{ display: "none" }}>
//         <span>Already have an account? </span>
//         <a href="">Sign-in</a>
//       </div>
//     </div>
//   );
// };

// export default Video;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Video = () => {
  const [formData, setFormData] = useState({
    username: "",
    shippin: "",
    phone: "",
    email: "",
    password: "",
    profileimg: "",
    shipcountry: "",
    shipstate: "",
    shipcity: "",
    language: "",
    shipaddress: "",
    industry: "",
    gender: "",
    dob: "",
    instagram: "",
    followers: "",
    link: ""
  });

  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type and size
      const validTypes = ["video/mp4", "video/avi", "video/mkv"];
      if (!validTypes.includes(file.type)) {
        toast.error("Please upload a valid video file.");
        return;
      }
      if (file.size > 20 * 1024 * 1024) { // 20 MB
        toast.error("File size should not exceed 20 MB.");
        return;
      }
      setVideo(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (video) {
      const uniqueId = `${Date.now()}-${video.name}`;
      data.append("introvideo", video, uniqueId);
    }

    try {
      const response = await axios.post("completeProfile3.php", data, {
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total;
          const current = progressEvent.loaded;
          setProgress((current / total) * 100);
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading the video:", error);
    }
  };

  return (
    <div className="complete-profile">
      <ToastContainer autoClose={3000} />
      <div className="fp1">
        <div className="Arrow21" style={{ display: "none" }}>
          <img src="../assets/img/Group 61.png" alt="" />
        </div>

        <div className="Arrow21hd">
          <h3>Complete Profile</h3>
        </div>
      </div>

      <form id="frm" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="g10img">
          <img src="../assets/img/g10.png" alt="" />
        </div>

        <div className="YCnUpldVdCont">
          <div className="YCnUpldVd">Your video is uploaded</div>
          <div className="YCnUpldVdTxt"></div>
        </div>

        <div className="uploadVidBtn2">
          <div>
            <div className="uploadbtninnr2">
              {video && (
                <video width="100%" height="70.5vw" controls>
                  <source src={URL.createObjectURL(video)} type="video/mp4" />
                </video>
              )}
              <label htmlFor="fileInput2" id="uploadBtn2">
                <img
                  src="../assets/img/ion_arrow-up-outline.png"
                  alt="Upload Icon"
                  id="uploadIcon2"
                />
                Upload Video
                <input
                  type="file"
                  name="introvideo"
                  id="fileInput2"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {progress > 0 && (
            <div className="uploadVidProcess">
              <div className="progress mt-4 mb-3">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
              <div id="result"></div>
            </div>
          )}
        </div>

        <div className="group103">
          <div className="personIcons1">
            <img src="../assets/img/material-symbols_person-outline.png" alt="" />
            <div className="line line2"></div>
          </div>
          <div className="loactionIcons1">
            <img src="../assets/img/locat.png" alt="" />
            <div className="line line2"></div>
          </div>
          <div className="industryIcons1">
            <img src="../assets/img/cil_industry.png" alt="" />
            <div className="line line2"></div>
          </div>
          <div className="DashIcons1">
            <img src="../assets/img/Vector (3).png" alt="" />
          </div>
        </div>

        <div className="profilebtn">
          <input type="submit" value="Submit" name="completeregistration" />
        </div>
      </form>

      <div className="AlreadyHaveAnAccountSignIn" style={{ display: "none" }}>
        <span>Already have an account? </span>
        <a href="">Sign-in</a>
      </div>
    </div>
  );
};

export default Video;
