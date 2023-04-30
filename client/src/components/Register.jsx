import React from 'react'
import img1 from '../img/Art.png';
import img2 from '../img/dora2.png';
const Register = () => {
    return (
        <>
            <div className="box1">


                <img src={img2} alt="" className="anime-img" />
            </div>
            <div class="container">
                <header>Registration</header>

                <form action="#">
                    <div class="form first">
                        <div class="details personal">
                            <span class="title">Personal Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>

                                <div class="input-field">
                                    <label>Date of Birth</label>
                                    <input type="date" placeholder="Enter birth date" required />
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter your email" required />
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input type="number" placeholder="Enter mobile number" required />
                                </div>

                                <div class="input-field">
                                    <label>Gender</label>
                                    <select required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label>Occupation</label>
                                    <input type="text" placeholder="Enter your ccupation" required />
                                </div>
                            </div>
                        </div>


                    </div>








                </form>
                <button>Submit</button>
            </div>
        </>



    )
}

export default Register