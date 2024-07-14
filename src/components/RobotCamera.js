import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const RobotCamera = () => {

  // const [videoUrl] = useState("https://www.cameraftp.com/cameraftp/publish/Camera.aspx/parentID75626506/shareID13284808/roof");
  const [videoUrl] = useState("http://80.75.112.38:9080/axis-cgi/mjpg/video.cgi");

  return (
    <>
      <Card>
        <CardHeader>Robot Camera</CardHeader>
        <CardBody className="pb-0">
          <img
            id="robot_camera"
            src={`${videoUrl}`}
            style={{ height: "100%", width: "100%", objectfit: "contain" }}
            alt="loading..."
          ></img>
          {/* <iframe
            title="Map View"
            src={videoUrl}
            width="640"
            height="480"
            scrolling="no"
          ></iframe> */}
        </CardBody>
      </Card>
    </>
  );
};

export default RobotCamera;
