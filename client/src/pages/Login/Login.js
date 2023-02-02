import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Box from "@mui/material/Box";

import Auth from "../../utils/auth.js";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
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
        <h1>Login Page</h1>
      </Box>
      <Box sx={{}}>
        <form onSubmit={handleFormSubmit}>
          <Box sx={{ mb: 1, fontSize: 25 }}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ mb: 1, fontSize: 25 }}>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </Box>
          <button type="submit">Login</button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
