import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const deleteHandler = () => {
    setmodalIsOpen(true);
  };

  const cancelHandler = () => {
      setmodalIsOpen(false);
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Conditional Rendering: if true show modal else show nothing */}
      {modalIsOpen && <Modal onCancel={cancelHandler} onConfirm={cancelHandler}/> } 
      {modalIsOpen && <Backdrop onCancel= {cancelHandler}/>}
    </div>
  );
}

export default Todo;
