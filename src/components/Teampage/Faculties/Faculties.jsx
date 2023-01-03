import React, { useState } from 'react'
import './Faculties.css'
// import Data from '../../Faculties.json';
import Data from '../../../Data/Faculties.json'
import ModalCard from '../Alumni/Modal/ModalCard';
import { Modal, ModalBody, ModalHeader } from "reactstrap"
function Faculties() {
    const [modal, setmodal] = useState(false)
    return (
        <>
            <section className="faculties">
                <div className="cards">
                    {
                        Data.map(data => {
                            return (<div className="profile" onClick={() => setmodal(true)}>
                                <div className="img" key={data.id}><img src={data.image} alt="Profile of author" /></div>
                                <div className="name">{data.name}</div>
                                <div className="name1">{data.rank}</div>
                            </div>

                            )
                        })
                    }
                </div>
                <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>
                    <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>
                    <ModalBody>
                        <ModalCard />
                    </ModalBody>
                </Modal>
            </section>
        </>
    )
}

export default Faculties
