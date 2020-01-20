import MOVIEApi from "../../../store/api";

//DIRECTOR ALL
export function directorAll() {
    return dispatch => {
        dispatch({
            type: 'DIRECTOR_ALL',
            async payload () {
                const res = await MOVIEApi.api.get('/director');
                return res.data;
            }
        })
    }
}
//DIRECTOR GET
export function directorGet(id) {
    return dispatch => {
        dispatch({
            type: 'DIRECTOR_GET',
            async payload () {
                const res = await MOVIEApi.api.get(`/director/${id}`);
                return res.data;
            }
        })
    }
}
//DIRECTOR PUT
export function directorPut(id, data) {
    return dispatch => {
        dispatch({
            type: 'DIRECTOR_PUT',
            async payload () {
                const res = await MOVIEApi.api.put(`/director/${id}`, data);
                await dispatch(directorAll());
                return res.data;
            }
        })
    }
}
//DIRECTOR DELETE
export function directorDelete(id) {
    return dispatch => {
        dispatch({
            type: 'DIRECTOR_DELETE',
            async payload () {
                const res = await MOVIEApi.api.delete(`/director/${id}`);
                await dispatch(directorAll());
                return res.data;
            }
        })
    }
}
//DIRECTOR POST
export function directorPost(data) {
    return dispatch => {
        dispatch({
            type: 'DIRECTOR_POST',
            async payload () {
                const res = await MOVIEApi.api.post(`/director`, data);
                await dispatch(directorAll());
                return res.data;
            }
        })
    }
}