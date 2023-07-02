import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Readbc() {

    const [data, setdata] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3030/user/' + id)
            .then(res => setdata(res.data))
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
                    <strong>Name :</strong> {data.name}
                </div>
                <div className='mb-2'>
                    <strong>Age :</strong> {data.age}
                </div>
                <div>
                    <strong>Phone :</strong> {data.phone}
                </div>
                <div>
                    <strong>Bank Details :</strong> {data.bankDetails}
                </div>
                <div>
                    <strong>Address :</strong> {data.address}
                </div>
                <div>
                    <strong>Plot No. :</strong> {data.plot}
                </div>
                <div>
                    <strong>Village :</strong> {data.village}
                </div>
                <div>
                    <strong>RI :</strong> {data.ri}
                </div>
                <div>
                    <strong>Tehsil :</strong> {data.tehsil}
                </div>
                <div>
                    <strong>Block :</strong> {data.block}
                </div>
                <div>
                    <strong>District :</strong> {data.distr}
                </div>
                <div>
                    <strong>KYC :</strong> {data.kyc}
                </div>
                <Link to={`/bc-agent/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to="/bc-agent" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
        </div>

    )
}

export default Readbc
