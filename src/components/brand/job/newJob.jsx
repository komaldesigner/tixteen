// import React, { useState } from 'react';
// import axios from 'axios';

// function YourComponent() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [formData, setFormData] = useState({
//     ClientName: '',
//     campaignname: '',
//     product: '',
//     industry: '',
//     language: '',
//     age: '',
//     tillage: '',
//     gender: '',
//     remark: '',
//     hashtag: '',
//     attachment: null,
//     platforms: '',
//     platformlink: '',
//     profiletag: '',
//     todo: '',
//     nottodo: '',
//     campaignprice: '',
//     Deadline: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, attachment: e.target.files[0] });
//   };

//   const handleCategoryChange = async (categoryId) => {
//     setSelectedCategory(categoryId);
//     try {
//       const response = await axios.post('ajax_new_job.php', { value: categoryId });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (window.confirm('Are you Sure, you want to create a New Job with given Details')) {
//       try {
//         const response = await axios.post(`${process.env.REACT_APP_API_URL}/brand/NewJob.php`, formData, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         });
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="influtimelinesum">
//       <h3>CATEGORY</h3>
//       <div className="prjtmlsumboxx container" style={{ width: 'unset' }}>
//         <div className="prjtmlsumboxcntnt admninflulvlprc">
//           <form id="jobfrm" onSubmit={handleSubmit}>
//             <h4>SELECT CATEGORY</h4>
//             <table className="table table-bordered">
//               <tbody>
//                 <tr>
//                   {/* Map through categories */}
//                   {categories.map((category) => (
//                     <td key={category.id}>
//                       <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <input
//                           type="radio"
//                           id={`contntcat${category.id}`}
//                           name="cat"
//                           value={category.id}
//                           required
//                           checked={selectedCategory === category.id}
//                           onChange={() => handleCategoryChange(category.id)}
//                           style={{ width: 'auto' }}
//                         />
//                         &nbsp;
//                         <label htmlFor={`contntcat${category.id}`}>{category.contentname}</label>
//                       </div>
//                     </td>
//                   ))}
//                 </tr>
//               </tbody>
//             </table>
//             <span className="r-text">{selectedCategory}</span>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourComponent;
import "../../../styles/brand/job/newjob.css"

import React, { useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    ClientName: '',
    campaignname: '',
    product: '',
    industry: '',
    language: '',
    age: '',
    tillage: '',
    gender: '',
    remark: '',
    hashtag: '',
    attachment: null,
    platforms: '',
    platformlink: '',
    profiletag: '',
    todo: '',
    nottodo: '',
    campaignprice: '',
    Deadline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleCategoryChange = async (categoryId) => {
    setSelectedCategory(categoryId);
    try {
      // Simulated response
      const response = { data: `Data for category ${categoryId}` };
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you Sure, you want to create a New Job with given Details')) {
      try {
        // Simulated response
        const response = { data: 'Form submitted successfully' };
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="influtimelinesum">
      <h3>CATEGORY</h3>
      <div className="prjtmlsumboxx container" style={{ width: 'unset' }}>
        <div className="prjtmlsumboxcntnt admninflulvlprc">
          <form id="jobfrm" onSubmit={handleSubmit}>
            <h4>SELECT CATEGORY</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  {/* Dummy categories */}
                  {[1, 2, 3].map((categoryId) => (
                    <td key={categoryId}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          id={`contntcat${categoryId}`}
                          name="cat"
                          value={categoryId}
                          required
                          checked={selectedCategory === categoryId}
                          onChange={() => handleCategoryChange(categoryId)}
                          style={{ width: 'auto' }}
                        />
                        &nbsp;
                        <label htmlFor={`contntcat${categoryId}`}>{`Category ${categoryId}`}</label>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <span className="r-text">{`Selected category: ${selectedCategory}`}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
