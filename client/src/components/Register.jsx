import React from 'react'
import img1 from '../img/Art.png';
import { useState } from 'react';
import img2 from '../img/dora2.png';
const Register = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", cmail: "", dob: "", gender: "", studentno: "", unirollno: "", branch: "" })
    const host = "http://localhost:3005/api/form/reguser";
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const { name, email, password } = credentials;
        console.log(credentials);
    }


    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="box1">


                <img src={img2} alt="" className="anime-img" />
            </div>
            <div class="container">
                <header>Registration</header>

                <form >
                    <div class="form first">
                        <div class="details personal">
                            <span class="title">Personal Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Full Name</label>
                                    <input type="text" name='name' onChange={onchange} placeholder="Enter your name" required />
                                </div>

                                <div class="input-field">
                                    <label>Date of Birth</label>
                                    <input type="date" name='dob' onChange={onchange} placeholder="Enter birth date" required />
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input type="text" name='email' onChange={onchange} placeholder="Enter your email" required />
                                </div>
                                <div class="input-field">
                                    <label> College Email</label>
                                    <input type="text" name='cmail' onChange={onchange} placeholder="Enter your email" required />
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input type="number" name='number' onChange={onchange} placeholder="Enter mobile number" required />
                                </div>

                                <div class="input-field">
                                    <label>Gender</label>
                                    <select onChange={onchange} name="gender" required>
                                        <option selected>Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label>Studen No.</label>
                                    <input type="number" name='studentno' onChange={onchange} placeholder="ex . 2110038" required />
                                </div>
                                <div class="input-field">
                                    <label>University Roll No.</label>
                                    <input type="number" name='unirollno' onChange={onchange} placeholder="ex . 2110038" required />
                                </div>
                                <div class="input-field">
                                    <label>Branch</label>
                                    <select onChange={onchange} name="branch" required>
                                        <option >Select Branch</option>
                                        <option value="CSE">CSE</option>
                                        <option value="CSE(AIML)" >CSE(AIML)</option>
                                        <option value="CSE(DS)">CSE(DS)</option>
                                        <option value="AIML">AIML</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EE">EE</option>

                                    </select> </div>
                            </div>
                        </div>


                    </div>








                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>



    )
}

export default Register