import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col sm={6} md={12} lg={6}>
      <a style={{ color: "#fff" }} href={Url} target="_blank" dir={Url}>
        <div className="project-imgbox">
          <img src={imgUrl} alt="proj-img" />
          <div className="project-text">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>Click to visit the website</p>
          </div>
        </div>
      </a>
    </Col>
  );
};
