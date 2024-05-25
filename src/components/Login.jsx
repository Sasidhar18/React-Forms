import Input from "./Input";
import useInput from "./useInput";

const emailValidation = (email) => {
  return email.includes("@");
};

const passwordValidation = (password) => {
  return password.trim().length > 6;
};

export default function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: isEmailValid,
  } = useInput("", emailValidation);

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: ispasswordValid,
  } = useInput("", passwordValidation);

  const setFormSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={setFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={isEmailValid && "Please enter a valid email."}
        />

        <Input
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={ispasswordValid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
