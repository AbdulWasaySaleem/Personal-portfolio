import "./Brief.css";
import { briefContent } from "../../../data/aboutMe";

const Brief = () => {
  return (
    <section className="about-text">
      {briefContent.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default Brief;
