import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
//Action
import { directorAll, directorGet, directorPut, directorPost, directorDelete } from './api/action'
//Componensts
import DirectorList from './components/DirectorList'
//LOADER
import { HashLoader } from "react-spinners";

const Index = () => {
    const dispatch = useDispatch();
    const allDirectors = useSelector( state => state.director.directorAll )
    const getDirectors = useSelector( state => state.director.directorGet )
    //const putDirectors = useSelector( state => state.director.directorPut )
    //const postDirectors = useSelector( state => state.director.directorPost )
    //const deleteDirectors = useSelector( state => state.director.directorDelete )

    useEffect(() => {
        dispatch(directorAll());
    }, [dispatch])

    const handleEditData = (id) => {
        dispatch(directorGet(id))
    }
    const handleEditSave = (id, data) => {
        dispatch(directorPut(id, data))
    }
    const handleSave = (data) => {
        dispatch(directorPost(data))
    }
    const handleDelete = (id) => {
        dispatch(directorDelete(id))
    }
    //Page State
    const editPageState = {
        allDirectors,
        handleEditData,
        getDirectors,
        handleEditSave,
        handleDelete,
        handleSave,
    }

    return (
        <>
            <HashLoader size={"20px"} color={"#65b9cc"} loading={allDirectors.loading} />
            <DirectorList editPageState = {editPageState}/>
        </>
    );
}

export default Index;
