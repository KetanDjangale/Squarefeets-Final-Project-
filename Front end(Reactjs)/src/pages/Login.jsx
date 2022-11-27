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

const Login = () => {
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card
              color="light"
              style={{
                width: "40rem",
              }}
            >
              <CardHeader className="text-center">
                <h2>Login</h2>
              </CardHeader>

              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">
                      {" "}
                      <h5>Enter Email </h5>
                    </Label>

                    <Input type="email" placeholder="Enter email" />
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
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark">Login</Button>
                    <Button color="secondary" type="reset" className="ms-2">
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
export default Login;
