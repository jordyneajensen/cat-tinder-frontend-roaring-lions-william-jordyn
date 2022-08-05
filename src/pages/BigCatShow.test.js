import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BigCatShow from './BigCatShow'

Enzyme.configure({adapter: new Adapter()})

describe("When BigCatShow renders", () => {
    const cat = {
                id: 1,
                name: "Fluffy",
                age: 4,
                enjoys: "Long walks in the jungle",
                funFact:"Does a really good mufasa impression.",
                image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
              }
    
    let renderedBigCatShow;

    beforeEach(() => {
      renderedBigCatShow = shallow(<BigCatShow cat={cat} />);
    });

    it("displays a profile for the cat", () => {
        const bigCatShowCard = renderedBigCatShow.find("Card")
        expect(bigCatShowCard.length).toEqual(1)
    })
})