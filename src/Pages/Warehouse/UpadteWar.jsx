import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



function UpadteWar() {

    
    const { id } = useParams();
    const [values, setValues] = useState({
        org: '',
        name: '',
        address: '',
        tin: '',
        gstin: ''
    })
    useEffect(() => {
        axios.get('http://localhost:3030/user/' + id)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const naviagte = useNavigate();

    const handleUpadte = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3030/user/'+id, values)
            .then(res => {
                console.log(res)
                naviagte('/warehouse')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <header className="Header">
                <h2 className="Header-title">AGRIHUB</h2>
            </header>
            <div className='d-flex justify-content-center align-items-center bg-light' style={{ paddingTop: '22px' }}>
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpadte} >
                        <div className='mb-2'>
                            <label htmlFor="organization">Oragnization :</label>
                            <input type="text" name='oragnization' className='form-control' placeholder='Enter Oragnization'
                                value={values.org} onChange={e => setValues({ ...values, org: e.target.value })}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Name'
                                value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name='address' className='form-control' placeholder='Enter Address'
                                value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="tin">TIN No:</label>
                            <input type="text" name='tin' className='form-control' placeholder='Enter TIN No.'
                                value={values.tin} onChange={e => setValues({ ...values, tin: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="gstin">GSTIN No. :</label>
                            <input type="text" name='gstin' className='form-control' placeholder='Enter GSTIN No.'
                                value={values.gstin} onChange={e => setValues({ ...values, gstin: e.target.value })}/>
                        </div>
                        

                        <button className='btn btn-success'>Update</button>
                        <Link to="/warehouse" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpadteWar
