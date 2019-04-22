import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPopup = (props) => {

    return(
        <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
                    <div >welocme </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalPopup;