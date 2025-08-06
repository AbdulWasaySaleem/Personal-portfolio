import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Timeline.css"

const Timeline = ({ title, icon, items }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item, index) => (
          <li key={index} className="timeline-item">
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.date}</span>
            <p className="timeline-text">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
