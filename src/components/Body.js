import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/Software.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Deo Shankar</div>
                        <div className="body-text">Software, Cloud and DevOps Architect</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/deosha" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://linkedin.com/in/deo-shankar" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;