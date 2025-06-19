import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hospital Management System"
              description="A web-based application developed to manage hospital operations like patient records, doctor appointments, billing, and inventory. Built using PHP for backend logic, MySQL for database management, and HTML, CSS, JavaScript for a responsive and user-friendly interface."
              ghLink="https://github.com/Sheenu-Dixit/hospital-management-System.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A simple interactive game developed using HTML, CSS, and JavaScript, allowing two players to play turn-by-turn with real-time win/draw detection and a clean user interface."
              ghLink="https://github.com/Sheenu-Dixit/tic-tac-toe.git"
            
            />
          </Col>

           
          

           

           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
