
import Form from "react-bootstrap/Form";

export default function RegistrationForm() {
  return (
    <div className="container-fluid p-4 border" style={{ background: "#98B0FD" }}>
      <h1 className="text-center mb-4">Registration Form</h1>
      <div className="d-flex justify-content-center">
        <Form className="w-50">
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address:</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact Number:</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}