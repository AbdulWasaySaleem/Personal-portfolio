import Layout from "../../Components/Layout/Layout";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import { projects } from "../../data/Projects";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import { useEffect, useState } from "react";


const Portfolio = () => {
  const [modalProject, setModalProduct] = useState(null);

  const openModal = (project) => {
    setModalProduct(project);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  useEffect(() => {
    const isWideScreen = window.innerWidth > 768;
    
    if (modalProject) {
      document.body.style.overflow = 'hidden';
      if (isWideScreen) {
        document.body.style.marginRight = '10px';
      }
    } else {
      document.body.style.overflow = 'auto';
      if (isWideScreen) {
        document.body.style.marginRight = '0';
      }
    }
  
    return () => {
      document.body.style.overflow = 'auto';
      if (isWideScreen) {
        document.body.style.marginRight = '0';
      }
    };
  }, [modalProject]);

  return (
    <>
      <Layout pageTitle="Portfolio">
        <section className="projects">
          <ul className="project-list">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                category={project.category}
                imgSrc={project.imgSrc}
                link={project.link}
                openModal={() => openModal(project)}
              />
            ))}
          </ul>
        </section>

        
      </Layout>
      {modalProject && <ProjectModal project={modalProject} closeModal={closeModal} /> } 
    </>
  );
};

export default Portfolio;
