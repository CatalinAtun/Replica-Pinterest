import React, { Component } from 'react';
import Images from './components/Images.js'
import './App.css';
import './Grid.css'
import image from "./logo.png";
import Modal from './components/Modal.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCommentDots, faBell, faEllipsisH, faCopyright, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faCommentDots, faBell, faEllipsisH, faCopyright, faSearch)

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      px: false
    }
    this.showModal = this.showModal.bind(this);
    this.modalCloseApp = this.modalCloseApp.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo() {
    if (document.documentElement.scrollTop > 640){
      this.setState({
        ...this.state,
        px: true
    }) 
    }
  }

  componentDidMount(){
    window.onscroll = ()=>this.scrollTo()
  }

  showModal(item) {
    this.setState({
      show: item
    });
  }

  modalCloseApp() {
    this.setState({
        show: false
    });
  }

  render() {
    return (
      <div> 
      <div className="navDiv"> 
        <img className="logo" src={image} alt="a"></img>
        <input placeholder="           Buscar"></input>
        <button><p>Inicio</p></button>
        <button><p className="icon">Siguiendo</p></button>
        <button><p>Catalina</p></button>
        <button><p className="icon"><FontAwesomeIcon icon="comment-dots" /></p></button>
        <button><p className="icon"><FontAwesomeIcon icon="bell" /></p></button>
        <button><p className="icon"><FontAwesomeIcon icon="ellipsis-h" /></p></button>
      </div>
      <div> 
        <Images className="images" modalOpen={this.showModal} componentUpdate={this.state.px} />
        <Modal show={this.state.show} close={this.modalCloseApp} showImg={this.state.show} />
      </div>
      </div>
    )
  }
}

export default App;
