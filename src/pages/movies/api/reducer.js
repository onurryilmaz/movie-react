import { toast } from "react-toastify";

import {
    MOVIES_ALL_PENDING,
    MOVIES_ALL_FULFILLED,
    MOVIES_ALL_REJECTED,

    MOVIES_GET_PENDING,
    MOVIES_GET_FULFILLED,
    MOVIES_GET_REJECTED,
    
    MOVIES_POST_PENDING,
    MOVIES_POST_FULFILLED,
    MOVIES_POST_REJECTED,
    
    MOVIES_DELETE_PENDING,
    MOVIES_DELETE_FULFILLED,
    MOVIES_DELETE_REJECTED,
    
    MOVIES_PUT_PENDING,
    MOVIES_PUT_FULFILLED,
    MOVIES_PUT_REJECTED,
    
} from './types'

const initialState = {
    moviesAll : {
        data : [],
        loading : false,
        error : {},
    },
    moviesGet : {
        data : [],
        loading : false,
        error : {},
    },
    moviesPost : {
        data : [],
        loading : false,
        error : {},
    },
    moviesDelete : {
        data : [],
        loading : false,
        error : {},
    },
    moviesPut : {
        data : [],
        loading : false,
        error : {},
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        //MOVIES GET ALL
        case MOVIES_ALL_PENDING:
            return {
                ...state,
                moviesAll : {
                    ...state.moviesAll,
                    loading : true,
                }
            }
        case MOVIES_ALL_FULFILLED:
            return {
                ...state,
                moviesAll : {
                    ...state.moviesAll,
                    data : action.payload,
                    loading : false,
                },
            }
        case MOVIES_ALL_REJECTED:
            return {
                ...state,
                moviesAll : {
                    ...state.moviesAll,
                    error : action.payload,
                    loading : false,
                }
            }
        //MOVIES GET
        case MOVIES_GET_PENDING:
            return {
                ...state,
                moviesGet : {
                    ...state.moviesGet,
                    loading : true,
                }
            }
        case MOVIES_GET_FULFILLED:
            return {
                ...state,
                moviesGet : {
                    ...state.moviesGet,
                    data : action.payload,
                    loading : false,
                },
            }
        case MOVIES_GET_REJECTED:
            return {
                ...state,
                moviesGet : {
                    ...state.moviesGet,
                    error : action.payload,
                    loading : false,
                }
            }
        //MOVIES POST
        case MOVIES_POST_PENDING:
            return {
                ...state,
                moviesPost : {
                    ...state.moviesPost,
                    loading : true,
                }
            }
        case MOVIES_POST_FULFILLED:
            return {
                ...state,
                moviesPost : {
                    ...state.moviesPost,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`${action.payload.movie_name} Başarılı Şekilde Oluşturuldu`),
                },
            }
        case MOVIES_POST_REJECTED:
            return {
                ...state,
                moviesPost : {
                    ...state.moviesPost,
                    error : action.payload,
                    loading : false,
                }
            }
        //MOVIES DELETE
        case MOVIES_DELETE_PENDING:
            return {
                ...state,
                moviesDelete : {
                    ...state.moviesDelete,
                    loading : true,
                }
            }
        case MOVIES_DELETE_FULFILLED:
            return {
                ...state,
                moviesDelete : {
                    ...state.moviesDelete,
                    data : action.payload,
                    loading : false,
                    toast : toast.error(`${action.payload.movie_name} Başarılı Şekilde Silindi`),
                },
            }
        case MOVIES_DELETE_REJECTED:
            return {
                ...state,
                moviesDelete : {
                    ...state.moviesDelete,
                    error : action.payload,
                    loading : false,
                }
            }
        //MOVIES PUT
        case MOVIES_PUT_PENDING:
            return {
                ...state,
                moviesPut : {
                    ...state.moviesPut,
                    loading : true,
                }
            }
        case MOVIES_PUT_FULFILLED:
            return {
                ...state,
                moviesPut : {
                    ...state.moviesPut,
                    data : action.payload,
                    loading : false,
                    toast : !action.payload.message ? toast.success(`${action.payload.movie_name} Başarılı Şekilde Düzenlendi`) : 
                            toast.success(`${action.payload.message} Başarılı Şekilde Düzenlendi`)        
                            ,
                },
            }
        case MOVIES_PUT_REJECTED:
            return {
                ...state,
                moviesPut : {
                    ...state.moviesPut,
                    error : action.payload,
                    loading : false,
                }
            }
        default:
            return state;
    }
}