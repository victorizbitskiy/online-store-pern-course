import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { ADMIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
  const { user } = useContext(Context)
  let navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Купи девайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button 
            variant={"outline-light"}
            onClick={() => navigate(ADMIN_ROUTE)}
            >
            Админ панель
            </Button>
            <Button variant={"outline-light"} className="mx-4">Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
