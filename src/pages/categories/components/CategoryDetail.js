import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//Action
import { categoryGet } from '../api/action'

import { Player } from 'video-react';

import {API_BASE} from '../../../config/env';
//Bootstrap
import { Row, Col, Card } from 'react-bootstrap';

const CategoryDetail = ({id}) => {
    const dispatch = useDispatch();
    const getCategory = useSelector(state => state.category.categoryGet);
    const movies = getCategory.data[0] && getCategory.data[0].movie

    useEffect(() => {
        dispatch(categoryGet(id))
    },[dispatch, id]);
    
    return (
        <Row>
            {console.log('movie', movies)}
            {console.log(getCategory)}
            {movies && movies.map((item) =>{
                return(
                <Col md={3} key={item._id}>
                    <div>{item.movie_name}</div>
                    {item.movie_video ? 
                        <Player
                            playsInline
                            poster={`${API_BASE}/uploads/${item.movie_img}`}
                            src={item.movie_video && `${API_BASE}/uploads/${item.movie_video}`}
                        /> : 
                        <Card.Img variant="top" src={`${API_BASE}/uploads/${item.movie_img}`} /> 
                    }
                    
                    <Card.Body>
                        <Card.Title>{item.movie_name}</Card.Title>
                    </Card.Body>
                    
                </Col>
                )
            } )}
        </Row>
    );
}

export default CategoryDetail;
