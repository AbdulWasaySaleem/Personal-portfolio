// SkillItem.jsx
import "./SkillItem.css";

const SkillItem = ({ title, icon: Icon, index }) => {
  return (
    <div 
      className="skill-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="skill-icon-container">
        <div className="skill-icon-wrapper">
          <Icon className="skill-icon" />
        </div>
      </div>
      <div className="skill-content">
        <h4 className="skill-name">{title}</h4>
      </div>
      <div className="skill-shine"></div>
    </div>
  );
};

export default SkillItem;