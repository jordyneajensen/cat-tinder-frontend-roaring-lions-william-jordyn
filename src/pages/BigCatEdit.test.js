import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BigCatEdit from './BigCatEdit'

Enzyme.configure({adapter: new Adapter()})


describe("When BigCatEdit renders", ()=> {
    it("displays a form", ()=> {
     const bigCatEdit = shallow(<BigCatEdit />)

     const formGroup = bigCatEdit.find("FormGroup")
     expect(formGroup.length).toEqual(4)

     const formLabel = bigCatEdit.find("Label")
     expect(formLabel.length).toEqual(4)

     const formInput = bigCatEdit.find("Input")
     expect(formInput.length).toEqual(4)

    })
})    