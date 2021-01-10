import React from 'react';
import { Input } from '../Input';

const ChangePasswordForm = ({ handleSubmit }) => {

  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="currentPassword" type="password" value={values.currentPassword} handleChange={handleChange} />
      <Input name="newPassword" type="password" value={values.newPassword} handleChange={handleChange} />
      <Input name="rePassword" type="password" value={values.rePassword} handleChange={handleChange} />
      <button>
        Cambiar contrasña
      </button>
    </form>
  );
};

export default ChangePasswordForm;
