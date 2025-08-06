import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoItem.css";

const InfoItem = ({ icon, label, content, href }) => (
  <div className="info-item">
    <span className="icon-box">
      <FontAwesomeIcon icon={icon} className="icon" />
    </span>
    <div className="info">
      <p>{label}</p>
      {href ? (
        <a href={href} className="contact-link">
          {content}
        </a>
      ) : (
        <address>{content}</address>
      )}
    </div>
  </div>
);

export default InfoItem;
