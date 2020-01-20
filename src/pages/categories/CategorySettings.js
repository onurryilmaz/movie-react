import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

//COMPONENTS
import CategorySection from './components/CategorySectionMenu'
import CategoryEdit from './components/CategoryEdit'
//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//API
import {categoryGet} from './api/action'

const CategorySettings = () => {
    const dispatch = useDispatch();
    const categoryAll = useSelector(state => state.category.categoryAll)
    const categoryDetail = useSelector(state => state.category.categoryGet)
    //Change Form
    const changeCategory = (e) => {
        dispatch(categoryGet(e.target.id));
    }
    return (
        <Row>
            <Col md={4}>
                <CategorySection changeCategory = {changeCategory} categoryAll = {categoryAll}/>
            </Col>
            <Col md={8}>
                <CategoryEdit categoryDetail = {categoryDetail} categoryAll = {categoryAll}/>
            </Col>
        </Row>
    );
}

export default CategorySettings;
