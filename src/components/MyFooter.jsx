import { Button, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyFooter = () => {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      style={{ position: "fixed", bottom: "0", paddingBlock: "10px" }}
    >
      <Col className="d-flex justify-content-center">
        <Button variant="light" onClick={() => navigate("/favourites")}>
          To Favourites
        </Button>
      </Col>
    </Container>
  );
};

export default MyFooter;
