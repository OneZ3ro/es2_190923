import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouriteCompaniesAction } from "../redux/actions";
import { useState } from "react";

const Job = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispacth = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>

        <i
          className={isClicked ? "bi bi-heart-fill ms-3" : "bi bi-heart ms-3"}
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
  );
};

export default Job;
