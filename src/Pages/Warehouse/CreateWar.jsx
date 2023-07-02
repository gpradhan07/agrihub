import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateWar() {
  const [values, setValues] = useState({
    org: '',
    name: '',
    address: '',
    tin: '',
    gstin: ''
  });
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3030/user', values)
      .then(res => {
        console.log(res);
        navigate('/warehouse');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className='d-flex justify-content-center align-items-center bg-light' style={{ paddingTop: '22px' }}>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Add a User</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="organization">Organization:</label>
              <input
                type="organization"
                name='organization'
                className='form-control'
                placeholder='Enter Organization'
                onChange={e => setValues({ ...values, org: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                name='name'
                className='form-control'
                placeholder='Enter Name'
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="address">Address:</label>
              <input
                type="address"
                name='address'
                className='form-control'
                placeholder='Enter Address'
                onChange={e => setValues({ ...values, address: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="tin">TIN No:</label>
              <input
                type="tin"
                name='tin'
                className='form-control'
                placeholder='Enter TIN No.'
                onChange={e => setValues({ ...values, tin: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="gstin">GSTIN No:</label>
              <input
                type="gstin"
                name='gstin'
                className='form-control'
                placeholder='Enter GSTIN No.'
                onChange={e => setValues({ ...values, gstin: e.target.value })}
              />
            </div>

            <button className='btn btn-success'>Submit</button>
            <Link to="/warehouse" className='btn btn-primary ms-3'>Back</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateWar;
