import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';


function Warehouse() {
  

  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3030/user')
      .then(res => setdata(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would You Like To Delete ?")
    if(confirm){
      axios.delete('http://localhost:3030/user/' + id)
      .then(res => {
          window.location.reload()
      }).catch(err => console.log(err));
    }
  };

  return (
    <div>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar" style={{ width: '250px' }}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/gitds-admin" className="nav-link">GITDS Admin</Link>
              </li>
              <li className="nav-item">
                <Link to="/bc-agent" className="nav-link">BC Agent</Link>
              </li>
              <li className="nav-item">
                <Link to="/bank" className="nav-link">Bank</Link>
              </li>
              <li className="nav-item">
                <Link to="/warehouse" className="nav-link">Warehouse</Link>
              </li>
              <li className="nav-item">
                <Link to="/farmer" className="nav-link">Farmer</Link>
              </li>
            </ul>
          </div>
          <div className="col-10 content">
              <div className='w-100 rounded bg-white border shadow p-4 '>
              <h4>Warehouse Page</h4>
                <div className='d-flex justify-content-end'>
                  <Link to="/warehouse/create" className='btn btn-success'> Add +</Link>
                </div>
                <table className='table table-striped'>
                  <thead>
                    <tr style={{ fontWeight: 'bold'}}>
                      <td>Id</td>
                      <td>Oragnization</td>
                      <td>Name</td>
                      <td>Address</td>
                      
                      <td>Action</td>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((d, i) => (
                        <tr key={i}>
                          <td>{d.id}</td>
                          <td>{d.org}</td>
                          <td>{d.name}</td>
                          <td>{d.address}</td>
                          
                          <td>
                            <Link to={`/warehouse/read/${d.id}`} className='btn btn-sm btn-info'  style={{ marginRight: '8px' }}>Details</Link>
                            <Link to={`/warehouse/update/${d.id}`} className='btn btn-sm btn-primary'  style={{ marginRight: '8px' }}>Edit</Link>
                            <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Warehouse;
