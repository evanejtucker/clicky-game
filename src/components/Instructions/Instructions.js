import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron >
            <h3 className="instructions">Click as many images as you can without repeating</h3>
        </Jumbotron>
    </div>
);

export default Instructions;