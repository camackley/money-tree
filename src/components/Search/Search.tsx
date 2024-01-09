import { FaSearch } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        className="bg-secondary-subtle"
        type="text"
        placeholder="Search stock..."
      />
      <Button
        variant="secondary"
        id="button-addon2"
      >
        <FaSearch />
      </Button>
    </InputGroup>
  );
}

export {Search};
