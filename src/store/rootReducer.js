//Tüm reducer larımızı burada combine(birleştirme) edeceğimiz için combineReducers ımızı aldık 
import { combineReducers } from 'redux'

//Hangi reducer ımızı combine edeceksek buraya giriyoruz.
import category from '../pages/categories/api/reducer'
import director from '../pages/director/api/reducer'
import movies from '../pages/movies/api/reducer'


export default combineReducers({
    category,
    director,
    movies,
});