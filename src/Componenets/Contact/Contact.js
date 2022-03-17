import "../../scss/App.scss";
import { useRef, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [Message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    axios
      .post("../../../../contact", data)
      .then((res) => {
        setErrors(null);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setMessage(err.response.data.message);
      });
  };

  const input = (label, ref, type = "text", rows = 0) => {
    return (
      <>
        <Form.Label className="contact-label">{label}</Form.Label>
        <Form.Group className="mb-3" controlId="formName">
          {type === "textarea" ? (
            <Form.Control
              className={`contact-input ${
                errors &&
                (errors[label.toLowerCase()] ? "is-invalid" : "is-valid")
              }`}
              ref={ref}
              as={type}
              rows={3}
              placeholder={`Enter ${label}`}
            />
          ) : (
            <Form.Control
              className={`contact-input ${
                errors &&
                (errors[
                  label === "Email address" ? "email" : label.toLowerCase()
                ]
                  ? "is-invalid"
                  : "is-valid")
              }`}
              ref={ref}
              type={type}
              placeholder={`Enter ${label}`}
            />
          )}
        </Form.Group>
      </>
    );
  };

  return (
    <>
      <h1 className="contact-title">HIRE ME</h1>
      <Form className="contact-form" onSubmit={submitHandler}>
        {input("Name", nameRef, "text")}
        {input("Email address", emailRef, "email")}
        {input("Message", messageRef, "textarea", 3)}
        <Button className="contact-btn" variant="primary" type="submit">
          Submit
        </Button>
        {Message && (
          <Form.Text
            className={`contact-message ${
              errors ? "contact-error" : "contact-success"
            }`}
          >
            {Message}
          </Form.Text>
        )}
      </Form>
    </>
  );
};
export default Contact;
