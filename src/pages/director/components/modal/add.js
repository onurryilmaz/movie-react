import React, { useState } from 'react';
import moment from 'moment'
//BOOTSTRAP
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Add ({handleSave}) {
    //State
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        director_name : '',
        director_surname :'',
        director_age : '',
        director_rate : '',
        director_biography : '',
    })
    //Event
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setValue({
            director_name : '',
            director_surname :'',
            director_age : '',
            director_rate : '',
            director_biography : '',
        })
    };
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value,
        })
    }

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        <i className="fal fa-save"></i> Yeni Yönetmen Ekle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Yeni Yönetmen Oluştur</Modal.Title>
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
                        type="number" 
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
                    handleSave(value)
                    handleClose()
                }}>

                Kaydet
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
