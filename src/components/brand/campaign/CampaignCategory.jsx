import React from 'react';
import "../../../styles/brand/Campaign/campaignCatrgory.css";

const CampaignCategory = () => {
  // Dummy data for categories
  const categories = [
    { id: 1, contentname: 'Category 1' },
    { id: 2, contentname: 'Category 2' },
    { id: 3, contentname: 'Category 3' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit function for demonstration
    console.log('Form submitted');
  };

  return (
    <>
      <div className="influtimelinesum">
        <h3>CATEGORY</h3>
        <div className="prjtmlsumboxx">
          <div className="prjtmlsumboxcntnt admninflulvlprc">
            <form id="categoryForm" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <table className="table table-bordered">
                  <h4>SELECT CATEGORY</h4>
                  <tbody>
                    <tr>
                      {categories.map((category) => (
                        <td key={category.id}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                              id={`contntcat${category.id}`}
                              type="radio"
                              name="cat"
                              value={category.id}
                              required
                            />
                            &nbsp;
                            <label htmlFor={`contntcat${category.id}`}>{category.contentname}</label>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginLeft: '80%' }}>
                <input type="submit" name="Next" className="btn btn-dark" value="Next" style={{ fontSize: 'calc(1vw + 1.1vh)' }} />
              </div>
              <input type="hidden" name="CategoryNext" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignCategory;
