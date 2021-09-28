import logo from './Logo.svg';
import './Logo.css'
function Logo() {
    return (
        <div id="img">
            <img src={logo} alt="my-pic"/>
        </div>);
}
export default Logo;