import React, { useEffect, useState } from "react";
import { User, Button, Modal, Text, Input, Row, Checkbox } from "@nextui-org/react";

export const Profile = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
      fetch("http://localhost:5000/image").then(response =>
      response.json()).then(data => {
        setData(data)
        console.log(data)
      })
    }, [])
  

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div className='profile-main-div'>
            <div className='profile-header'>
                <User src='https://icaii22.rvscollege.ac.in/wp-content/uploads/2015/04/speaker-3-v2.jpg'
                    name='Jayesh Gajbhar'
                    size='xl'
                />
            <div className='profile-logout'>
                <Button bordered color="error" auto onPress={handler}>
                    Logout
                </Button>
                <Modal
                    blur
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Body>
                        <Text h4>Are you sure you want to logout?</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto bordered onPress={closeHandler}>
                            Cancel
                        </Button>
                        <Button auto flat color="error" onPress={closeHandler}>
                            Logout
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
            <div className='profile-body'>
                <h4>Email ID: jayeshcodes@gmail.com</h4>
                <h4>Phone No.: 69696969</h4>
                <h4>Teacher ID: 69420</h4>
                {(typeof data.text === 'undefined') ? (
                <p>Loading ...</p>
              ) : (<p>{data.text}</p>)
              }
            </div>
        </div>
    )
}

