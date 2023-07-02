import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



function Upadteb() {

    
    const { id } = useParams();
    const [values, setValues] = useState({
        bname: '',
        branch: '',
        ifsc: '',
        district: '',
        state: ''
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
                naviagte('/bank')
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
                            <label htmlFor="bname">Bank Name:</label>
                            <input type="text" name='bname' className='form-control' placeholder='Enter Bank Name'
                                value={values.bname} onChange={e => setValues({ ...values, bname: e.target.value })}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="branch">Branch:</label>
                            <input type="branch" name='branch' className='form-control' placeholder='Enter Branch'
                                value={values.branch} onChange={e => setValues({ ...values, branch: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ifsc">IFSC Code:</label>
                            <input type="ifsc" name='ifsc' className='form-control' placeholder='Enter IFSC Code'
                                value={values.ifsc} onChange={e => setValues({ ...values, ifsc: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="district">District:</label>
                            <input type="district" name='district' className='form-control' placeholder='Enter District'
                                value={values.district} onChange={e => setValues({ ...values, district: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="state">State:</label>
                            <input type="state" name='state' className='form-control' placeholder='Enter State'
                                value={values.state} onChange={e => setValues({ ...values, state: e.target.value })}/>
                        </div>
                        

                        <button className='btn btn-success'>Update</button>
                        <Link to="/bank" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Upadteb
