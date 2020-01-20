import rootReducer from './rootReducer'
//Redux store oluşturuyoruz
import { createStore, applyMiddleware } from 'redux'
//redux-promise-middleware hataları otomatik oluştumak için kullanıyoruz.(PENDING, FULFILLED, REJECTED)
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
//Bir action dispatch olduğunda bunu konsolda görmek için redux logger ı ekliyoruz
import logger from 'redux-logger'

export default createStore(
    rootReducer,
    applyMiddleware(promise, thunk, logger)
)