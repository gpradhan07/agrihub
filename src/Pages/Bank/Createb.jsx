import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Createb() {
    const [values, setValues] = useState({
        bname: '',
        branch: '',
        ifsc: '',
        district: '',
        state: ''
    })
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
            <div className='d-flex justify-content-center align-items-center bg-light' style={{ paddingTop: '22px' }}>
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h3>Add a User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label htmlFor="bname">Bank Name :</label>
                            <input type="text" name='bname' className='form-control' placeholder='Enter Bank Name '
                                onChange={e => setValues({ ...values, bname: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="age">Branch:</label>
                            <input type="branch" name='branch' className='form-control' placeholder='Enter Branch'
                                onChange={e => setValues({ ...values, branch: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ifsc">IFSC code:</label>
                            <input type="text" name='ifsc' className='form-control' placeholder='Enter IFSC code'
                                onChange={e => setValues({ ...values, ifsc: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="district">District:</label>
                            <input type="district" name='district' className='form-control' placeholder='Enter District'
                                onChange={e => setValues({ ...values, district: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="state">State:</label>
                            <input type="state" name='state' className='form-control' placeholder='Enter State'
                                onChange={e => setValues({ ...values, state: e.target.value })} />
                        </div>
                        

                        <button className='btn btn-success'>Submit</button>
                        <Link to="/bank" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Createb
