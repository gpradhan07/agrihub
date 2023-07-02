import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function ReadWar() {

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
                    <strong>Organization :</strong> {data.org}
                </div>
                <div className='mb-2'>
                    <strong>Name :</strong> {data.name}
                </div>
                <div>
                    <strong>Address :</strong> {data.address}
                </div>
                <div>
                    <strong>TIN No. :</strong> {data.tin}
                </div>
                <div>
                    <strong>GSTIN No. :</strong> {data.gstin}
                </div>
                
                <Link to={`/warehouse/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to="/warehouse" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
        </div>

    )
}

export default ReadWar
