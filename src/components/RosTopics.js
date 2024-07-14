import { useEffect, useState } from "react";
import ROSLIB from "roslib";

const RosTopics = ({ ros, topicName, messageType }) => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        if (ros) {
          // Subscribe to the topic
          const listener = new ROSLIB.Topic({
            ros: ros,
            name: topicName,
            messageType: messageType,
          });
    
          listener.subscribe((msg) => {
            console.log(
              "Received message on " + listener.name + ": " + msg.data
            );
            setMessage(msg.data);
          });
    
          // Clean up subscription on component unmount
          return () => {
            listener.unsubscribe();
          };
        }
      }, [ros, topicName, messageType]);

 
    return (
        <div>
        <h2>Topic: {topicName}</h2>
        <p>Message: {message}</p>
      </div>
    );
}

export default RosTopics;