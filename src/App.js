import "./App.css";
// import RosConnection from "./components/RosConnection";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RosConnection from "./components/RosConnection";
import { Col, Container, Row } from "reactstrap";
import RobotCamera from "./components/RobotCamera";
import RobotMapView from "./components/RobotMapView";
import RobotControl from "./components/RobotControl";
import RosTopics from "./components/RosTopics";

function App() {

  const [url, setUrl] = useState("localhost:9090");
  const [connectionStatus, setConnectionStatus] = useState("");

  const handleConnectionStatusChange = (status) => {
    setConnectionStatus(status);
  };

  const handleUrlChange = (url) => {
    console.log(url);
    setUrl(url);
  }

  return (
    <>
      <RosConnection
        url={url}
        onConnectionStatusChange={handleConnectionStatusChange}>

        <Header url={url} connectionStatus={connectionStatus} onUrlChanged={handleUrlChange} />

        <Container>
        <Row className="mb-4">
          <Col xl={7}>
            <RobotCamera />
          </Col>
          <Col xl={5}>
            <RobotMapView />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xl={7}>
            <RobotControl />
          </Col>
          <Col xl={5}>
          <RosTopics />
          </Col>
        </Row>
        </Container>

      

      </RosConnection>
    </>
  );
}

export default App;
