import React, { useState, useRef } from 'react';

//Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';
//Validate
import controlling from '../../../partials/controlling'

function Add({handleSubmit, category, director}) {
    //State
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        director: "",
        movie_name: "",
        movie_country: "",
        imdb_score: 0,
        movie_year: '',
        movie_img: "",
        movie_video: "",
        category: '',
    })
    //Require Input state
    const [ validate ] = useState({
        director : useRef(),
        category : useRef(),
        movie_name : useRef(),
        movie_img : useRef(),
    }) 

    //Event
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChane = (e) => {
        if(!e.currentTarget.files) {
            setValue({
                ...value, 
                [e.target.name] : e.target.value
            })
        } else {
            setValue({
                ...value, 
                [e.target.name] : e.currentTarget.files[0]
            })
        }
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Yeni Video Ekle
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Video Ekle</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
                {/* Category */}
                <Form.Group>
                    <Form.Label>Kategori Seç</Form.Label>
                    <Form.Control as="select" name = 'category' onChange={handleChane} ref={validate.category}>
                        <option value=''>Kategori Seçin</option>
                        {category.data && category.data.map(( item ) => {
                            return (
                                <option key={item._id} value={item._id}>{item.category_name}</option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>

                {/* Director */}
                <Form.Group>
                    <Form.Label>Yönetmen Seç</Form.Label>
                    <Form.Control as="select" name = 'director' onChange={handleChane} ref ={validate.director}>
                        <option value=''>Yönetmen Seçin</option>
                        {director.data && director.data.map(( item ) => {
                            return (
                                <option key={item._id} value={item._id}>{item.director_name}</option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>

                 {/* Movie Name */}
                <Form.Group>
                    <Form.Label>Video Adı</Form.Label>
                    <Form.Control 
                    type="text" 
                    name = 'movie_name' 
                    onChange = {handleChane}
                    ref = {validate.movie_name}/>
                </Form.Group>

                {/* Movie Country */}
                <Form.Group>
                    <Form.Label>Video Ülkesi</Form.Label>
                    <Form.Control 
                    type="text" 
                    name = 'movie_country' 
                    onChange = {handleChane}  />
                </Form.Group>

                {/* Movie imdb score */}
                <Form.Group>
                    <Form.Label>İmdb Puanı</Form.Label>
                    <Form.Control type="number" name = 'imdb_score' onChange = {handleChane}/>
                </Form.Group>

                {/* Movie Year */}
                <Form.Group>
                    <Form.Label>Yılı</Form.Label>
                    <Form.Control type="date" name = 'movie_year' onChange = {handleChane} />
                </Form.Group>

                {/* Movie img */}
                <Form.Group>
                    <Form.Label>Video Resmi</Form.Label>
                    <Form.Control type="file" name = 'movie_img' onChange = {handleChane} ref={validate.movie_img} />
                </Form.Group>
                
                {/* Movie video */}
                <Form.Group>
                    <Form.Label>Video</Form.Label>
                    <Form.Control type="file" name = 'movie_video' onChange = {handleChane} />
                </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button 
                variant="primary" 
                onClick={() => {
                    if(controlling(validate)){
                        handleSubmit(value)
                        handleClose();
                    }
                }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Add;
