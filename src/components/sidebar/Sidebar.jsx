import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BackupIcon from '@mui/icons-material/Backup';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='logo'>BMPS</div>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>

          <p className='title'>List</p>
          <li>
            <GroupIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <AddBusinessIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <AddShoppingCartIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>Useful</p>
          <li>
            <BarChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>Services</p>
          <li>
            <BackupIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Setting</span>
          </li>
          <p className='title'>User</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>Color Option</div>
    </div>
  );
};
export default Sidebar;
