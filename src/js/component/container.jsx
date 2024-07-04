import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Container = () => {
    return (
        <div className="container mb-2">
            <Jumbotron />
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Container;