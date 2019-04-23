import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPopup = (props) => {

    return(
       <React.Fragment>
            <Modal isOpen={props.modal} toggle={props.popupModal} className={props.className}>
                <ModalHeader toggle={props.popupModal}>{'User Detail'}</ModalHeader>
                <ModalBody>
                        <ul className="peopleDetail">
                            <li><span>Name </span>: {props.selectedPeople.name}</li>
                            <li><span>Height </span>: {props.selectedPeople.height}</li>
                            <li><span>Mass </span>: {props.selectedPeople.mass}</li>
                            <li><span>Hair Colour </span>: {props.selectedPeople.hair_color}</li>
                            <li><span>Skin Colour </span>: {props.selectedPeople.skin_color}</li>
                            <li><span>Eye Colour </span>: {props.selectedPeople.eye_color}</li>
                            <li><span>Birth Year </span>: {props.selectedPeople.birth_year}</li>
                            <li><span>Gender </span>: {props.selectedPeople.gender}</li>
                        </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.popupModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default ModalPopup;