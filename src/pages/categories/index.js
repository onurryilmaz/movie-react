import React from 'react';
import CategoryDetail  from './components/CategoryDetail'

const Category = ({match}) => {
    return (
        <div>
           <CategoryDetail id={match.params.id}/>
        </div>
    );
}

export default Category;
