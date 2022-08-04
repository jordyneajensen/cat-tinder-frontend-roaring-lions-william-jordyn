import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
        <h3>What is Roaring Lions?</h3>
        
        <p>Roaring Lions was born from William and Jordyn's passion for big kitty love. We decided to use our software developer skills to build out a full-stack application that encourages conservation efforts for these majestic beauties. From fun age to image to personality, you can interact with these big beautiful cats in a fun interactive application and even add your own big kitty to the collection.</p>

        <h3>Future Implementation?</h3>
        <p>Our hope is that conservationists and zoos around the world would be interested in using our application as an interactive education tool with qr-code integration to learn more about individual animals in an area with their unique personality and potentially even integrate in a way that can be used to continue diverse bloodlines within species to promote conservation globally. Please consider learning more at: website</p>
        <div>
            <image></image>
            <p>About William: github, linkedin</p>
            <image></image>
            <p>About Jordyn: github, linkedin</p>
        </div>
      </>
    )
  }
}

export default About