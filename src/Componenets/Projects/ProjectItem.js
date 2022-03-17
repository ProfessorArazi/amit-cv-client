import "../../scss/App.scss";
import { Button, Card } from "react-bootstrap";
export const ProjectItem = (props) => {
  const body = (
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
      <div className="actions">
        <Button variant="success">Github</Button>
        <Button variant="success">Live</Button>
      </div>
    </Card.Body>
  );

  return (
    <div>
      {!props.mobile ? (
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={props.img} />
          <div className="overlay">{body}</div>
        </Card>
      ) : (
        body
      )}
    </div>
  );
};
