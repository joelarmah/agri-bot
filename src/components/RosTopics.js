import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import ROSLIB from "roslib";

const RosTopics = ({ ros, messageType }) => {

  const [message, setMessage] = useState("");
  const [topic] = useState([]);

  useEffect(() => {
    if (ros) {
      // Subscribe to the topic
      const listener = new ROSLIB.Topic({
        ros: ros,
        name: topic,
        messageType: messageType,
      });

      listener.subscribe((msg) => {
        console.log("Received message on " + listener.name + ": " + msg.data);
        setMessage(msg.data);
      });

      // Clean up subscription on component unmount
      return () => {
        listener.unsubscribe();
      };
    }
  }, [ros, topic, messageType]);

  return (
    <>
      <Card>
        <CardHeader>Robot Topics</CardHeader>
        <CardBody className="pb-0">
          <div>
            <h2>Topic: {topic}</h2>
            <p>Message: {message}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default RosTopics;
