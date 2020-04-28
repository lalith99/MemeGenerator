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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response =>{
        const {memes} = response.data
        this.setState({allMemeImages:memes})
    
     })
}
handleSubmit(event){
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
    const randMemeImg = this.state.allMemeImages[randNum].url
    this.setState({
        randomImage:randMemeImg
    })

}

handleChange(event){

    const {name , value} = event.target
    this.setState({ [name] :value

    })


}
render(){
    return(
        <div>
            <form className = "meme-form" onSubmit = {this.handleSubmit}>

             <input type = "text"
              name = "topText"
              value = {this.state.topText}
              onChange = {this.handleChange}
              placeholder = "Top Text"
              />

              <input type = "text"
              name = "bottomText"
              value = {this.state.bottomText}
              onChange = {this.handleChange}
              placeholder = "Bottom text"
              />
              <button > Generate!</button>

            

            </form>
             <div className = "meme">
             <img src={this.state.randomImage} alt="" />
<h2 className = "top"> {this.state.topText}</h2>
<h2 className = "bottom"> {this.state.bottomText}</h2>
             </div>
            
        </div>
    )
}
}
export default Memegenerator