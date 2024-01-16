import { useNavigate } from 'react-router-dom';
import { RiAdminFill, RiFileListFill } from 'react-icons/ri';
import logo from '../assets/ibge-logo.png';
import InputSwitch from './InputSwitch';

function NavBar() {
  const navegate = useNavigate();
  const isLoged = localStorage.getItem('user');
  return (
    <nav>
      <div className="nav-left-container">
        <img src={ logo } alt="ibge-logo" />
      </div>
      <div className="nav-right-container">
        <i
          data-testid="nav-home"
          onClickCapture={ () => navegate('/') }
        >
          <RiFileListFill />
        </i>
        <i
          data-testid="nav-user"
          onClickCapture={ () => (isLoged ? navegate('/user') : navegate('/login')) }
        >
          <RiAdminFill />
        </i>
        <InputSwitch />
      </div>
    </nav>
  );
}

export default NavBar;
