import "./Services.css";
import { services } from "../../../data/Services";
import ServiceItem from "../../../Components/ServiceItem/ServiceItem";


const Services = () => {
  return (
    <section className="service">
      <h3>What I'm doing</h3>
      <ul className="service-list">
        {services.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Services;
