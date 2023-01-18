import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image" />
        <form className="card-form" autoComplete="off">
          <div className="input">
            <input type="email" className="input-field" required />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input type="password" className="input-field" required />
            <label className="input-label">Password</label>
          </div>
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
