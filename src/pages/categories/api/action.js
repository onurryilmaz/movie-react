import MOVIEApi from "../../../store/api";

//CATEGORY ALL
export function categoryAll() {
    return dispatch => {
        dispatch({
            type: 'CATEGORY',
            async payload () {
                const res = await MOVIEApi.api.get('/category');
                return res.data;
            }
        })
    }
}
//CATEGORY GET
export function categoryGet(id) {
    return dispatch => {
        dispatch({
            type: 'CATEGORY_GET',
            async payload () {
                const res = await MOVIEApi.api.get(`/category/${id}`);
                return res.data;
            }
        })
    }
}
//CATEGORY POST
export function categoryPost(data) {
    return dispatch => {
        dispatch({
            type: 'CATEGORY_POST',
            async payload () {
                const res = await MOVIEApi.api.post(`/category`, data);
                await dispatch(categoryAll())
                return res.data;
            }
        })
    }
}
//CATEGORY PUT
export function categoryPut(data) {
    return dispatch => {
        dispatch({
            type: 'CATEGORY_PUT',
            async payload () {
                const res = await MOVIEApi.api.put(`/category/${data._id}`, data);
                await dispatch(categoryAll())
                return res.data;
            }
        })
    }
}
//CATEGORY DELETE
export function categoryDelete(id) {
    return dispatch => {
        dispatch({
            type: 'CATEGORY_DELETE',
            async payload () {
                const res = await MOVIEApi.api.delete(`/category/${id}`);
                await dispatch(categoryAll())
                await dispatch(categoryGet('0'))
                return res.data;
            }
        })
    }
}