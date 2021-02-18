import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ViewUser = () => {
    let {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        website:"",
        phone:""
    })

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
        // console.log("EditUser ", result.data);
    }
    const { name, username, email, phone, website } = user;   // specifies these all identifier refers to user 

    return(
        <div className="pt-3 container">
            <div className=" w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">View A User</h2>
                <form >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}  
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone} 
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">USER</button>
                </form>
            </div>
        </div>
    )
}

export default ViewUser;