import React, { useState, useEffect } from 'react';
import moment from 'moment'
//BOOTSTRAP
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Edit ({editPageState, id}) {
    const directors = editPageState.getDirectors.data;
    //State
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        ...directors
    })
    useEffect(() => {
        setValue({
            ...directors
        })
    }, [directors])
    //Event
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        //GET DIRECTOR
        editPageState.handleEditData(id)
    };
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value,
        })
    }

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow}>
        <i className="fal fa-edit"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{directors.director_name} {directors.director_surname} Düzenle</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Yönetmen Adı</Form.Label>
                    <Form.Control 
                        type="text" 
                        value = {value.director_name || ''}
                        name='director_name'
                        onChange = {handleChange}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Soyadı</Form.Label>
                    <Form.Control 
                        type="text" 
                        value = {value.director_surname || ''}
                        name='director_surname'
                        onChange = {handleChange}
                     />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Yaşı</Form.Label>
                    <Form.Control 
                        type="date" 
                        value =  {moment(value.director_age).format('YYYY-MM-DD') || ''}
                        name='director_age'
                        onChange = {handleChange}
                     />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Puanı</Form.Label>
                    <Form.Control 
                        type="text" 
                        value = {value.director_rate || ''}
                        name='director_rate'
                        onChange = {handleChange}
                     />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Biyografi</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        value={value.director_biography || ''}
                        name = 'director_biography'
                        onChange = {handleChange}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                İptal
            </Button>
            <Button 
                variant="primary" 
                onClick = {() => {
                    editPageState.handleEditSave(id, value)
                    handleClose()
                }}>
                Kaydet
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
