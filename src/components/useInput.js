import { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleBlur,
    hasError: didEdit && !valueIsValid,
  };
};

export default useInput;
