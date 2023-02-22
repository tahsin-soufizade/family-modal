import React from "react";
import { Modal } from "react-bootstrap";

const Model = ({ handleModal, show, data }) => {
    return (

        <div>
            <Modal show={show} onHide={handleModal} className='modal-container'>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={data.imgURL} alt={data.title} className='w-100 rounded mb-3' />
                    <p className="text-secondary text-center">{data.desc}</p>
                </Modal.Body>
            </Modal>
        </div >);
}

export default Model;