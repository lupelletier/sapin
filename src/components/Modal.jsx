import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import Cookie from './Cookie';
import '../style.css';

export default function ModalCookie() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <button className='config-button' onClick={() => setModalIsOpen(true)}>Configuration</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div>
                    <Cookie />
                </div>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}