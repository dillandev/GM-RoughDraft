//component
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLoginForm } from  '../../hooks/auth/useSigninForm.jsx';
import AppMessage from '../../widgets/AppMessage';
import { stackSx, titleSx, inputSx, buttonSx  } from "../../styles/auth/SharerSigninForm.js";

export default function SharerSigninFormView() {
  const { signin, isLoading, error } = useLoginForm();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [localError, setLocalError] = useState("");

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLocalError("");

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (!email || !password) {
      setLocalError("All fields are required.");
      return;
    }

    const payload = {
      email,
      password,
    };

    try {
      await signin(payload);
    } catch (err) {
      setLocalError("Signin failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Stack sx={stackSx} spacing={2}>
        <Typography sx={titleSx} variant="h4">Sign In</Typography>

        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          sx={inputSx}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          sx={inputSx}
        />

        <Button 
          type="submit" 
          disabled={isLoading}
           sx={buttonSx}
          >
          Signin
        </Button>

        <div>
        <AppMessage severity="error">
          {localError || error?.message}
        </AppMessage>
        </div>
      </Stack>
    </form>
  );
}