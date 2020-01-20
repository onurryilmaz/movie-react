import React, { useState } from 'react';

//Bootstrap
import { Modal, Button } from 'react-bootstrap';

function Delete({id, handleDelete, name}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Sil
        </Button>
  
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title><b>{name}</b></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <b>{name}</b> Silmek İstediğinize Eminmisiniz
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="danger" onClick={() => {
              handleDelete(id);
              handleClose()
            }}>
              Sil
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Delete;
