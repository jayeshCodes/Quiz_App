import React, { useEffect, useState } from "react";
import { Card, Grid, Container, Text, Button, Modal, useModal, Row, Checkbox, Textarea, Input } from "@nextui-org/react";

// import Upload_module from "./upload_module";


export const Upload = () => {

  const [isUploadPressed, setIsUploadPressed] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch("http://localhost:5000/upload_image", {
      method: "POST",
      body: formData,
    });

    const image_data = await response.json();
    console.log(image_data);
  };


    const [data, setData] = useState([{}])



    useEffect(() => {
      // if (isUploadPressed) { // Check if the upload button is pressed
        fetch("http://localhost:5000/image").then(response =>
        response.json()).then(data => {
          setData(data)
          console.log(data)
        });
      }
    // }
    , [isUploadPressed]);  

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
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileInputChange} />
                <button type="submit">Upload Image</button >
              </form>
            </div>
            <Text style={{ marginBottom: "8%" }}>OR</Text>
            <Textarea
              underlined
              color="secondary"
              labelPlaceholder="Type your questions here"
              value={data.text}
              contentEditable
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