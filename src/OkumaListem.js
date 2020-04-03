import React, {Component} from "react";
import OkumaListemItems from "./OkumaListemItems";
import "./OkumaListem.css";


class OkumaListem extends Component{
    constructor(props){
        super(props);

        this.state={
            items:[]
        };


        this.addItem = this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value!==""){
            var newItem={
                text: this._inputElement.value,
                key: Date.now()

            };

            this.setState((prevState)=>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });


        }

        this._inputElement.value="";
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key){
        console.log("Tuş:" + key); //Hata ile ilgili bir kod
        console.log("Silme İşlmei Sorunu:" + this.state.items);
        var filteredItems=this.state.items.filter(function(item){
            return(item.key !== key)

        });

        this.setState({
            items:filteredItems
        });
    }    




    render(){
        return(
            <div className="OkumaListemMain">
            <div className="header">
            <form onSubmit={this.addItem}> 
                <input ref={(a)=>this._inputElement=a} placeholder="Ekleme yapalım"></input>
                <button type="submit">Yeni Görev Ekle</button>

            </form>
            </div>
            <OkumaListemItems entries={this.state.items}
             delete={this.deleteItem}/>
            </div>
        )
    }
}

export default OkumaListem;