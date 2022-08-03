import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", ()=> {

    let renderedHome; 

    beforeEach(()=>{
      renderedHome = shallow(<Home />);
    });

    it("has an header containing text", ()=>{
        const homeHeading = renderedHome.find("h2").text()
        expect(homeHeading).toEqual("Find Your Pawwfect Mate")
    })
    
})