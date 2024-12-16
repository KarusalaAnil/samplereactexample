import { useState } from "react";
import ReactDOM from 'react-dom'

function Modal(props) {
    return (
        ReactDOM.createPortal(
            <div className="modal">
                <div className="container">
                    <h3>Modal Heading</h3>
                    <p>Lean more about modal component, to open check the modal status thank you</p>

                    <button onClick={props.close}>Close</button>

                </div>



            </div>, document.body
        )

    )
}


function ModalEx() {
    const [modalFlag, setModalFlag] = useState(false)

    function toggleModal() {
        setModalFlag(!modalFlag);
    }
    return (
        <div className="app">
            <h2>This is Parent component calling modal popup</h2>

            <button onClick={toggleModal}>Open</button>
            {
                modalFlag == true && <Modal close={toggleModal} ></Modal>
            }

        </div>
    )
}

export default ModalEx;