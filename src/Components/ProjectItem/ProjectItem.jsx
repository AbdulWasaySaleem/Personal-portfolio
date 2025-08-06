import "./ProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ title, category, imgSrc, openModal }) => {
  // If imgSrc is an array, pick the first image. If not, use it directly.
  const displayImage = Array.isArray(imgSrc) ? imgSrc[0] : imgSrc;

  return (
    <li className="project-item">
      <button type="button" className="project-link" onClick={openModal}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <img src={displayImage} alt={title} loading="lazy" />
        </figure>
        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </button>
    </li>
  );
};

export default ProjectItem;
