

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header.js'
Enzyme.configure({adapter: new Adapter()})




describe("When Header renders", ()=> {

    let renderedHeader; 

    beforeEach(()=>{
      renderedHeader = shallow(<Header />);
    });

    it("provides a route of '/' to the home component", ()=>{
        
        const renderedHomeRoute = renderedHeader.find("[href='/']");
        expect(renderedHomeRoute.length).toEqual(2);
    })

    it("provides a route of '/BigCatShow' to the home component", ()=>{
        
        const renderedCatShowRoute = renderedHeader.find("[href='/bigcatshow']");
        expect(renderedCatShowRoute.length).toEqual(1);
    })

    it("provides a route of '/BigCatNew' to the home component", ()=>{
        
        const renderedCatNewRoute = renderedHeader.find("[href='/bigcatnew']");
        expect(renderedCatNewRoute.length).toEqual(1);
    })

    it("renders gif image in header", ()=>{
        const renderedHeaderImg = renderedHeader.find("img")

        expect(renderedHeaderImg.length).toEqual(1)
    })

    it("Has className header-container", ()=>{
        const renderedHeaderClass = renderedHeader.find('.header-container')
        expect(renderedHeaderClass.length).toEqual(1)
    })
    it("Has className roaring-lions-header", ()=>{
        const renderedHeaderClass = renderedHeader.find('.roaring-lions-header')
        expect(renderedHeaderClass.length).toEqual(1)
    })
    
})