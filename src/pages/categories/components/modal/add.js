import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'

//ACTION
import {categoryPost} from '../../api/action'

//LOADER
import { HashLoader } from "react-spinners";

//BOOTSTRAP
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//ToastContainer
import { toast } from "react-toastify";

function AddCategory({categoryAll, parentCat, buttonText}) {
    const dispatch = useDispatch();

    //STATE
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
            category_sub_number : 0,
            category_name : "",
            category_description : "",
        }
    )
    useEffect(() => {
      setValue({
        category_sub_number : parentCat ? parentCat : 0,
      })
    }, [parentCat])
    
    //EVENT
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value,

        })
    }
    const handleSubmit = (data) => {      
      if(data.category_name){
        dispatch(categoryPost(data))
        handleClose()

      } else {
        toast.error(`Kategori Adı Girmek Zorundasınız`);

      }

    } 
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          {buttonText === 'Alt Kategori Gir' ? 
            <i className="fal fa-layer-plus"></i> : 
            <i className="fal fa-plus"></i>
          }
          {buttonText}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{buttonText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                {parentCat === undefined &&
                <Form.Group>
                    {/* CATEGORY ALL */}
                    <HashLoader size={"20px"} color={"#65b9cc"} loading={categoryAll.loading} />

                    <Form.Label>Üst Kategori Seç</Form.Label>
                    <Form.Control 
                        as="select" 
                        name='category_sub_number' 
                        onChange = {handleChange}>

                        <option value = '0'>Ana Kategori</option>
                        {categoryAll.data.map((item) => {
                            return(
                                <option key={item._id} value={item.category_id}> {item.category_name} </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                }
                <Form.Group>
                    <Form.Label>Kategori Adı Giriniz</Form.Label>
                    <Form.Control 
                        type="text" 
                        name = 'category_name' 
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Kategori Açıklaması Giriniz</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name = 'category_description'
                        onChange={handleChange} />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button variant="success" onClick={() => handleSubmit(value)}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddCategory;