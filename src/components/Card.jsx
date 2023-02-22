import React, { useState } from "react";
import Model from './Model'
import '../styles/card.css';
import { Button } from "react-bootstrap";

const Card = ({ item }) => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});

    const getData = (item) => {
        setData(item);
        setModal(!modal);
    }

    const handleModal = () => setModal(!modal);

    const showDetails = (item) => {
        getData(item);
        handleModal();
    }

    return (
        <section className="col-3">
            <div className="card p-0 card-item">
                <img src={item.imgURL} alt={item.title} className="card-img-top card-img" />
                <div className="card-body">
                    <h4 className="card-title mb-3">{item.title}</h4>
                    <p className="card-text">{item.desc}</p>
                    <hr />
                    <Button
                        type='button'
                        variant="primary"
                        className="btn btn-primary w-100 d-block"
                        onClick={() => showDetails(item)}>

                        Details
                    </Button>
                </div>
            </div>

            {modal && <Model handleModal={handleModal} show={modal} data={data} />}
        </section>
    )
}

export default Card;