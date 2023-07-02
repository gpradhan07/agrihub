import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



function Upadtebc() {

    
    const { id } = useParams();
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
                naviagte('/bc-agent')
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
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Name'
                                value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="age">Age:</label>
                            <input type="age" name='age' className='form-control' placeholder='Enter Age'
                                value={values.age} onChange={e => setValues({ ...values, age: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                                value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="bankDetails">Bank Details:</label>
                            <input type="bankDetails" name='bankDetails' className='form-control' placeholder='Enter Bank Deatils'
                                value={values.bankDetails} onChange={e => setValues({ ...values, bankDetails: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="address">Addres:</label>
                            <input type="address" name='address' className='form-control' placeholder='Enter Address'
                                value={values.address} onChange={e => setValues({ ...values, address: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="plot">Plot No.:</label>
                            <input type="plot" name='plot' className='form-control' placeholder='Enter Plot No.'
                                value={values.plot} onChange={e => setValues({ ...values, plot: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="village">Village:</label>
                            <input type="village" name='village' className='form-control' placeholder='Enter Village'
                                value={values.village} onChange={e => setValues({ ...values, village: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ri">RI :</label>
                            <input type="ri" name='ri' className='form-control' placeholder='Enter RI'
                                value={values.ri} onChange={e => setValues({ ...values, ri: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="tehsil">Teshil:</label>
                            <input type="tehsil" name='tehsil' className='form-control' placeholder='Enter Tehsil'
                                value={values.tehsil} onChange={e => setValues({ ...values, tehsil: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="bloc">Block :</label>
                            <input type="block" name='block' className='form-control' placeholder='Enter Block'
                                value={values.block} onChange={e => setValues({ ...values, block: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="district">District :</label>
                            <input type="district" name='district' className='form-control' placeholder='Enter District'
                                value={values.distr} onChange={e => setValues({ ...values, distr: e.target.value })}/>
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
                        <Link to="/bc-agent" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Upadtebc
