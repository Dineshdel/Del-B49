import React, { Component }from 'react'

export class Index extends Component {
   constructor () {
    super();
    this.state ={
        items: 0,
    }
    console.log("Constructor Called...");
}

componentDidMount()
{
    console.log("Component did mount called..")
}

componentDidUpdate() {
    console.log(" Compont did update called..")
}

componentWillUnmount() {
    console.log("The component is going to be unmounted..")
}

handleButtonClick = () => {
    this.setState ({this: this.state.items + 1});
}
  render() {
    console.log("Render called...")
  
  return (
    <>
     <div>Index</div>
     <p>iteam: {this.state.item}</p>
     <button onClick={this.handleButtonClick}>Click here</button>
    </>
   
  )
  }
}

export default Index