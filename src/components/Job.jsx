import { Row, Col, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouriteCompaniesAction } from "../redux/actions";
import { useState } from "react";

const Job = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispacth = useDispatch();
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error.hasError ? (
        <Row className="center-row">
          <Col>
            <Alert variant="danger">{error.message}</Alert>
          </Col>
        </Row>
      ) : (
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>

            <i
              className={
                isClicked ? "bi bi-heart-fill ms-3" : "bi bi-heart ms-3"
              }
              onClick={() => {
                dispacth(addToFavouriteCompaniesAction(data.company_name));
                setIsClicked(!isClicked);
              }}
            ></i>
            {/* <Link to={"/favouritesCompany"}>
          <i className="bi bi-heart-fill ms-3"></i>
        </Link> */}
          </Col>
          <Col xs={9} style={{ textAlign: "center" }}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Job;
