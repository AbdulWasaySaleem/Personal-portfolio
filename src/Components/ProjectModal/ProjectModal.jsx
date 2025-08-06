import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./ProjectModal.css";

const ProjectModal = ({ project, closeModal }) => {
  const { title, category, description, imgSrc, myRole, link } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if imgSrc is an array and has multiple images
  const isMultipleImages = Array.isArray(imgSrc) && imgSrc.length > 1;
  const currentImage = Array.isArray(imgSrc) ? imgSrc[currentImageIndex] : imgSrc;

  // Handle clicking outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Carousel navigation functions
  const goToPrevious = () => {
    if (isMultipleImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imgSrc.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (isMultipleImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgSrc.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Auto-slide functionality (optional - you can remove this if you don't want auto-slide)
  useEffect(() => {
    if (isMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imgSrc.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Changed to 4 seconds for better UX
      return () => clearInterval(interval);
    }
  }, [imgSrc, isMultipleImages]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <section className="modal-content">
        <button
          aria-label="Close"
          className="modal-close-btn"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Image Carousel Section */}
        <figure className="modal-image-container">
          <img src={currentImage} alt={`${title} image ${currentImageIndex + 1}`} />
          
          {/* Carousel Navigation - Only show if multiple images */}
          {isMultipleImages && (
            <>
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <button
                className="carousel-btn carousel-btn-next"
                onClick={goToNext}
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              
              {/* Image indicators */}
              <div className="carousel-indicators">
                {imgSrc.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </figure>

        {/* Modal Details */}
        <div className="modal-details">
          <header className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <p className="modal-category">{category}</p>
          </header>
          
          <p className="modal-description">{description}</p>

          <section className="modal-tech-stack">
            <h4 className="modal-tech-stack-title">Tech Stack</h4>
            <div className="modal-tech-container">
              {project.techStack.map((tech, index) => (
                <span key={index} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="modal-my-role">
            <h4 className="modal-my-role-title">My Role</h4>
            <ul className="modal-role-list">
              {myRole.map((role, index) => (
                <li key={index} className="modal-role-item">
                  {role}
                </li>
              ))}
            </ul>
          </section>
          
          <a
            href={link}
            className="modal-visit-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;