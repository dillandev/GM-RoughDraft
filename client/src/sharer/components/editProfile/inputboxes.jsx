import { useState } from "react";
import { TextField, Button, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEditSharerProfile } from "../../hooks/editProfile/useEditProfile.jsx";
import buttonstyles from "../styles/editProfile/savebutton.js"
import inputstyles from "../styles/editProfile/inputboxes.js"

const InputBoxes = () => {
  const navigate = useNavigate();
  const mutation = useEditSharerProfile();

  const [form, setForm] = useState({
    contact_method: "",
    contact_info: "",
    social_media_method: "",
    social_media_username: "",
    paypal_email: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    const hasEmptyField = Object.values(form).some((v) => !v);

    if (hasEmptyField) {
      alert("All fields are required");
      return;
    }

    try {
      await mutation.mutateAsync(form);
      navigate("/sharer/dashboard/sharer_profile");
    } catch (err) {
      console.error(err);
      alert(err?.error || "Failed to save profile");
    }
  };

  return (
    <Box sx={inputstyles.container}>
    <Stack spacing={2}>

      <Stack direction="row" spacing={2}>
      <TextField
        name="contact_method"
        label="Contact Method"
        value={form.contact_method}
        onChange={handleChange}
        sx={inputstyles.inputBoxes}
      />

      <TextField
        name="contact_info"
        label="Contact Info"
        value={form.contact_info}
        onChange={handleChange}
        sx={inputstyles.inputBoxes}
      />
        </Stack>
      
      <Stack direction="row" spacing={2}>
      <TextField
        name="social_media_method"
        label="Social Media Method"
        value={form.social_media_method}
        onChange={handleChange}
        sx={inputstyles.inputBoxes}
      />

      <TextField
        name="social_media_username"
        label="Social Media Username"
        value={form.social_media_username}
        onChange={handleChange}
        sx={inputstyles.inputBoxes}
      />
        </Stack>

      <TextField
        name="paypal_email"
        label="PayPal Email"
        value={form.paypal_email}
        onChange={handleChange}
        sx={inputstyles.inputBoxes}
      />

      <Button
        variant="contained"
        onClick={handleSave}
        disabled={mutation.isPending}
        sx={buttonstyles.saveButton}
      >
        {mutation.isPending ? "Saving..." : "Save"}
      </Button>
    </Stack>
      </Box>
  );
};

export default InputBoxes;