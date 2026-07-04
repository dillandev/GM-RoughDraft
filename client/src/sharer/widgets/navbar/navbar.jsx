import LogoutButton from '../../utils/signout/signout.jsx';
import WelcomeUser from '../../utils/welcomeUser/welcomeUser.jsx';
import GetCredits from '../../utils/getCredits/getCredits.jsx';
import NotificationWidget from '../notifications/NotificationWidget.jsx';

const SharerNavbar = () => (
  <div style={{ display: "flex", alignItems: "center", padding: "8px 16px", gap: "16px" }}>
    <LogoutButton />
    <WelcomeUser />
    <GetCredits />
    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
      <NotificationWidget />
    </div>
  </div>
);

export default SharerNavbar;