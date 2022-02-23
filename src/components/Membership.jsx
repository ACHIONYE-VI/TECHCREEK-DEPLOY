import { useState } from "react";
import MembershipLogo from "./assets/images/logo-blue.png";
import "../components/Styles/Membership.scss";

const MembershipPage = () => {
  /* usestate */
  const [form, setForm] = useState(true);

  return (
    <div className="membership--container">
      <div className="layout">
        <div className="image--container">
          <div className="image">
            <img src={MembershipLogo} alt="" />
          </div>
        </div>

        <div className="form--container">
          <h3>Join the creek?</h3>
          <div className="trigers">
            <button onClick={() => setForm(true)}>Sign In</button>
            <button onClick={() => setForm(false)}>Sign Up</button>
          </div>

          <div className="sign--in">
            {form ? (
              <form action="">
                <div className="inputs">
                  <input type="text" placeholder="Enter email" />
                  <input type="password" placeholder="Enter password" />
                </div>
                <div className="checkbox--container">
                  <div className="check--box">
                    <input type="checkbox" /> <span>Remember me</span>
                  </div>
                  <div className="forgot--text">
                    <a href="#"> Forgotten Password? </a>
                  </div>
                </div>
                <div className="btn">
                  <button>Log In</button>
                </div>
              </form>
            ) : null}
          </div>

          {/*  register form */}
          <div
            className="register" /* style={{
                        display: "none"
                    }} */
          >
            {!form ? (
              <form action="">
                <div className="inputs">
                  <input type="text" placeholder="Enter Fullname" />
                  <input type="mail" placeholder="Enter email" />
                  <select
                    name="category"
                    id="category"
                    placeholder="Please Select">
                    <option value="Please Select">Please Select</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>

                <div className="checkbox--container">
                  <div className="check--box">
                    <input type="checkbox" /> <span>Remember my info</span>
                  </div>
                  <div className="forgot--text">
                    <a href="#"> Forgotten Password? </a>
                  </div>
                </div>
                <div className="btn">
                  <button>Log In</button>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
