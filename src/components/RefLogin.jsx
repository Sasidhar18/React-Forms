import { useRef, useState } from "react";

export default function RefLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [inputError, setInputError] = useState({
    email: false,
    password: false,
  });

  const setFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" || !email.includes("@")) {
      setInputError((prevState) => ({
        ...prevState,
        email: true,
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        email: false,
      }));
    }
    if (password === "" || !password.trim().length > 6) {
      setInputError((prevState) => ({
        ...prevState,
        password: true,
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        password: false,
      }));
    }

    console.log(email, password);
  };
console.log(inputError.email)
  return (
    <form onSubmit={setFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          {inputError.email && (
            <div className="control-error">
              <p>Please enter a valid email.</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
          {inputError.password && (
            <div className="control-error">
              <p>Please enter a valid password.</p>
            </div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
