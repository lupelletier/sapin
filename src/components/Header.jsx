import ModalCookie from "./Modal";
import '../style.css';
import { Cookies } from 'react-cookie';
// import Typical from 'react-typical'






export default function Header() {
    const cookies = new Cookies();
    const status = cookies.get('status');

    return (
        <div className="header">
            <ModalCookie />
            <div className="cookie">
                <h1>{status}</h1>
            {/* <Typical 
            steps={[`${status}`, 1000]}
            loop={Infinity}
            wrapper="h1"></Typical> */}
            </div>
        </div>
    );
    }
