import React from "react";
import { Card, Grid, Container, Text, Button, Modal, useModal, Row, Checkbox, Textarea } from "@nextui-org/react";

// import Upload_module from "./upload_module";


export const Upload = () => {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className="upload">
      <div className="upload-header">
        <h3>Upload</h3>
      </div>
      <div className="upload-body">
        {/* <Container className="upload-body-container"> */}
        <Card>
          <Card.Header><h3>Dummy Test</h3></Card.Header>
          <Card.Divider className="card-divider" />
          <Card.Body>Upload questions for dummy test</Card.Body>
          <Button size="md" color="secondary" onPress={() => setVisible(true)} >
            Upload Image/Type Questions
          </Button>
        </Card>
        {/* </Container> */}
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          scroll
          width="800px"
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Questions
            </Text>
          </Modal.Header>
          <Modal.Body>
            <div className="upload-modal-image">
              <Text>Upload Image(s) here</Text>
              {/* <Upload_module /> */}
            </div>
            <Text style={{marginBottom:"8%"}}>OR</Text>
            <Textarea
              underlined
              color="secondary"
              labelPlaceholder="Type your questions here"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button color="secondary" auto onPress={closeHandler}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}