import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import BtnHome from "./BtnHome";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAction } from "../redux/actions";

const CompanySearchResults = () => {
  const company = useSelector((state) => state.jobs.company);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyAction(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <BtnHome />
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          {company.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
