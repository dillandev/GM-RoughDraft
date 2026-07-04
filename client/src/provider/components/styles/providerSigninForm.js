
export const stackSx = {
  spacing: 2, // spacing between children
  padding: "32px", // match YouTube-style padding
  borderRadius: "12px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  maxWidth: "420px",
  width: "170%", // ensures it can shrink on smaller screens
  margin: "auto",
};

export const titleSx = {
  fontWeight: 700,
  fontSize: "1.8rem",
  marginBottom: "16px",
  color: "#202020", // YouTube-like text color
  display: "flex",  // Enable flexbox layout
  justifyContent: "center",  // Horizontally center the text
  alignItems: "center",  // Vertically center the text (if needed)
  textAlign: "center",  // Ensure the text itself is centered
};

export const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    "&:hover": {
      boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 2px rgba(204,0,0,0.25)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#606060",
    fontWeight: 500,
  },
};

export const buttonSx = {
  backgroundColor: "#cc0000",
  color: "#ffffff",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
  padding: "8px 16px",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#a30000",
  },
};