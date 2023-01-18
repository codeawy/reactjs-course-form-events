import { Fragment, useState } from "react";
import loginFormInputs from "../../list/loginFormInputs";
import "./LoginForm.scss";

// TODO Add select element
const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    password: "",
    username: "Naga",
    address: "",
    email: "",
    cars: "",
  });

  /** ------- HANDLER ------- */
  const loginFormHandler = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  /** ------- RENDER ------- */
  const renderFormInputs = loginFormInputs.map(({ type, name, label, required }, idx) => {
    return idx === 2 ? (
      <Fragment key={idx}>
        <select name="cars" id="cars" value={userInfo.cars} onChange={loginFormHandler}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="input">
          <input
            className="input-field"
            type={type}
            name={name}
            value={userInfo[name]}
            onChange={loginFormHandler}
            required={required}
          />
          <label className="input-label">{label}</label>
        </div>
      </Fragment>
    ) : (
      <div className="input" key={idx}>
        <input
          className="input-field"
          type={type}
          name={name}
          value={userInfo[name]}
          onChange={loginFormHandler}
          required={required}
        />
        <label className="input-label">{label}</label>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="card">
        <div className="card-image" />

        <form className="card-form" autoComplete="off">
          {renderFormInputs}

          <div className="action">
            <button className="action-button">Get started</button>
          </div>
        </form>
        <div className="card-info">
          <p>
            By signing up you are agreeing to our <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// * Controlled Component
// *  - Value
// *  - onChange => event
