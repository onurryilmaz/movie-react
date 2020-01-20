import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';

import {API_BASE} from '../../../config/env';
//Action
import { directorAll } from '../../director/api/action'
//Video
import { Player } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css"; 
//Modal
import Add from './modal/add'
import Delete from './modal/delete'
import Edit from './modal/edit'
//LOADER
import { HashLoader } from "react-spinners";
//Bootstrap
import { Row, Col, ListGroup, ListGroupItem, Card } from 'react-bootstrap';

const MovieList = ({moviesState}) => {
    const dispatch = useDispatch();
    const moviesData = moviesState.allMovies.data;
    const category = useSelector(state => state.category.categoryAll) 
    const director = useSelector(state => state.director.directorAll)

    useEffect(() => {
        dispatch(directorAll())
    }, [dispatch])

    return (
        <>
            <div className='button-group'>
                <Add handleSubmit = {moviesState.handleSubmit} category = {category} director={director}/>
            </div>
            
            <HashLoader size={"20px"} color={"#65b9cc"} loading={moviesState.allMovies.loading} />
            <Row>
                {moviesData && moviesData.map((item) => {
                    return(
                        <Col md="3" key = {item._id}>
                            <Card>
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
                                <ListGroup className="list-group-flush">
                                    {item.category && 
                                        <ListGroupItem>
                                            <b>Kategori :</b>
                                            <Card.Link href={`/category/${item.category._id}`}>{item.category.category_name}</Card.Link> 
                                        </ListGroupItem>
                                    }
                                    {item.imdb_score && 
                                        <ListGroupItem><b>İmdb:</b> {item.imdb_score}</ListGroupItem>
                                    }
                                    {item.movie_year && 
                                        <ListGroupItem><b>Yıl:</b>  {moment(item.movie_year).format('YYYY-MM-DD')} </ListGroupItem>
                                    }
                                    {item.movie_country && 
                                        <ListGroupItem><b>Ülke:</b>  {item.movie_country} </ListGroupItem>
                                    }
                                    {item.joinData && 
                                        <ListGroupItem>
                                            <b>Yönetmen:</b>  
                                            <Card.Link href={`/director/${item.joinData._id}`}>
                                                {item.joinData.director_name}
                                                {item.joinData.director_surname}
                                            </Card.Link> 
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>
                                                    <b>Yaşı : </b>
                                                    {moment(item.joinData.director_age).format('YYYY-MM-DD')}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <b>Puanı : </b>
                                                    {item.joinData.director_rate}
                                                </ListGroupItem>
                                            </ListGroup>
                                        </ListGroupItem>
                                    }
                                    
                                </ListGroup>
                                <Card.Body>
                                    <Delete handleDelete = {moviesState.handleDelete} id = {item._id} name={item.movie_name}/>
                                    <Edit movies = {item} category = {category} director={director} handlePut = {moviesState.handlePut}/>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
            </Row>
        </>
    );
}

export default MovieList;
