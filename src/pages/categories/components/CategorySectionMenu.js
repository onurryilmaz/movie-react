import React, { useRef, useEffect} from 'react'

//LOADER
import { HashLoader } from "react-spinners";

//COMPONENT
import InlineError from '../../partials/InlineError'

//BOOTSTRAP
import Form from 'react-bootstrap/Form'

//Sub Category
let subCategory = (item, category, changeCategory) => {
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
        subCat.push(
            <div className='click-button' key={item.category_name}>
            </div>,
            <ul key={item._id}> 
                {/* nested */}
                {nested(category, item.category_id, changeCategory)}
            </ul>
        )
    }
    return subCat;
}
//Category
function nested(data, startId, changeCategory) {
    let category = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i].category_sub_number === startId) {
            category.push(<li key={data[i]._id}>
                <Form.Check
                        type="radio"
                        label={`${data[i].category_name} `}
                        name="category"
                        id= {`${data[i]._id} `}
                        onChange = {changeCategory}
                    />
                    
                {/* Sub Category */}
               { subCategory(data[i], data, changeCategory) }
            </li>)
        };
    }
    return category;
}

function TreeMenu(ref) {
    const subCatClick = (ref) => {
        const liTag = [...ref.current.querySelectorAll('li')]
        const subCat = []

        liTag.map( (item) => {
            if(item.querySelector('ul')) {
                item.classList.add('sub-cat');
                subCat.push(item);
            }
            return subCat;
        })
        
        subCat.map((item) => {
            item.getElementsByClassName('click-button')[0].addEventListener('click', (event) => {                
                item.className.indexOf('active') > 0 ? item.classList.remove('active') : item.classList.add('active');
                event.preventDefault()

            });
            return false;
        })
       
    }

    useEffect(() => {
      subCatClick(ref)
    });
}

const CategorySection = ( {changeCategory, categoryAll}) => {
    
    const wrapperRef = useRef(null);
    TreeMenu(wrapperRef);

    return (
        <Form.Group className="category-settings" ref = {wrapperRef}> 
            <ul>
                {categoryAll.error.config && <InlineError class={'alert-text danger'} message = { 'Ketegorilere Erişilemiyor' } />}
                <HashLoader size={"20px"} color={"#65b9cc"} loading={categoryAll.loading} />
                { categoryAll && [ nested( categoryAll.data, 0, changeCategory) ] }
            </ul>
        </Form.Group> 
    )
}

export default CategorySection;
