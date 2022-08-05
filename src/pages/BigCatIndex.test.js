import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BigCatIndex from './BigCatIndex'
Enzyme.configure({ adapter: new Adapter() })

describe("When the BigCatIndex renders", () => {
  const props = {
    cats: [
      {
        id: 1,
        name: "Fluffy",
        age: 4,
        enjoys: "Long walks in the jungle",
        funFact:"Does a really good mufasa impression.",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
      }
    ]
  }
  let renderedBigCatIndex;

  beforeEach(() => {
    renderedBigCatIndex = shallow(<BigCatIndex {...props} />);
  }); 
  
  it("displays a cat", () => {
    const bigCatIndexCard = renderedBigCatIndex.find("Card")
    expect(bigCatIndexCard.length).toEqual(1)
  })
})