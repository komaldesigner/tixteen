import "../../../styles/brand/User/clientAccount.css";
import React, { useState } from 'react';
import axios from 'axios';

function ClientAccount() {
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const dummyData = {
    ClientClientName: 'John Doe',
    ClientBrandName: 'Acme Corp',
    ClientEmail: 'john.doe@example.com',
    ClientPhone: '123-456-7890',
    ClientGSTNo: '22AAAAA0000A1Z5',
    ClientWebsite: 'https://acme-corp.com',
    ClientNation: 'USA',
    ClientState: 'California',
    ClientCity: 'San Francisco',
  };

  const handleTogglePwd = () => setShowChangePwd(!showChangePwd);
  const handlePassword1Change = (e) => setPassword1(e.target.value);
  const handlePassword2Change = (e) => setPassword2(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setMessage('Those passwords don\'t match!');
    } else {
      setMessage('Password changed successfully.');
      // Mock API call
      axios.post('/api/change-password', { password: password1 })
        .then(response => {
          setMessage('Password changed successfully.');
        })
        .catch(error => {
          setMessage('An error occurred. Please try again.');
        });
    }
  };

  return (
    <div className="container">
      <header>
        <h3>My Account</h3>
      </header>
      <div className="account-box">
        <div className="row">
          <div className="col-md-12">
            <div className="account-inner-box">
              <div className="row">
                <div className="col-6">
                  <h4>
                    Personal Information &nbsp;
                    <b>
                      <a href="editclientaccount.php">
                        <i className="far fa-edit" title="Edit Profile"></i>
                      </a>
                    </b>
                  </h4>
                </div>
                <div className="col-6 text-right">
                  <h4>
                    Change Password &nbsp;
                    <b className="client-change-btn" onClick={handleTogglePwd}>
                      <i className="far fa-edit" title="Edit Password"></i>
                    </b>
                  </h4>
                </div>
              </div>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Client Name</td>
                    <td>{dummyData.ClientClientName}</td>
                  </tr>
                  <tr>
                    <td>Brand Name</td>
                    <td>{dummyData.ClientBrandName}</td>
                  </tr>
                  <tr>
                    <td>Email <i className="fas fa-lock"></i></td>
                    <td>{dummyData.ClientEmail}</td>
                  </tr>
                  <tr>
                    <td>Phone <i className="fas fa-lock"></i></td>
                    <td>{dummyData.ClientPhone}</td>
                  </tr>
                  <tr>
                    <td>GST No</td>
                    <td>{dummyData.ClientGSTNo}</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td>{dummyData.ClientWebsite}</td>
                  </tr>
                  <tr>
                    <td>Nation</td>
                    <td>{dummyData.ClientNation}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>{dummyData.ClientState}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{dummyData.ClientCity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showChangePwd && (
        <div className="client-change-pwd">
          <div className="password-edit-close-btn text-right">
            <b className="client-change-btn" onClick={handleTogglePwd}>
              <i className="far fa-times-circle"></i>
            </b>
          </div>
          <form name="frmClientChange" onSubmit={handleSubmit}>
            <div className="clint-brnd-pswrd-chng">
              <div className="message">{message}</div>
              <table className="table-save-form table table-bordered">
                <thead className="tableheader">
                  <tr>
                    <th colSpan="2">Change Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label>New Password</label></td>
                    <td>
                      <div className="position-relative">
                        <input
                          type="password"
                          name="password1"
                          id="password1"
                          className="form-control"
                          placeholder="Password*"
                          value={password1}
                          onChange={handlePassword1Change}
                          required
                        />
                        <i
                          className="fas fa-eye-slash toggle-password"
                          onClick={() => setPassword1(password1 ? '' : password1)}
                        ></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><label>Confirm Password</label></td>
                    <td>
                      <div className="position-relative">
                        <input
                          type="password"
                          name="password2"
                          id="password2"
                          className="form-control"
                          placeholder="Confirm Password*"
                          value={password2}
                          onChange={handlePassword2Change}
                          required
                        />
                        <i
                          className="fas fa-eye-slash toggle-password"
                          onClick={() => setPassword2(password2 ? '' : password2)}
                        ></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input
                        type="submit"
                        name="ClientChangePassword"
                        value="Submit"
                        className="btn btnSubmit"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ClientAccount;
