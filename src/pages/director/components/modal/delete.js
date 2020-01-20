import React, { useState } from 'react';
//BOOTSTRAP
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Delete ({id, name, handleDelete}) {
    //State
    const [show, setShow] = useState(false);
    //Event
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleShow}>
        <i className="fal fa-trash-alt"></i> 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title><b>{name}</b></Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <b>{name}</b> Silmek İstediğinize Emin misiniz?
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                İptal
            </Button>
            <Button 
              variant="danger" 
              onClick = {() => {
                  handleDelete(id)
            }}>
              
              Sil
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
