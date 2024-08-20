// import React, { useState } from 'react';
// import '../../../styles/creator/Auth/filechange.css';
// import GroupImage from '../../../assets/img/Group 160.png';
// import arrowUp from '../../../assets/img/arrow-up-outline.png';
// import arrowRight from '../../../assets/img/arrow-right.png';
// import material from '../../../assets/img/material-symbols_person-outline.png';
// import locat from '../../../assets/img/locat.png';
// import cil_industry from '../../../assets/img/cil_industry.png';
// import Vector from '../../../assets/img/Vector (3).png';
// import vidImg from '../../../assets/img/vidImg.png';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import MainLoader from '../../../utils/loader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faLock, faUser, faPhone, faEnvelope, faMapMarkerAlt, faIndustry, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';


// const UploadVideoAuth = ({ onVideoUpload }) => {
//   const [file, setFile] = useState(null);
// console.log("file",file)

//   const [progress, setUploadProgress] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [videoUrl, setVideoUrl] = useState('');
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
//     const validTypes = ['video/mp4', 'video/avi', 'video/mkv'];

//     if (!validTypes.includes(selectedFile.type)) {
//       toast.error('Please upload a valid video file.');
//       return;
//     }
//     if (selectedFile.size > maxSizeInBytes) {
//       toast.error('File size should not exceed 10 MB.');
//       return;
//     }

//     setFile(selectedFile);
//   };

//   const formatFileSize = (size) => {
//     const units = ['B', 'KB', 'MB', 'GB'];
//     let index = 0;

//     while (size >= 1024 && index < units.length - 1) {
//       size /= 1024;
//       index++;
//     }

//     return `${size.toFixed(2)} ${units[index]}`;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
// console.log("file",file)
//     try {
//       if (file) {
//         setUploading(true);
//         const videoUrl = await uploadToCloudinary(file, setUploadProgress, 10000);
//         setVideoUrl(videoUrl);
//         setUploading(false);
//         onVideoUpload({ videoUrl });
//       } else {
//         onVideoUpload({ videoUrl: '' });
//       }
//     } catch (error) {
//       console.error('Error occurred during the upload:', error);
//       setErrorMsg('Error occurred during the upload.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUploadLater = (event) => {
//     event.preventDefault();
//     onVideoUpload({ videoUrl: '' });
//   };

//   return (
//     <>
//       {uploading && <MainLoader />}
//       <ToastContainer position="top-center" style={{ width: '330px' }} />

//       <div className="complete-profile">
//         <div className="fp1">
//           <div className="Arrow21" style={{ display: 'none' }}>
//             <img src={GroupImage} alt="Arrow" />
//           </div>
//           <div className="Arrow21hd">
//             <h3>Complete Profile</h3>
//           </div>
//         </div>

//         <form id="myForm" onSubmit={handleSubmit} encType="multipart/form-data">
//           <div className="uploadvid">
//             <div className="UploadIntroVideo">Upload your Introduction Video</div>
//             <div className="FileSize">
//               <span>File size should not exceed 10 MB.</span>
//             </div>
//           </div>

//           <div className="uploadbtn">
//             <div className="uploadbtninnr">
//               <label htmlFor="influintrovidchng" id="uploadBtn">
//                 <img src={arrowUp} alt="Upload Icon" id="uploadIcon" />
//                 Upload
//                 <input
//                   type="file"
//                   id="influintrovidchng"
//                   name="introvideo"
//                   // accept="video/*"
//                   // hidden
//                   onChange={handleFileChange}
//                 />
//               </label>
//               {file && (
//                 <ul className="file-list" style={{ listStyle: 'none', fontSize: '2.9vw' }}>
//                   <li className="item">
//                     <span className="name">{file.name} ({formatFileSize(file.size)})</span>
//                   </li>
//                 </ul>
//               )}
//             </div>
//             <span className="upOR">or</span>
//             <button
//               type="button"
//               className="uploadbtnlater"
//               onClick={handleUploadLater}
//             >
//               Upload Later
//               <div className="arrow-right">
//                 <img src={arrowRight} alt="Arrow Right" />
//               </div>
//             </button>
//           </div>

//           <div className="sampleVid">
//             <div id="loader" className="loader" style={{ display: 'none' }}></div>
//             <div id="progressBar" style={{ display: progress > 0 ? 'block' : 'none' }}>
//               <div id="progress">{progress}%</div>
//             </div>
//             {videoUrl ? (
//               <div className="uploaded-video">
//                 <div className="SampleVidHd">Your Video</div>
//                 <video controls style={{ maxWidth: '100%' }}>
//                   <source src={videoUrl} type="video/mp4" />
//                   Your browser does not support HTML video.
//                 </video>
//               </div>
//             ) : (
//               <div className="vidimg">
//                 <div className="SampleVidHd">Sample Video</div>
//                 <img src={vidImg} alt="Sample Video" />
//               </div>
//             )}
//           </div>

//           <div className="group103">
//                             <div className="personIcons1">
//                                 <FontAwesomeIcon icon={faUser} size="lg" />
//                                 <div className="line line2"></div>
//                             </div>
//                             <div className="loactionIcons1">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
//                                 <div className="line line2"></div>
//                             </div>
//                             <div className="industryIcons1">
//                                 <FontAwesomeIcon icon={faIndustry} size="lg" />
//                                 <div className="line line2"></div>
//                             </div>
//                             <div className="DashIcons1">
//                                 <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
//                             </div>
//                         </div>

         

//           <div className="profilebtn">
//             <span id="error-msg" style={{ color: 'red' }}>{errorMsg}</span>
//             <input type="submit" value="Submit" name="influregistrbtn" />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default UploadVideoAuth;

import React, { useState } from 'react';
import '../../../styles/creator/Auth/filechange.css';
import GroupImage from '../../../assets/img/Group 160.png';
import arrowUp from '../../../assets/img/arrow-up-outline.png';
import arrowRight from '../../../assets/img/arrow-right.png';
import vidImg from '../../../assets/img/vidImg.png';
import uploadToCloudinary from '../../../utils/cloudinaryUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLoader from '../../../utils/loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faIndustry, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const UploadVideoAuth = ({ onVideoUpload }) => {
  const [file, setFile] = useState(null);
  const [progress, setUploadProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
    const validTypes = ['video/mp4', 'video/avi', 'video/mkv'];

    if (!validTypes.includes(selectedFile.type)) {
      toast.error('Please upload a valid video file.');
      return;
    }
    if (selectedFile.size > maxSizeInBytes) {
      toast.error('File size should not exceed 10 MB.');
      return;
    }

    setFile(selectedFile);
  };

  const formatFileSize = (size) => {
    const units = ['B', 'KB', 'MB', 'GB'];
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (file) {
        setUploading(true);
        const videoUrl = await uploadToCloudinary(file, setUploadProgress, 10000);
        setVideoUrl(videoUrl);
        setUploading(false);
        onVideoUpload({ videoUrl });
      } else {
        onVideoUpload({ videoUrl: '' });
      }
    } catch (error) {
      console.error('Error occurred during the upload:', error);
      setErrorMsg('Error occurred during the upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleUploadLater = (event) => {
    event.preventDefault();
    onVideoUpload({ videoUrl: '' });
  };

  return (
    <>
      {uploading && (
        <div className="uploading-overlay">
          <div className="upload-progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="upload-loader"></div>
          <div className="upload-progress-text">{progress}%</div>
        </div>
      )}
      <ToastContainer position="top-center" style={{ width: '330px' }} />

      <div className="complete-profile">
        <div className="fp1">
          <div className="Arrow21" style={{ display: 'none' }}>
            <img src={GroupImage} alt="Arrow" />
          </div>
          <div className="Arrow21hd">
            <h3>Complete Profile</h3>
          </div>
        </div>

        <form id="myForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="uploadvid">
            <div className="UploadIntroVideo">Upload your Introduction Video</div>
            <div className="FileSize">
              <span>File size should not exceed 10 MB.</span>
            </div>
          </div>

          <div className="uploadbtn">
            <div className="uploadbtninnr">
              <label htmlFor="influintrovidchng" id="uploadBtn">
                <img src={arrowUp} alt="Upload Icon" id="uploadIcon" />
                {file ? 'Update Video' : 'Upload Video'}
                <input
                  type="file"
                  id="influintrovidchng"
                  name="introvideo"
                  onChange={handleFileChange}
                />
              </label>
              {file && (
                <ul className="file-list" style={{ listStyle: 'none', fontSize: '2.9vw' }}>
                  <li className="item">
                    <span className="name">{file.name} ({formatFileSize(file.size)})</span>
                  </li>
                </ul>
              )}
            </div>
            <span className="upOR">or</span>
            <button
              type="button"
              className="uploadbtnlater"
              onClick={handleUploadLater}
            >
              Upload Later
              <div className="arrow-right">
                <img src={arrowRight} alt="Arrow Right" />
              </div>
            </button>
          </div>

          <div className="sampleVid">
            <div className="vidimg">
              <div className="SampleVidHd">Sample Video</div>
              {videoUrl ? (
                <video controls style={{ maxWidth: '100%' }}>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              ) : (
                <img src={vidImg} alt="Sample Video" />
              )}
            </div>
          </div>

          <div className="group103">
            <div className="personIcons1">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <div className="line line2"></div>
            </div>
            <div className="loactionIcons1">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <div className="line line2"></div>
            </div>
            <div className="industryIcons1">
              <FontAwesomeIcon icon={faIndustry} size="lg" />
              <div className="line line2"></div>
            </div>
            <div className="DashIcons1">
              <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
            </div>
          </div>

          <div className="profilebtn">
            <span id="error-msg" style={{ color: 'red' }}>{errorMsg}</span>
            <input type="submit" value="Submit" name="influregistrbtn" />
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadVideoAuth;
