import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function App() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="App container py-3">
            <h1>Hello, pals!</h1>

            <p>
                Take a look at <code>./src/styles/_theme.scss</code> to see how this Bootstrap theme was created.
            </p>

            <Button color="primary" onClick={toggle}>Click me!</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>This is modal</ModalHeader>
                <ModalBody>
                    Click outside to close this
                </ModalBody>
            </Modal>
        </div>
    );
}

export default App;