
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { signup } from "../services/Builder-service";
import {toast} from 'react-toastify'

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    Mbno: "",
    LiscenceNo: "",
    AadharNo: "",
    Plotno: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pin: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //usefor printing data
  useEffect(() => {
    console.log(data);
  }, [data]);

  //handlechange

  const handleChange = (event, property) => {
    //dynamic value setting

    setData({ ...data, [property]: event.target.value });
  };

  //reset data
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      Mbno: "",
      LiscenceNo: "",
      AadharNo: "",
      Plotno: "",
      street: "",
      landmark: "",
      city: "",
      state: "",
      pin: "",
    });
  };

  //submiting the form

  const submitForm = (event) => {
    event.preventDefault(); // for stop default behaviour of form otherwise it will be reload and submit the form

    console.log(data);

    //if data validate

    //call server api for  sending data
  };

  return (
    <>
      <Container>
        <Row className="mt-4">
          {/* {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card
              color="light"
              style={{
                width: "50rem",
              }}
            >
              <CardHeader className="text-center">
                <h3>Builder Registration</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={submitForm}>
                  {/*name field */}
                  <FormGroup>
                    <Label for="name">
                      <h5>Enter name</h5>
                    </Label>

                    <Input
                      type="text"
                      placeholder="Enter Name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="Mbno">
                      <h5>Enter Mobileno</h5>
                    </Label>

                    <Input
                      type="text"
                      placeholder="Enter Mobileno."
                      id="Mbno"
                      onChange={(e) => handleChange(e, "Mbno")}
                      value={data.Mbno}
                    />
                  </FormGroup>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="LiscenceNo">
                          <h5>Enter LiscenceNo</h5>
                        </Label>
                        <Input
                          id="LiscenceNo"
                          name="LiscenceNo"
                          placeholder=" Enter LiscenceNo"
                          type="text"
                          onChange={(e) => handleChange(e, "LiscenceNo")}
                          value={data.LiscenceNo}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="AdharNo">
                          <h5>Enter AadharNo </h5>
                        </Label>
                        <Input
                          id="AadharNo"
                          name="AadharNo"
                          placeholder="AadharNo"
                          type="text"
                          onChange={(e) => handleChange(e, "AadharNo")}
                          value={data.AadharNo}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/*------------------------------------------------------------------------------------------------------- */}

                  <FormGroup>
                    <Label for="name">
                      {" "}
                      <h5>Enter Email </h5>
                    </Label>

                    <Input
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">
                      <h5>Enter password </h5>
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder=" Enter password "
                      type="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </FormGroup>

                  {/*------------------------------------------------------------------------------------------------------- */}

                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="Plotno">
                          <h5>Enter PlotNo </h5>
                        </Label>
                        <Input
                          id="Plotno"
                          name="Plotno"
                          placeholder=" Enter PlotNo"
                          type="text"
                          onChange={(e) => handleChange(e, "Plotno")}
                          value={data.Plotno}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="street">
                          <h5>Street </h5>
                        </Label>
                        <Input
                          id="street"
                          name="street"
                          placeholder="street"
                          type="text"
                          onChange={(e) => handleChange(e, "street")}
                          value={data.street}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="landmark">
                          <h5>LandMark </h5>
                        </Label>
                        <Input
                          id="landmark"
                          name="landmark"
                          placeholder=" Enter landmark"
                          type="text"
                          onChange={(e) => handleChange(e, "landmark")}
                          value={data.landmark}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="city">
                          <h5>City </h5>
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder=" Enter City"
                          type="text"
                          onChange={(e) => handleChange(e, "city")}
                          value={data.city}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="state">
                          <h5>State </h5>
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          placeholder="Enter state"
                          type="text"
                          onChange={(e) => handleChange(e, "state")}
                          value={data.state}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="pin">
                          <h5>Pin </h5>
                        </Label>
                        <Input
                          id="pin"
                          name="pin"
                          placeholder=" Enter Pin"
                          type="text"
                          onChange={(e) => handleChange(e, "pin")}
                          value={data.pin}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/*------------------------------------------------------------------------------------------------------- */}

                  <Container className="text-center">
                    <Button color="dark">Register</Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* <h1 style={{border:'1px solid red'}}>Signup user</h1> */}

      </Container>
    </>
  );
};
export default Signup;
