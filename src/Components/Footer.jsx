import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/imgs/logo.svg";
import navIcon1 from "../assests/imgs/nav-icon1.svg";
import navIcon2 from "../assests/imgs/nav-icon2.svg";
import navIcon3 from "../assests/imgs/nav-icon3.svg";
import newLogo from "../assests/imgs/NewMyLogo.png";
import { MailchimpForm } from "./MailchimpForm";
import github from "../assests/imgs/iconmonstr-github-1.svg";
import Linkedin from "../assests/imgs/icons8-linkedin-50.png";
import Telegram from "../assests/imgs/icons8-telegram-50.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={newLogo} className="Logo p-3 w-50 h-50" alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/tamammabroukeh">
                <img src={github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/tamam-mabrouka-a0aa37224">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://t.me/TamamMabrouka">
                <img src={Telegram} alt="" />
              </a>
            </div>
            <p>
              Created by <span>Tammam Mabroukeh</span> CopyRight 2023 -
              Portifolio.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
