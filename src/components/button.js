import { Button } from "react-bootstrap";
import React from "react";

export default function MyButton(props) {
  return (
    <div>
      <Button variant="info" size="lg" id="gtb" className="my-4">
        {props.name}
      </Button>
    </div>
  );
}
