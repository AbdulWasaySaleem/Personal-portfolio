import "./ServiceItem.css"

const ServiceItem = ({ icon, alt, title, description }) => (
  <li className="service-item">
    <div className="service-icon-box">
      <img src={icon} alt={alt} width="40" />
    </div>
    <div className="service-content-box">
      <h4 className="service-item-title">{title}</h4>
      <p className="service-item-text">{description}</p>
    </div>
  </li>
);

export default ServiceItem;
