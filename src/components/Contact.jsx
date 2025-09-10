import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="mt-3">
      <div className="row mb-2">
        <div className="col-1">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
        </div>
        <div className="col">
          <div style={{ marginLeft: "10px", wordWrap: "break-word" }}>
            contact.sarawalee@gmail.com
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <FontAwesomeIcon icon={faPhone} style={{ color: "#000000" }} />
        </div>
        <div className="col">
          <div style={{ marginLeft: "10px" }}>089-912-1730</div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000" }} />
        </div>
        <div className="col">
          <div style={{ marginLeft: "10px" }}>สุพรรณบุรี, ประเทศไทย</div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} />
        </div>
        <div className="col">
          <a href="https://github.com/JxnxSa" style={{ color: "black" }}>
            <div style={{ marginLeft: "10px" }}>JxnxSa</div>
          </a>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000" }} />
        </div>
        <div className="col">
          <a href="https://www.linkedin.com/in/sarawaleejst/" style={{ color: "black" }}>
            <div style={{ marginLeft: "10px" }}>Sarawalee Tangjittham</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
