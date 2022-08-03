import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound.js'
Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", ()=>{

    let renderedNotFound; 

    beforeEach(()=>{
      renderedNotFound = shallow(<NotFound />);
    });

    it("It has an image", ()=>{
        const renderedNotFoundImage = renderedNotFound.find("img")
        expect(renderedNotFoundImage.length).toEqual(1)
    })
})