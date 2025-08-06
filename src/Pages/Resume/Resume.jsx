// Resume.jsx
import Layout from "../../Components/Layout/Layout";
import Timeline from "../../Components/Timeline/TimeLine";
import { education } from "../../data/education";
import { certifications } from "../../data/Certifications";
import { Leadership } from "../../data/achievements";
import { achievements } from "../../data/achievements";
import {
  faCertificate,
  faGraduationCap,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

const Resume = () => {
  const sections = [
    {
      key: 'education',
      title: 'Education',
      icon: faGraduationCap,
      items: education,
      delay: 0
    },
    {
      key: 'certifications',
      title: 'Certifications',
      icon: faCertificate,
      items: certifications,
      delay: 0.1
    },
    {
      key: 'leadership',
      title: 'Leadership & Campus Involvement',
      icon: faUsers,
      items: Leadership,
      delay: 0.2
    },
    {
      key: 'achievements',
      title: 'Achievements',
      icon: faTrophy,
      items: achievements,
      delay: 0.3
    }
  ];

  return (
    <Layout pageTitle="Resume">
      <div className="resume-container">
        <div className="resume-grid">
          {sections.map((section) => (
            <div 
              key={section.key}
              className={`resume-section ${section.key}`}
              style={{
                animationDelay: `${section.delay}s`
              }}
            >
              <Timeline 
                title={section.title} 
                icon={section.icon} 
                items={section.items} 
              />
              <div className="section-shine"></div>
              <div className="section-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;