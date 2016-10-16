import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../Menu/menu.jsx';
require('./cardLayout.css');

export default class CardLayout extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <div className="card card-inverse text-center" >

                <div className='cardLayout'>
                    <img className="card-img imageContainer" src={this.props.description.image} alt="wall" />
                    <div className="card-img-overlay">
                        <div>
                            <span className='titleIcon'>
                                <img src="./Images/civil_icon.png" onClick={this.openHandler}></img>
                            </span>
                            <span>
                                <h4 className="card-title">{this.props.description.title}</h4>
                            </span>
                        </div>
                        <div>
                            <p className="card-text">{this.props.description.text}</p>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        );
    }
}