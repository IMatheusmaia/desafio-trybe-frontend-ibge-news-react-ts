import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="icons-container">
        <Link to="https://github.com/IMatheusmaia" target="_blank" data-testid="github">
          <FaGithub />
        </Link>
        <Link id="linkedin" to="https://www.linkedin.com/in/%C3%ADcaro-maia-a2103899/" target="_blank" data-testid="linkedin">
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
