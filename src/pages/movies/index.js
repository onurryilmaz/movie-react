import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//Action
import { moviesAll, moviesPost, moviesDelete, moviesGet, moviesPut } from './api/action'
//Components
import MovieList from './componenst/MovieList'

const Index = () => {
    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.movies.moviesAll)
    const getMovies = useSelector(state => state.movies.moviesGet)
    //const postMovies = useSelector(state => state.movies.moviesPost)
    //const putMovies = useSelector(state => state.movies.moviesPut)

    useEffect(() => {
        dispatch(moviesAll())
    }, [dispatch])

    //Event
    const handleSubmit = (data) => {
        //(file) Convert the value from object to formData
        const formatFormData = (data) => {
          let formData = new FormData()
          for(let k in data) {
            formData.append(k, data[k]);
          }
          return formData;
        }
        //Dispatch
        dispatch(moviesPost(formatFormData(data)))
    }
    const handlePut = (id, data) => {
        //(file) Convert the value from object to formData
        const formatFormData = (data) => {
          let formData = new FormData()
          for(let k in data) {
            formData.append(k, data[k]);
          }
          return formData;
        }
        //Dispatch
        dispatch(moviesPut(id, formatFormData(data)))
    }
    const handleDelete = (id) => {
        dispatch(moviesDelete(id))
    }
    const handleGet = (id) => {
        console.log(id)
        //dispatch(moviesGet(id))
    }
    //Page State
    const moviesState = {
        allMovies,
        handleSubmit,
        handleDelete,
        handleGet,
        getMovies,
        handlePut,
    }
    
    return (
        <div>
            <MovieList moviesState = {moviesState} />
        </div>
    );
}

export default Index;
