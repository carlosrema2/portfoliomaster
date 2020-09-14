import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
;

function Home() {
  return (
    <div>
      <Hero/>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Performance-driven and motivated Full Stack Developer with a Certificate from Northwestern University and a B.E. from El Bosque University. Determined to achieve extraordinary results by utilizing well-honed skills in planning, development, and testing in order to develop state-of-the-art web/mobile applications. Possess strong attention to detail and organizational skills influenced by popular project management practices including Agile & Waterfall. Several years of experience working with dynamic and diverse web development, network architecture, and cybersecurity teams. high-level proficiency in the following programs: HTML, CSS, Javascript, node.js, MySQL, MS SQL Server, and React.js Libraries.
            </p>
            <a href="https://docs.google.com/document/d/1R6bASV-MC9jb2Xk4MjKM9YPXZKVGlcDw2tPvcfCLQW8/edit?usp=sharing" target="_blank">Resume</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
