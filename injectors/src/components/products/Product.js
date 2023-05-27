import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { ApplyOff, CurrentUser } from "../../apis/UserApi";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const Product = ({ ping, setPing }) => {
  const [user, setUser] = useState({
    babyname: "",
    age: "",
    weight: "",
    gender: "",
    size:"",
    injected:false,
    injected1:false,
    injected2:false,
    injected3:false,
    injected4:false,
    injected5:false,
    injected6:false,
    injected7:false,
  });
  const[parent,setParent]=useState({});

  const navigate = useNavigate();
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setParent(userLg.data.user);
  };

  
  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(user);
  console.log(parent);



  const hundelUpdate = async () => {
    ApplyOff(parent._id,user)
    // const config = { headers: { "Content-Type": "application/json" } };
    // const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/');
    
  };

  return (
    <div className="backk mdd">
      <div className="container shadow my-5 frr">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center foss order-2"
          >
            <h1 className="display-4 fw-bolder text-black">Hello</h1>
            <p className="lead text-center fw-bolder text-black">
              Enter Details Please
            </p>
            <h1 className="mb-4 fw-bolder text-black">Thank You</h1>
          </div>
          <div className="col-md-7 p-5 clr">
            <form>
              <div class="mb-3 ">
                <label for="name" class="form-label">
                  Baby Name :
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  class="form-control"
                  value={user?.babyname}
                  onChange={(e) =>
                    setUser({ ...user, babyname: e.target.value })}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Weight(kg) :
                </label>
                <input
                  placeholder="Weight"
                  type="double"
                  class="form-control"
                  value={user?.weight}
                  onChange={(e) =>
                    setUser({ ...user, weight: e.target.value })}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Age (Less than 1 : 1 month = 0.01) :
                </label>
                <input
                 placeholder="Age"
                  type="number"
                  class="form-control"
                  value={user?.age}
                  onChange={(e) =>
                    setUser({ ...user, age: e.target.value })}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Size (cm) :
                </label>
                <input
                 placeholder="Size"
                  type="number"
                  class="form-control"
                  value={user?.size}
                  onChange={(e) =>
                    setUser({ ...user, size: e.target.value })}
                />
              </div>

              <div>
                <label for="InputRole" class="form-label">
                  Gender :
                </label>
                <select class="form-control" name="role"   onChange={(e) =>
                    setUser({ ...user, gender: e.target.value })}>
                  <option>--SELECT--</option>
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                </select>
              </div>

              <br />
            

              <button
                type="button"
                class="btn btn-danger w-100 mt-4 rounded-pill"
                onClick={hundelUpdate}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
