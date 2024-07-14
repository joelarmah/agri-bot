import React, { useEffect, useState } from "react";
import ROSLIB from "roslib";

const RosConnection = ({
  url = "localhost:9000",
  onConnectionStatusChange,
  children,
}) => {
  const [ros, setRos] = useState(null);

  useEffect(() => {
    // Initialize ROS connection
    const ros = new ROSLIB.Ros({
      url: `ws://${url}`,
    });

    ros.on("connection", () => {
      console.log("Connected to websocket server.");
      onConnectionStatusChange("Connected");
    });

    ros.on("error", (error) => {
      console.log("Error connecting to websocket server: ", error);
      onConnectionStatusChange("Error - $error");
    });

    ros.on("close", () => {
      console.log("Connection to websocket server closed.");
      onConnectionStatusChange("Closed");
    });

    setRos(ros);

    // Clean up connection on component unmount
    return () => {
      if (ros) {
        ros.close();
      }
    };
  }, [url, onConnectionStatusChange]);

  return (
    <>
      {ros &&
        React.Children.map(children, (child) => {
          return React.cloneElement(child, { ros });
        })}
    </>
  );
};

export default RosConnection;
