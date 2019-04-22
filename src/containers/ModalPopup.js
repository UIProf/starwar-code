import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPopup = (props) => {

    return(
        <div>
            <Modal isOpen={props.modal} toggle={props.popupModal} className={props.className}>
                <ModalHeader toggle={props.popupModal}>Modal title</ModalHeader>
                <ModalBody>
                        <div >welocme </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.popupModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalPopup;