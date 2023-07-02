import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Readb() {

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
                    <strong>Bank Name :</strong> {data.bname}
                </div>
                <div className='mb-2'>
                    <strong>Barnch :</strong> {data.branch}
                </div>
                <div>
                    <strong>IFSC Code :</strong> {data.ifsc}
                </div>
                <div>
                    <strong>District :</strong> {data.district}
                </div>
                <div>
                    <strong>State :</strong> {data.state}
                </div>
                
                <Link to={`/bank/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to="/bank" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
        </div>

    )
}

export default Readb
