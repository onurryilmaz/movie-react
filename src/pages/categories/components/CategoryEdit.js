import React, { useState, useEffect } from 'react';

import { categoryPut } from '../api/action'
import {useDispatch, useSelector} from 'react-redux'

//LOADER
import { HashLoader } from "react-spinners";

//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//MODAL
import DeleteModal from './modal/delete'
import AddCategory from './modal/add'

const CategoryEdit = ({categoryDetail, categoryAll}) => {
    const dispatch = useDispatch();
    const categoryEdit = useSelector( state => state.category.categoryPut);

    const category = categoryDetail.data[0];

    const [value, setValue] = useState({
        ...category,
    })

    useEffect(() => {
        setValue({
            ...category,
        })
    }, [category]);                    

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        dispatch(categoryPut(value))
    }
    return (
        <>
            <div className='button-group'>
                <AddCategory 
                    categoryAll = {categoryAll}
                    buttonText='Yeni Kategori Ekle'/>

                { categoryDetail.data.length > 0 && 
                    <AddCategory 
                        categoryAll={categoryAll} 
                        parentCat={value.category_id} 
                        buttonText='Alt Kategori Gir'
                    />
                }
            </div>

            <Row> 
                <Col md={12}>
                    <HashLoader size={"20px"} color={"#65b9cc"} loading={categoryDetail.loading} />
                </Col>
            </Row>

            {categoryDetail.data.length > 0 && !categoryEdit.loading && 
            <Row>
                <Col md={12}>
                    {/* EDIT LOADER */}
                    <HashLoader size={"20px"} color={"#65b9cc"} loading={categoryEdit.loading} />
                    <Form>
                        <Form.Group>
                            {/* CATEGORY ALL */}
                            <HashLoader size={"20px"} color={"#65b9cc"} loading={categoryAll.loading} />

                            <Form.Label>Üst Kategori Değiştir</Form.Label>
                            <Form.Control 
                                as="select" 
                                name='category_sub_number' 
                                value = {category.category_sub_number}
                                onChange = {handleChange}>

                                <option value = '0'>Ana Kategori</option>
                                {categoryAll.data.map((item) => {
                                    return(
                                        <option key={item._id} value={item.category_id}> {item.category_name} </option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Kategori Adı Giriniz</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={value.category_name || ''} 
                                name = 'category_name' 
                                onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kategori Açıklaması Giriniz</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows="3" 
                                name = 'category_description'
                                value={value.category_description || ''}
                                onChange={handleChange} />
                        </Form.Group>

                        <div className='button-group'>
                            <Button variant="success" onClick={handleSubmit}>Kaydet</Button>

                            <DeleteModal name = {category.category_name} id={category._id}/>
                        </div>
                    </Form>
                </Col>
            </Row>
            }
        </>
    );
}

export default CategoryEdit;
