import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav_links = [
  {
    path: "/home",
    display: "Principal",
  },
  {
    path: "/about",
    display: "Nosotros",
  },
  {
    path: "/booking",
    display: "Travesias",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const FuncPosSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    FuncPosSticky();
    return window.removeEventListener("scroll", FuncPosSticky);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img className="logoImg" src={logo} alt="logo__traveling" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 ">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={"/login"}>Ingresar</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to={"/register"}>Registrarse</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;