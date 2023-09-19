import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BtnHome = () => {
  const navigate = useNavigate();
  return (
    <Button variant="light" onClick={() => navigate("/")}>
      Back to Homepage
    </Button>
  );
};

export default BtnHome;
