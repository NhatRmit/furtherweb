import Header from '../Header/Header'
import { Form, Row, Col, FormLabel, FormControl, Button } from 'react-bootstrap'
export default function Login() {
  return (
    <>
      <Header heading="Login" />
      <Form id="form">
        <Row>
          <FormLabel column="lg" lg={3.5}>Email address</FormLabel>
          <Col>
            <FormControl type="text" size="lg" placeholder="example@gmail.com" />
          </Col>
        </Row>
        <br />
        <Row>
          <FormLabel column="lg" lg={3.5}>Password</FormLabel>
          <Col>
            <FormControl type="password" size="lg" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="App-Btncenter">
           <Button variant="primary" size="md">Login</Button>         
          </Col>
        </Row>       
      </Form>
    </>
  ) 
}