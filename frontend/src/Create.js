import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        //api call
        axios.post('http://localhost:8081/create',{name,phone,email}).then(res =>{
            navigate('/');
        }).catch(err => console.log(err))

    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white rounded w-50 p-3">
        <form onSubmit={handleSubmit}>
            <h2>ADD USER</h2>


            
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control"
                onChange={e=> setName(e.target.value)}/>
            </div>

            <div className="mb-2">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Enter Phone" className="form-control"
                 onChange={e=> setPhone(e.target.value)}/>
            </div>


            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control"
                 onChange={e=> setEmail(e.target.value)}/>
            </div>

            <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Create;
