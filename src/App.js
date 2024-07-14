import "./App.css";
// import RosConnection from "./components/RosConnection";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RosConnection from "./components/RosConnection";
import { Col, Row } from "reactstrap";
import RobotCamera from "./components/RobotCamera";
import RobotMapView from "./components/RobotMapView";
import RobotControl from "./components/RobotControl";

function App() {

  const [url] = useState("localhost:9090");
  const [connectionStatus, setConnectionStatus] = useState("");

  const handleConnectionStatusChange = (status) => {
    setConnectionStatus(status);
  };

  return (
    <>
      <RosConnection
        url={url}
        onConnectionStatusChange={handleConnectionStatusChange}>
        <Header url={url} connectionStatus={connectionStatus} />

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
          </Col>
        </Row>

      </RosConnection>
    </>
  );
}

export default App;
