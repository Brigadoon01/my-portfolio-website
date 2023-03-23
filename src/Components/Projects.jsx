import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptates non minus libero id cupiditate culpa
                          iste nostrum repellat accusamus voluptatum vel quo,
                          dicta eaque nemo quae fugiat iusto quos placeat.
                          Adipisci mollitia dolor saepe suscipit temporibus aut
                          inventore, totam cumque deserunt hic a numquam illo
                          natus voluptates laudantium labore vero necessitatibus
                          maiores nihil expedita pariatur architecto? Ipsa,
                          distinctio voluptas vitae inventore voluptatum omnis
                          iste error officia repudiandae ratione nemo culpa
                          unde? Ex error dicta quaerat aspernatur fugiat porro
                          veritatis eveniet dignissimos? Nobis, fuga laboriosam
                          nostrum exercitationem possimus atque veniam impedit
                          quidem officiis modi quod adipisci reprehenderit
                          molestiae velit laudantium eos ipsam quibusdam nulla
                          enim harum similique aspernatur rerum saepe? Quas odio
                          accusamus fugiat ea illo, saepe repudiandae impedit
                          beatae, aliquam ducimus sit magni sapiente distinctio!
                          Amet, eaque veritatis neque at aut aliquid sit. 
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Impedit perspiciatis blanditiis soluta earum
                          dolorem aliquam, sapiente debitis accusamus
                          reiciendis, quasi illo! Blanditiis veniam libero
                          minima ratione. Sit sint dolorum quo reprehenderit
                          nostrum quod deserunt quis libero modi asperiores aut,
                          sed quisquam. Dolorum ipsum fugiat corrupti quas sint
                          praesentium veritatis exercitationem officiis eaque
                          dignissimos consequuntur aliquam illo nostrum et nemo,
                          nobis maxime enim quo! Nesciunt tenetur id mollitia
                          perferendis est natus quaerat quia incidunt eum sunt
                          quae aperiam quisquam unde alias libero facilis, nobis
                          amet nulla, minus veritatis. Dignissimos cumque
                          repudiandae incidunt eligendi unde magnam temporibus,
                          labore optio fugiat culpa libero.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
