import React, {Component} from "react";
import FlipMove from "react-flip-move";


class OkumaListemItems extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this);
    }


    createTasks(item){
        return<li onClick={()=>this.delete(item.key)}
                  key={item.key}>{item.text}</li>

    }

    delete(key){
        console.log("Tuş: "+ key); //Hata ilgili bir satır.
        this.props.delete(key);
    }

    render(){
        var okumaEntries= this.props.entries;
        var listemItems= okumaEntries.map(this.createTasks);
        
        return(
            <ul className="okumaListem">
            <FlipMove duration={250} easing="ease-out">
             {listemItems}
             </FlipMove>
            </ul>
        );
    }
}
export default OkumaListemItems;