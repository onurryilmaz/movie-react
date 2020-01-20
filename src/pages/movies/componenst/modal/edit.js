import React, { useState, useRef } from 'react';
import moment from 'moment';

//Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';
//Validate
import controlling from '../../../partials/controlling'
//Video
import { Player } from 'video-react';
import "../../../../../node_modules/video-react/dist/video-react.css"; 

import {API_BASE} from '../../../../config/env';

function Edit({movies, director, category, handlePut}) {
    //State
    const [show, setShow] = useState(false);
    
    const [value, setValue] = useState({
        _id: movies._id || '',
        director: movies.director || "",
        movie_name: movies.movie_name || "",
        movie_country: movies.movie_country || "",
        imdb_score: movies.imdb_score || "",
        movie_year: movies.movie_year || "",
        movie_img: movies.movie_img || "",
        movie_video: movies.movie_video || "",
        category: movies.category._id || "",
    })
    //Require Input state
    const [ validate ] = useState({
        director : useRef(),
        category : useRef(),
        movie_name : useRef(),
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
          Düzenle
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
                    <Form.Control 
                        as="select" 
                        name = 'category' 
                        onChange={handleChane} 
                        ref={validate.category}
                        value={value.category}
                    >

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
                    <Form.Control 
                        as="select" 
                        name = 'director' 
                        onChange={handleChane} 
                        ref ={validate.director} 
                        value={value.director}
                    >
                        <option value=''>Yönetmen Seçin</option>
                        {director.data && director.data.map((item) => {
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
                        ref = {validate.movie_name}
                        value={value.movie_name || ''}
                    />
                </Form.Group>

                {/* Movie Country */}
                <Form.Group>
                    <Form.Label>Video Ülkesi</Form.Label>
                    <Form.Control 
                        type="text" 
                        name = 'movie_country' 
                        onChange = {handleChane}  
                        value={value.movie_country || ''}
                    />
                </Form.Group>

                {/* Movie imdb score */}
                <Form.Group>
                    <Form.Label>İmdb Puanı</Form.Label>
                    <Form.Control 
                        type="number" 
                        name = 'imdb_score' 
                        onChange = {handleChane} 
                        value={value.imdb_score || ''}
                    />
                </Form.Group>

                {/* Movie Year */}
                <Form.Group>
                    <Form.Label>Yılı</Form.Label>
                    <Form.Control 
                        type="date" 
                        name = 'movie_year' 
                        onChange = {handleChane} 
                        value={moment(value.movie_year).format('YYYY-MM-DD') || ''}
                    />
                </Form.Group>

                {/* Movie img */}
                <Form.Group>
                    <Form.Label>Video Resmi</Form.Label>
                    <div>
                        <img src= {`${API_BASE}/uploads/${value.movie_img}`} alt={value.movie_name} width='100%' />
                    </div>
                    <Form.Control type="file" name = 'movie_img' onChange = {handleChane}/>
                </Form.Group>
                
                {/* Movie video */}
                <Form.Group>
                    <Form.Label>Video</Form.Label>
                    {value.movie_video ?
                        <Player
                            playsInline
                            poster={`${API_BASE}/uploads/${value.movie_img}`}
                            src={value.movie_video && `${API_BASE}/uploads/${value.movie_video}`}
                        /> : 'Video Eklenmemiş'}
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
                        handlePut(value._id, value)
                        handleClose();
                    }
                }}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Edit;
