import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron style={{'background-image': `url("/assets/images/checkered-flag.svg")`}} >
            <h3 className="instructions">{props.message}</h3>
        </Jumbotron>
    </div>
);

export default Instructions;