//page
import SharerSigninFormView from "../../components/auth/SharerSigninFormView";

const Signin = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center", // centers horizontally
        alignItems: "center",     // centers vertically
        minHeight: "80vh"
         }}
      >

    <SharerSigninFormView />

    </div>
  );
};

export default Signin;