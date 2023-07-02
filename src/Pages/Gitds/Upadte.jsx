import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Upadte() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    age: '',
    phone: '',
    bankDetails: '',
    address: '',
    kyc: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3306/user/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = event => {
    event.preventDefault();
    axios.put(`http://localhost:3306/user/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/gitds-admin');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className='d-flex justify-content-center align-items-center bg-light' style={{ paddingTop: '22px' }}>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name='name'
                className='form-control'
                placeholder='Enter Name'
                value={values.name}
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="age">Age:</label>
              <input
                type="age"
                name='age'
                className='form-control'
                placeholder='Enter Age'
                value={values.age}
                onChange={e => setValues({ ...values, age: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name='phone'
                className='form-control'
                placeholder='Enter Phone'
                value={values.phone}
                onChange={e => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="bankDetails">Bank Details:</label>
              <input
                type="bankDetails"
                name='bankDetails'
                className='form-control'
                placeholder='Enter Bank Details'
                value={values.bankDetails}
                onChange={e => setValues({ ...values, bankDetails: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="address">Address:</label>
              <input
                type="address"
                name='address'
                className='form-control'
                placeholder='Enter Address'
                value={values.address}
                onChange={e => setValues({ ...values, address: e.target.value })}
              />
            </div>
            <div className='mb-3 d-flex align-items-center'>
              <label htmlFor="kyc" className="me-2">KYC:</label>
              <div>
                <input
                  type="radio"
                  id="kycYes"
                  name="kyc"
                  value="Yes"
                  checked={values.kyc === "Yes"}
                  onChange={e => setValues({ ...values, kyc: e.target.value })}
                />
                <label htmlFor="kycYes" className="ms-1">Yes</label>
              </div>
              <div className="ms-3">
                <input
                  type="radio"
                  id="kycNo"
                  name="kyc"
                  value="No"
                  checked={values.kyc === "No"}
                  onChange={e => setValues({ ...values, kyc: e.target.value })}
                />
                <label htmlFor="kycNo" className="ms-1">No</label>
              </div>
            </div>

            <button className='btn btn-success'>Update</button>
            <Link to="/gitds-admin" className='btn btn-primary ms-3'>Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upadte;
