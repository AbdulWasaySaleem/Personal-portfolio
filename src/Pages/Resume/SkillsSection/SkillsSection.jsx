// SkillsSection.jsx
import SkillItem from "../../../Components/SkillItem/SkillItem";
import { skills } from "../../../data/Skills";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container"></div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
