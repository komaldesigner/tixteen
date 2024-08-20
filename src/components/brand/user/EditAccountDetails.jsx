import React from 'react';

function EditAccountDetails({ Clientprofileimg, ClientClientName, ClientBrandName, ClientGSTNo, ClientWebsite, ClientNation, ClientState, ClientCity }) {
  return (
    <>

      <div className="influtimelinesum">
        <h3>Edit Account Details</h3>

        <div className="influaccountbox">
          <div className="row">
            <div className="col-md-12">
              <div className="influacntinnerbox">
                <h4>Personal Information</h4>
                <form method="POST" action="" encType="multipart/form-data">
                  <table className="table table-striped">
                    <tr>
                      <td>Profile Image</td>
                      <td>
                        <input type="file" name="profileimg" defaultValue={Clientprofileimg} placeholder="Enter First Name" />
                        <img src={`../assets/img/profileimg/${Clientprofileimg}`} width="100px" alt="Profile" />
                      </td>
                    </tr>
                    <tr>
                      <td>Client Name</td>
                      <td><input type="text" name="ClientName" defaultValue={ClientClientName} placeholder="Enter Client Name" required /></td>
                    </tr>
                    <tr>
                      <td>Brand Name</td>
                      <td><input type="text" name="BrandName" defaultValue={ClientBrandName} placeholder="Enter Brand Name" required /></td>
                    </tr>
                    <tr>
                      <td>GST No</td>
                      <td><input type="text" name="GSTNo" defaultValue={ClientGSTNo} placeholder="Enter GST No." required /></td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td><input type="text" name="Website" defaultValue={ClientWebsite} placeholder="Enter Website" required /></td>
                    </tr>
                    <tr>
                      <td>Nation</td>
                      <td><input type="text" name="Nation" defaultValue={ClientNation} placeholder="Enter Nation" required /></td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td><input type="text" name="State" defaultValue={ClientState} placeholder="Enter State" required /></td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td><input type="text" name="City" defaultValue={ClientCity} placeholder="Enter City" required /></td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <div style={{ textAlign: 'right' }}><input type="submit" className="btn btn-success" name="clientaccpersnlinfo" value="Submit" /></div>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default EditAccountDetails;
