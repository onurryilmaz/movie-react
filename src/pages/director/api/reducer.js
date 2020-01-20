import { toast } from "react-toastify";

import {
    DIRECTOR_ALL_PENDING,
    DIRECTOR_ALL_FULFILLED,
    DIRECTOR_ALL_REJECTED,
    
    DIRECTOR_GET_PENDING,
    DIRECTOR_GET_FULFILLED,
    DIRECTOR_GET_REJECTED,
    
    DIRECTOR_PUT_PENDING,
    DIRECTOR_PUT_FULFILLED,
    DIRECTOR_PUT_REJECTED,
    
    DIRECTOR_POST_PENDING,
    DIRECTOR_POST_FULFILLED,
    DIRECTOR_POST_REJECTED,
    
    DIRECTOR_DELETE_PENDING,
    DIRECTOR_DELETE_FULFILLED,
    DIRECTOR_DELETE_REJECTED,
} from './types'

const initialState = {
    directorAll : {
        data : [],
        loading : false,
        error : {},
    },
    directorGet : {
        data : [],
        loading : false,
        error : {},
    },
    directorPut : {
        data : [],
        loading : false,
        error : {},
    },
    directorPost : {
        data : [],
        loading : false,
        error : {},
    },
    directorDelete : {
        data : [],
        loading : false,
        error : {},
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        //DIRECTOR GET ALL
        case DIRECTOR_ALL_PENDING:
            return {
                ...state,
                directorAll : {
                    ...state.directorAll,
                    loading : true,
                }
            }
        case DIRECTOR_ALL_FULFILLED:
            return {
                ...state,
                directorAll : {
                    ...state.directorAll,
                    data : action.payload,
                    loading : false,
                },
            }
        case DIRECTOR_ALL_REJECTED:
            return {
                ...state,
                directorAll : {
                    ...state.directorAll,
                    error : action.payload,
                    loading : false,
                }
            }
        //DIRECTOR GET ID
        case DIRECTOR_GET_PENDING:
            return {
                ...state,
                directorGet : {
                    ...state.directorGet,
                    loading : true,
                }
            }
        case DIRECTOR_GET_FULFILLED:
            return {
                ...state,
                directorGet : {
                    ...state.directorGet,
                    data : action.payload,
                    loading : false,
                },
            }
        case DIRECTOR_GET_REJECTED:
            return {
                ...state,
                directorGet : {
                    ...state.directorGet,
                    error : action.payload,
                    loading : false,
                }
            }
        //DIRECTOR PUT
        case DIRECTOR_PUT_PENDING:
            return {
                ...state,
                directorPut : {
                    ...state.directorPut,
                    loading : true,
                }
            }
        case DIRECTOR_PUT_FULFILLED:
            return {
                ...state,
                directorPut : {
                    ...state.directorPut,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`${action.payload.director_name} Başarılı Şekilde Değiştirildi`),
                },
            }
        case DIRECTOR_PUT_REJECTED:
            return {
                ...state,
                directorPut : {
                    ...state.directorPut,
                    error : action.payload,
                    loading : false,
                }
            }
        //DIRECTOR DELETE
        case DIRECTOR_DELETE_PENDING:
            return {
                ...state,
                directorDelete : {
                    ...state.directorDelete,
                    loading : true,
                }
            }
        case DIRECTOR_DELETE_FULFILLED:
            return {
                ...state,
                directorDelete : {
                    ...state.directorDelete,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`${action.payload.director_name} Başarılı Şekilde Silindi`),
                },
            }
        case DIRECTOR_DELETE_REJECTED:
            return {
                ...state,
                directorDelete : {
                    ...state.directorDelete,
                    error : action.payload,
                    loading : false,
                }
            }
        //DIRECTOR POST
        case DIRECTOR_POST_PENDING:
            return {
                ...state,
                directorPost : {
                    ...state.directorPost,
                    loading : true,
                }
            }
        case DIRECTOR_POST_FULFILLED:
            return {
                ...state,
                directorPost : {
                    ...state.directorPost,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`${action.payload.director_name} Başarılı Şekilde Eklendi`),
                },
            }
        case DIRECTOR_POST_REJECTED:
            return {
                ...state,
                directorPost : {
                    ...state.directorPost,
                    error : action.payload,
                    loading : false,
                    toast : toast.error(`Yönetmen Eklenirken Hata Oluştu`),
                }
            }

        default:
            return state;
    }
}