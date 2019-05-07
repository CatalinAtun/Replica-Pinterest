import React, { Component } from 'react';
import "./Images.css"
import "../Grid.css"

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            charge: false
        }
    }

    componentDidMount() {
        fetch("https://api.unsplash.com/search/photos?page=1&per_page=100&query=cats&client_id=7bcae6bf47cd6f664f54e9bff5508dfcabcb5cfe40c52b2ae6ebaa512471ad8f")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    images: json.results
                })
            });
    }

    componentWillUpdate() {
        if(this.props.componentUpdate !== this.state.charge){
            this.setState({
                ...this.state,
                charge: true
            })
            fetch("https://api.unsplash.com/search/photos?page=2&per_page=100&query=cats&client_id=7bcae6bf47cd6f664f54e9bff5508dfcabcb5cfe40c52b2ae6ebaa512471ad8f")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    charge: true,
                    images: this.state.images.concat(json.results)
                })
            });
        }
    }

    render() {
        const img = this.state.images.map(item => {
            return <img className="cards" src={item.urls.small} alt="" key={item.id} onClick={()=>this.props.modalOpen(item.urls.small)} />
        })

        return (
            <div className="cardsDiv">
                {img}
            </div>
        )
    }
}

export default Images;
