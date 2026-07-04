import LogoutButton from '../../utils/signout/signout.jsx';
import WelcomeUser from '../../utils/welcomeUser/welcomeUser.jsx';
import NotificationWidget from '../notifications/NotificationWidget.jsx';



const ProviderNavbar = () => (
  <div style={{ display: "flex", alignItems: "center", padding: "8px 16px", gap: "16px" }}>
    <LogoutButton />
    <WelcomeUser />
    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
      <NotificationWidget />
    </div>
  </div>
);

export default ProviderNavbar;