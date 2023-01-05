import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">I am a Software, DevOps, and Cloud Architect with over 10 years of experience. I code in Python, Terraform and Ansible and use Django framework for web dev. I love Containers and Microservices and Cloud. </p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;