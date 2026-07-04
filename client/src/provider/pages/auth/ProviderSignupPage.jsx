import ProviderSigninFormView from "../../components/auth/providerSignupForm.jsx"

const ProviderSignup = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center", // centers horizontally
        alignItems: "center",     // centers vertically
        minHeight: "80vh"
         }}
      >

    <ProviderSigninFormView />

    </div>
  );
};

export default ProviderSignup;