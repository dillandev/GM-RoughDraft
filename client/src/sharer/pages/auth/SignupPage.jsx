//page
import SharerSignupFormView from "../../components/auth/SharerSignupFormView";

const Signup = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center", // centers horizontally
        alignItems: "center",     // centers vertically
        minHeight: "80vh"
         }}
      >

    <SharerSignupFormView />
      
    </div>
  );
};

export default Signup;