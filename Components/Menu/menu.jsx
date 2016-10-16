import React from 'react';
import ReactDOM from 'react-dom';
require('./menu.css');

export default class Menu extends React.Component {

    deleteHandler (){
        alert('delete clicked')
    }
    printHandler (){
        alert('Print clicked')
    }
    openHandler (){
        alert('Open clicked')
    }
    
    render() {
        
        return (
            <div className='container'>
                <span className='icons'>
                    <span className='content'>
                        <img src="./Images/open.png" onClick={this.openHandler}></img>
                    </span>
                    <span className='content'>
                        <img className='centerIcon' src="./Images/delete.png" onClick={this.deleteHandler}></img>
                    </span>
                    <span className='content'>
                        <img src="./Images/print.png" onClick={this.printHandler}></img>
                    </span>
                 </span>


            </div>
        );
    }
}











