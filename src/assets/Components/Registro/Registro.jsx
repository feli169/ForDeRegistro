import SocialButton from "../SocialButton/SocialButton";
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Registro.css'

const Registro = () => {
    return (
        <div className="container bg-white">
            <h1 className="text-center">Crea tu cuenta</h1>
            <div className="row">

                <div className="col-4 mx-2">
                    <a href="https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank">
                        <SocialButton icon={faLinkedin} />
                    </a>
                </div>

                <div className="col-4 mx-2">
                <a href="https://www.instagram.com/ " target="_blank">
                        <SocialButton icon={faInstagram} />
                    </a>
                </div>

                <div className="col-4 mx-2">
                <a href="https://github.com/login" target="_blank">
                        <SocialButton icon={faGithub} />
                    </a>
                </div>

            </div>

            <p className="text-center mt-2">o usa tu email para registrarte</p>
        </div>
    )
}

export default Registro




