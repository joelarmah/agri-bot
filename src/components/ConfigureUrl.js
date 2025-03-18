import { Input, InputGroup, InputGroupText } from "reactstrap";

const ConfigureUrl = ({ url }) => {

  const onUrlChanged = (url) => {
    console.log(url);
  }

  return (
    <InputGroup>
      <InputGroupText>ws://</InputGroupText>
      <Input
        placeholder="Enter ROS Bridge URL"
        value={url}
        onChange={(e) => onUrlChanged(e.target.value)}
      />
    </InputGroup>
  );
};

export default ConfigureUrl;
