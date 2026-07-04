import SharerNavbar from '../../widgets/navbar/navbar.jsx';
import DashboardButtons from '../../components/dashboard/dashbuttons/sharerdashbuttons.jsx';

const Dashboard = () => (
  <div>
    <div style={{ border: "1px solid #e0e0e0" }}>
      <SharerNavbar />
    </div>
    <DashboardButtons />
  </div>
);

export default Dashboard;