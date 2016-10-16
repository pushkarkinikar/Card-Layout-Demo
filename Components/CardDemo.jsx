import React from 'react';
import ReactDOM from 'react-dom';
import CardLayout from './Card/cardLayout.jsx';
require('./CardDemo.css');

class World extends React.Component {
  render() {
    let egyptObj={
      title: 'Pyramid',
      text: 'Pyramids were made in Egypt at Giza dring 2572 BC to 2150 BC.',
      image: './Images/pyramid.jpg',
    }
    let indiaObj={
      title: 'Taj Mahal',
      text: 'Taj Mahal was created by King Shahajahan dring the year 1632 to 1653.',
      image: './Images/taj.jpg',
    }
    let chinaObj={
      title: 'The Great Wall',
      text: 'The Great Wall was built in China to protect its border during war (475 BC to 221 BC).',
      image: './Images/wall.jpg',
    }
    let parisObj={
      title: 'Eiffel tower',
      text: 'Eiffel tower was constructed in Paris around the year 1887-1889 as entrance to the world\'s fair.',
      image: './Images/tower.jpg',
    }
    return (
      <div className='pageContainer'>
        <div className='pageHeading'>
          <span className='title'>Mega structures</span>
        </div>
        <div className='continer'>
          <div className='row'>
            <div className="col-lg-3 col-xs-12 col-md-6">
              <CardLayout description = {egyptObj}/>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-6 ">
              <CardLayout description = {indiaObj}/>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-6 ">
              <CardLayout description = {chinaObj}/>
            </div>
            <div className="col-lg-3  col-xs-12 col-md-6 ">
              <CardLayout description = {parisObj}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<World />, document.getElementById('world'));