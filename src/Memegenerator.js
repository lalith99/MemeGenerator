import React, {Component} from "react"

class Memegenerator extends Component {
constructor(){
    super()
    this.state ={
        topText: " ",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
        allMemeImages :[]
    }
}
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response =>{
        const {memes} = response.data
        this.setState({allMemeImages:memes})
    
     })
}


render(){
    return(
        <div>
            <form className = "meme-form">

             <input type = "text"
              name = "toptext"
              value = {this.state.bottomText}
              onChange = {this.handleChange.topText}
              placeholder = "Top Text"
              />

              <input type = "text"
              name = "bottomtext"
              value = {this.state.bottomText}
              onChange = {this.handleChange.bottomText}
              placeholder = "Bottom text"
              />

            

            </form>

            <button> Generate!</button>
        </div>
    )
}
}
export default Memegenerator