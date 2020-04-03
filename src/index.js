import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OkumaListem from "./OkumaListem";




var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <br></br>
        <OkumaListem/>
        <h5>Haydi Listemize birşeyler ekleyelim.</h5>
    </div>,
    destination
    
)