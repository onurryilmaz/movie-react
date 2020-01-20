import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

//ACTION
import {categoryDelete} from '../../api/action'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function DeleteModal({name, id}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (id) => {
        dispatch(categoryDelete(id))
        handleClose()
    } 
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Kategoriyi Sil
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Kategori Sil</Modal.Title>
          </Modal.Header>
          <Modal.Body><b>{name}</b> İsimli Kategoriyi Silmek Üzeresiniz</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button variant="danger" onClick={() => handleSubmit(id)}>
              Sil
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DeleteModal;