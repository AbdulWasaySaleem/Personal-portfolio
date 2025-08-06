import "./MainContent.css";
import Nav from "../Navbar/Nav";

const MainContent = ({ title, children }) => {
  return (
    <div className="main-content">
      <Nav />
      <article>
        <header>
          <h2 className="article-title">{title}</h2>
        </header>
        {children}
      </article>
    </div>
  );
};

export default MainContent;
