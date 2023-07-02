import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Createf() {
    const [values, setValues] = useState({
        name: '',
        age: '',
        phone: '',
        bankDetails: '',
        address: '',
        plot:'',
        village:'',
        ri:'',
        tehsil:'',
        block:'',
        distr:'',
        kyc: ''
    })
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:3030/user', values)
            .then(res => {
                console.log(res)
                navigate('/farmer')
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
                    <h3>Add a User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Name'
                                onChange={e => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="age">Age:</label>
                            <input type="age" name='age' className='form-control' placeholder='Enter Age'
                                onChange={e => setValues({ ...values, age: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                                onChange={e => setValues({ ...values, phone: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="bankDetails">Bank Details:</label>
                            <input type="bankDetails" name='bankDetails' className='form-control' placeholder='Enter Bank Deatils'
                                onChange={e => setValues({ ...values, bankDetails: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="address">Addres:</label>
                            <input type="address" name='address' className='form-control' placeholder='Enter Address'
                                onChange={e => setValues({ ...values, address: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="plot">Plot No:</label>
                            <input type="plot" name='plot' className='form-control' placeholder='Enter Plot No.'
                                onChange={e => setValues({ ...values, plot: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="plot">Village :</label>
                            <input type="village" name='village' className='form-control' placeholder='Enter village'
                                onChange={e => setValues({ ...values, village: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ri">RI :</label>
                            <input type="ri" name='ri' className='form-control' placeholder='Enter RI'
                                onChange={e => setValues({ ...values, ri: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="teshsil">Tehsil:</label>
                            <input type="teshsil" name='tehsil' className='form-control' placeholder='Enter Tehsil'
                                onChange={e => setValues({ ...values, tehsil: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="block">Block:</label>
                            <input type="text" name='block' className='form-control' placeholder='Enter Block'
                                onChange={e => setValues({ ...values, block: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="district">District:</label>
                            <input type="text" name='district' className='form-control' placeholder='Enter District'
                                onChange={e => setValues({ ...values, distr: e.target.value })} />
                        </div>
                        <div className='mb-3 d-flex align-items-center'>
                            <label htmlFor="kyc" className="me-2">KYC:</label>
                            <div>
                                <input
                                    type="radio"
                                    id="kycYes"
                                    name="kyc"
                                    value="Yes"
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
                                    onChange={e => setValues({ ...values, kyc: e.target.value })}
                                />
                                <label htmlFor="kycNo" className="ms-1">No</label>
                            </div>
                        </div>

                        <button className='btn btn-success'>Submit</button>
                        <Link to="/farmer" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Createf
