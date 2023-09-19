import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BtnHome from "./BtnHome";
import { Link } from "react-router-dom";
import { removeFavouriteCompanyAction } from "../redux/actions";

const Favourites = () => {
  const favouritesCompanies = useSelector(
    (state) => state.favourites.companies
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between">
          <h1 className="display-4 fw-boder">Your favourites</h1>
          <BtnHome />
        </Col>
      </Row>
      {favouritesCompanies.map((company, index) => (
        <Row
          key={index}
          className="mx-0 mt-3 p-3 align-items-center"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col>
            <strong>Company: </strong>
            <Link to={`/${company}`}>{company}</Link>
          </Col>
          <Button
            variant="danger"
            style={{ width: "fit-content" }}
            onClick={() => dispatch(removeFavouriteCompanyAction(index))}
          >
            Remove
          </Button>
        </Row>
      ))}
    </Container>
  );
};
export default Favourites;
