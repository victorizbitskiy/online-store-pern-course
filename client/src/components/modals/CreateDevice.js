import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const { info, setInfo } = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
          <DropdownMenu>
            {device.types.map((type) => (
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
          <DropdownMenu>
            {device.brands.map((brand) => (
              <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Form.Control
          className="mt-3"
          placeholder="Введите название устройства"
        />
        <Form.Control
          className="mt-3"
          placeholder="Введите стоимость устройства"
          type='number'
        />
        <Form.Control
          className="mt-3"
          type='file'
        />
        <hr />
        <Button
          variant={"outline-dark"}
          onClick={addInfo}
        >
          Добавить новое свойство
        </Button>
        {info?.map(i =>
          <Row>
            <Col md={4}>
              <Form.Control
                placeholder="Введите название характеристики"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                placeholder="Введите описание характеристики"
              />
            </Col>
            <Col md={4}>
              <Button variant="outline-danger">Удалить</Button>
            </Col>
          </Row>
          )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
