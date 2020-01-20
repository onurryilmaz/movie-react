import { toast } from "react-toastify";
import {
    CATEGORY_PENDING, 
    CATEGORY_FULFILLED, 
    CATEGORY_REJECTED,

    CATEGORY_GET_PENDING, 
    CATEGORY_GET_FULFILLED, 
    CATEGORY_GET_REJECTED,

    CATEGORY_POST_PENDING, 
    CATEGORY_POST_FULFILLED, 
    CATEGORY_POST_REJECTED,

    CATEGORY_PUT_PENDING, 
    CATEGORY_PUT_FULFILLED, 
    CATEGORY_PUT_REJECTED,

    CATEGORY_DELETE_PENDING, 
    CATEGORY_DELETE_FULFILLED, 
    CATEGORY_DELETE_REJECTED,
    
} from './types';

const initialState = {
    categoryAll : {
        data : [],
        loading : false,
        error : {},
    },
    categoryGet : {
        data : [],
        loading : false,
        error : {},
    },
    categoryPost : {
        data : [],
        loading : false,
        error : {},
    },
    categoryPut : {
        data : [],
        loading : false,
        error : {},
    },
    categoryDelete : {
        data : [],
        loading : false,
        error : {},
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        //CATEGORY GET ALL
        case CATEGORY_PENDING:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    loading : true,
                }
            }
        case CATEGORY_FULFILLED:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    data : action.payload,
                    loading : false,
                },
            }
        case CATEGORY_REJECTED:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    error : action.payload,
                    loading : false,
                }
            }
        //CATEGORY GET
        case CATEGORY_GET_PENDING:
            return {
                ...state,
                categoryGet : {
                    ...state.categoryGet,
                    loading : true
                }
            }
        case CATEGORY_GET_FULFILLED:
            return {
                ...state,
                categoryGet : {
                    ...state.categoryGet,
                    data : action.payload,
                    loading: false,
                },
            }
        case CATEGORY_GET_REJECTED:
            return {
                ...state,
                categoryGet : {
                    ...state.categoryGet,
                    error : action.payload,
                    loading : false,
                }
            }
        //CATEGORY POST
        case CATEGORY_POST_PENDING:
            return {
                ...state,
                categoryPost : {
                    ...state.categoryPost,
                    loading : true
                }
            }
        case CATEGORY_POST_FULFILLED:
            return {
                ...state,
                categoryPost : {
                    ...state.categoryPost,
                    data : action.payload,
                    loading: false,
                    toast : action.payload.category_sub_number ?
                         toast.success(`${action.payload.category_name} Kategorisi Başarılı Şekilde Eklendi`):
                         toast.error(`${action.payload}`),
                },
            }
        case CATEGORY_POST_REJECTED:
            return {
                ...state,
                categoryPost : {
                    ...state.categoryPost,
                    error : action.payload,
                    loading : false,
                    toast : toast.error(`Kategori Oluşturulamadı`),
                }
            }
        //CATEGORY PUT
        case CATEGORY_PUT_PENDING:
            return {
                ...state,
                categoryPut : {
                    ...state.categoryPut,
                    loading : true
                }
            }
        case CATEGORY_PUT_FULFILLED:
            return {
                ...state,
                categoryPut : {
                    ...state.categoryPut,
                    data : action.payload,
                    loading: false,
                    toast : toast.success(`${action.payload.category_name} Kategorisi Başarılı Şekilde Değiştirildi`),
                },
                
            }
        case CATEGORY_PUT_REJECTED:
            return {
                ...state,
                categoryPut : {
                    ...state.categoryPut,
                    error : action.payload,
                    loading : false,
                }
            }
        //CATEGORY DELETE
        case CATEGORY_DELETE_PENDING:
            return {
                ...state,
                categoryDelete : {
                    ...state.categoryDelete,
                    loading : true
                }
            }
        case CATEGORY_DELETE_FULFILLED:
            return {
                ...state,
                categoryDelete : {
                    ...state.categoryDelete,
                    data : action.payload,
                    loading: false,
                    toast : toast.warn(`${action.payload.category_name} Kategorisi Başarılı Şekilde Silindi`),
                },
            }
        case CATEGORY_DELETE_REJECTED:
            return {
                ...state,
                categoryDelete : {
                    ...state.categoryDelete,
                    error : action.payload,
                    loading : false,
                }
            }
        default:
            return state;
    }
}