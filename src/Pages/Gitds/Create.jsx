import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: '',
    age: '',
    phone: '',
    bankDetails: '',
    address: '',
    kyc: ''
  });

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3030/user', values)
        .then(res => {
            console.log(res)
            navigate('/bank')
        })
        .catch(err => console.log(err));
};
  return (
    <div>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ paddingTop: '22px' }}>
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h3>Add a User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age:</label>
              <input
                type="age"
                id="age"
                name="age"
                className="form-control"
                placeholder="Enter Age"
                onChange={(e) => setValues({ ...values, age: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter Phone"
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="bankDetails">Bank Details:</label>
              <input
                type="bankDetails"
                id="bankDetails"
                name="bankDetails"
                className="form-control"
                placeholder="Enter Bank Details"
                onChange={(e) => setValues({ ...values, bankDetails: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address:</label>
              <input
                type="address"
                id="address"
                name="address"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => setValues({ ...values, address: e.target.value })}
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="kyc" className="me-2">KYC:</label>
              <div>
                <input
                  type="radio"
                  id="kycYes"
                  name="kyc"
                  value="Yes"
                  onChange={(e) => setValues({ ...values, kyc: e.target.value })}
                />
                <label htmlFor="kycYes" className="ms-1">Yes</label>
              </div>
              <div className="ms-3">
                <input
                  type="radio"
                  id="kycNo"
                  name="kyc"
                  value="No"
                  onChange={(e) => setValues({ ...values, kyc: e.target.value })}
                />
                <label htmlFor="kycNo" className="ms-1">No</label>
              </div>
            </div>

            <button className="btn btn-success">Submit</button>
            <Link to="/gitds-admin" className="btn btn-primary ms-3">Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
