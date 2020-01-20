import React from 'react';
import moment from 'moment'
//Components
import Edit from './modal/edit'
import Add from './modal/add'
import Delete from './modal/delete'
//Bootstrap
import Table from 'react-bootstrap/Table'

const DirectorList = ({editPageState}) => {
    const allDirectors = editPageState.allDirectors.data;

    return (
        <div>
            <div className='button-group'>
                <Add handleSave = {editPageState.handleSave}/>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>Yaşı</th>
                        <th>Puanı</th>
                        <th>Biyografi</th>
                        <th>Düzenle</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>
                    {allDirectors.map((item, index) => {
                        return(
                            <tr key={item._id}>
                                <td>{index}</td>
                                <td>{item.director_name}</td>
                                <td>{item.director_surname}</td>
                                <td>
                                    {
                                        item.director_age ?
                                        moment(item.director_age).format("L") :
                                        '-----------'
                                    }
                                </td>
                                <td>{item.director_rate}</td>
                                <td>{item.director_biography}</td>
                                <td><Edit editPageState = {editPageState} id = {item._id}/></td>
                                <td><Delete id = {item._id} name = {item.director_name} handleDelete = {editPageState.handleDelete}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default DirectorList;
