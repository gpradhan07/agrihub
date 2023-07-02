import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3306/api/gtidsadmin/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className='d-flex w-88 vh-88 justify-content-center align-items-center bg-light' style={{ paddingTop: '120px' }}>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Details of User</h3>
          <div>
            <strong>Name:</strong> {data.name}
          </div>
          <div className='mb-2'>
            <strong>Age:</strong> {data.age}
          </div>
          <div>
            <strong>Phone:</strong> {data.phone}
          </div>
          <div>
            <strong>Bank Details:</strong> {data.bankDetails}
          </div>
          <div>
            <strong>Address:</strong> {data.address}
          </div>
          <div>
            <strong>KYC:</strong> {data.kyc}
          </div>
          <Link to={`/gitds/update/${id}`} className='btn btn-success'>Edit</Link>
          <Link to="/gitds-admin" className='btn btn-primary ms-3'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
