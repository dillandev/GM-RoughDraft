// HomePageStyles.js

const styles = {
  page: {
    minHeight: "100vh",
    px: 6,
    py: 4,
  },

  logotext: {
    color: "#606060"

  },
  
  text: {
    color: "#0f0f0f"

  },

  topSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    mb: 10,
  },

  signInButton: {
    backgroundColor: "#cc0000",
    position: "absolute",
    right: 0,
    top: 3,
    width: "100px",
    height: "50px",
    
    
  },
  
  providerSignup: {
    mt: 15,
    alignItems: "center",

  },

  sharerSignup: {
    mt: 15,
    alignItems: "center",

  },
  
  signUpButton: {
    backgroundColor: "#cc0000",
    width: "150px",

  },
  
  bottomSection: {
    display: "flex",
    justifyContent: "center",
    gap: "100px",
    alignItems: "flex-start",
    mt: 8,
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: "black",
    mb: 6,
  },
};

export default styles;