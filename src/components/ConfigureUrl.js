import { Input, InputGroup, InputGroupText } from "reactstrap";

const ConfigureUrl = ({ url, setUrl }) => {

  return (
    <InputGroup>
      <InputGroupText>ws://</InputGroupText>
      <Input
        placeholder="Enter ROS Bridge URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </InputGroup>
  );
};

export default ConfigureUrl;
