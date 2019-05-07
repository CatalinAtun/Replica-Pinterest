import React from 'react';
import "./Modal.css"
import "../Grid.css"

function Modal  (props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
            <img className="imgModal" src={props.showImg.toString()} alt="a"/>
            <button className="threeDots">...</button>
            <div className="buttonsModal">
                <button className="send">Enviar</button>
                <button className="save">Guardar</button>
            </div>
            </section>
            <button className="closeBtn" onClick={props.close}> X </button>
        </div>
    )
}

export default Modal;