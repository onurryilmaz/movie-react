import MOVIEApi from "../../../store/api";

const nestedApi = async (data) => {
    const join = [];
    await Promise.all(data.map(async (item) => {
        const contents = await MOVIEApi.api.get(`/director/${item.director}`);
        join.push({
            ...item,
            joinData : contents.data,
        })
    }));
    return join;
}

//MOVIE ALL
export function moviesAll() {
    return dispatch => {
        dispatch({
            type: 'MOVIES_ALL',
            async payload () {
                const res = await MOVIEApi.api.get('/movie');
                return await nestedApi(res.data);
            }
        })
    }
}
//MOVIE GET
export function moviesGet(id) {
    return dispatch => {
        dispatch({
            type: 'MOVIES_GET',
            async payload () {
                const res = await MOVIEApi.api.get(`/movie/${id}`);
                return res.data;
            }
        })
    }
}
//MOVIE POST
export function moviesPost(data) {
    return dispatch => {
        dispatch({
            type: 'MOVIES_POST',
            async payload () {
                const res = await MOVIEApi.api.post('/movie', data);
                await dispatch(moviesAll())
                return res.data;
            }
        })
    }
}
//MOVIE DELETE
export function moviesDelete(id) {
    return dispatch => {
        dispatch({
            type: 'MOVIES_DELETE',
            async payload () {
                const res = await MOVIEApi.api.delete(`/movie/${id}`);
                await dispatch(moviesAll())
                return res.data;
            }
        })
    }
}
//MOVIE PUT
export function moviesPut(id, data) {
    console.log('id', id)
    console.log('data', data)
    return dispatch => {
        dispatch({
            type: 'MOVIES_PUT',
            async payload () {
                const res = await MOVIEApi.api.put(`/movie/${id}`, data);
                await dispatch(moviesAll())
                return res.data;
            }
        })
    }
}