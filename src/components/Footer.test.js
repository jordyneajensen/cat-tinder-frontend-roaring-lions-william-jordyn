import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders",()=>{
    let renderedFooter; 

    beforeEach(()=>{
      renderedFooter = shallow(<Footer />);
    });

    it("It displays div tag with text", ()=>{
        const renderedFooterPatent = renderedFooter.find("p").text()
        expect(renderedFooterPatent).toEqual("© 2022 Coded by Big Cat Enthusiasts: Jordyn and William")
    })

})