//component
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSharerSignupForm } from  '../../hooks/auth/useSharerSignupForm.jsx';
import AppMessage from '../../widgets/AppMessage';
import { stackSx, titleSx, inputSx, buttonSx  } from "../../styles/auth/SharerSignupForm.js";

export default function SharerSignupFormView() {
  const { signup, isLoading, error } = useSharerSignupForm();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const username = form.username.trim();
    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (!username || !email || !password) {
      setLocalError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setLocalError("Password must be at least 8 characters.");
      return;
    }

    const payload = {
      username,
      email,
      password,
    };

    try {
      await signup(payload);
    } catch (err) {
      setLocalError("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Stack sx={stackSx} spacing={2}>
        <Typography sx={titleSx} variant="h4">Sharer Sign Up</Typography>

        <TextField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          sx={inputSx}
        />

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

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          sx={inputSx}
        />

        <Button 
          type="submit" 
          disabled={isLoading}
           sx={buttonSx}
          >
          Create Account
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