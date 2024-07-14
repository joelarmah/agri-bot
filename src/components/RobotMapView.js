import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const RobotMapView = () => {

    const [mapUrl] = useState("http://0.0.0.0:8080/stream?topic=/camera/rgb/image_raw&type=mjpeg&width=300&height=200");

  return (
    <>
      <Card>
        <CardHeader>
            MapView
        </CardHeader>
        <CardBody className="pb-0">
        <img id="my_image" src={`${mapUrl}`} style={{height: '100%', width: '100%', objectfit: 'contain'}} alt="loading..." ></img>

        </CardBody>
      </Card>
    </>
  );
};

export default RobotMapView;
