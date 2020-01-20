import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//HOOK
import {useDispatch, useSelector} from 'react-redux'

//APP
import { categoryAll } from '../api/action'

//LOADER
import { HashLoader } from "react-spinners";

//COMPONENT
import InlineError from '../../partials/InlineError'

//Sub Category
let subCategory = (item, category) => {
    let subCat = [];
    let controler = false;
    // Sub Category Control
    for(let x = 0; x < category.length; x++) {
        if(item.category_id === category[x].category_sub_number) {
            controler = true;
            break;
        }
    }

    //Sub Category Push
    if(controler) {
        subCat.push(<ul key={item._id}>
                        {/* nested */}
                        {nested(category, item.category_id)}
                    </ul>)
    }
    return subCat;
}
//Category
function nested(data, startId, categoryClick) {
    let category = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i].category_sub_number === startId) {
            category.push(<li key={data[i]._id}>
                <NavLink 
                    to={`/category/${data[i]._id}`}
                    activeClassName="activelink" 
                    category_sub_number = {`${data[i].category_sub_number}`}
                    onClick = {categoryClick}
                    exact 
                    >

                    {`${data[i].category_name} `}

                </NavLink>
                {/* Sub Category */}
               { subCategory(data[i], data) }
            </li>)
        };
    }
    return category;
}


const Category = () => {
    const dispatch = useDispatch();
    const category = useSelector( state => state.category.categoryAll)

    useEffect(() => {
        dispatch(categoryAll());
    }, [dispatch]);

    return (
        <nav>
            <ul>
                {category.error.config && <InlineError class={'alert-text danger'} message = { 'Ketegorilere Erişilemiyor' } />}

                <HashLoader size={"20px"} color={"#65b9cc"} loading={category.loading} />

                { category && [ nested( category.data, 0 ) ] }
            </ul>
        </nav>
    )
}

export default Category;