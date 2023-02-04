import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";
import Box from "@mui/material/Box";
import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box
      sx={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mb: 2, fontSize: 25 }}>
        <h1>Register</h1>
      </Box>
      <form onSubmit={handleFormSubmit}>
        <p>Name</p>
        <Box sx={{ mb: 2, fontSize: 25 }}>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </Box>
        <p>Email</p>
        <Box sx={{ mb: 2, fontSize: 25 }}>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </Box>
        <p>Password</p>
        <Box sx={{ mb: 2, fontSize: 25 }} s>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ fontSize: 18 }}>
          <button type="submit">Register</button>
        </Box>
      </form>
    </Box>
  );
}

export default Register;
