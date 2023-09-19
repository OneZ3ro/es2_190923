import { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch } from "react-redux";
import { RESET_IS_LOADING } from "../redux/actions";
// import { getJobsAction } from "../redux/actions";
export const GET_JOB = "GET_JOB";
export const GET_JOBS_ERROR_ON = "GET_JOBS_ERROR_ON";
export const GET_JOBS_ERROR_OFF = "GET_JOBS_ERROR_OFF";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();
  // const jobs = useSelector((state) => state.jobs.content);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    dispatch({ type: RESET_IS_LOADING });

    e.preventDefault();

    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        console.log("getJobsAction");
        dispatch({ type: GET_JOB });
        setJobs(data);
      } else {
        console.log("error");
        throw new Error("Errore nel reperimento dei dati 😰");
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR_ON, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: GET_JOBS_ERROR_OFF });
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          <Row
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
          >
            <Col xs={3} className="fw-bolder">
              Company
            </Col>
            <Col xs={9} style={{ textAlign: "center", fontWeight: "700" }}>
              Job Title
            </Col>
          </Row>
          {
            // jobs.length !== 0 ? (
            jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
            // ) : (
            //   <Alert variant="warning" className="mt-3">
            //     La tua ricerca non ha risultati, prova di nuovo
            //   </Alert>
            // )
          }
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
