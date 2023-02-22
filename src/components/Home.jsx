import React from "react";
import data from "../api/data";
import Card from './Card';

const Home = () => {
    return (
        <div className="home-container">
            <div className="py-4 container">
                <div className="row justify-content-center align-item-center">
                    {data.cardData.map(item => {
                        return <Card key={item.id} item={item} />
                    })}
                </div>
            </div>
        </div >
    )
}

export default Home;