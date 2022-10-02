import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flexs">
      {device.brands.map((brand) => (
        <Card 
        key={brand.id}
        className="p-3"
        style={{ cursor: "pointer" }}
        border={brand.id === device.selectedBrand.id  ? 'danger' : 'light'}
        onClick={() => device.setSelectedBrand(brand)}
        >
        {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
