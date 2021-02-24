import React from "react";
import { mount } from "enzyme";
import PriceForm from "../../components/PriceForm";
import { testItems } from "../../testData";

let props = {
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
};

let props_with_item = {
  item: testItems[0],
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
};

let wrapper, formInstance, wrapper2;

export const getInputValue = (selector, wrapper) =>
  wrapper.find(selector).instance().value;

export const setInputValue = (selector, wrapper, newValue) => {
  wrapper.find(selector).instance().newValue;
};

describe("test PriceFrom component", () => {
  beforeEach(() => {
    wrapper = mount(<PriceForm {...props} />);
    wrapper2 = mount(<PriceForm {...props_with_item} />);
    formInstance = wrapper.find(PriceForm).instance();
  });
  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchInlineSnapshot(`ReactWrapper {}`);
  });
  describe("test PriceFrom with no item", () => {
    it("render PriceForm should gernerate three inputs and one form element", () => {
      expect(wrapper.find("input").length).toEqual(3);
      expect(wrapper.find("form").length).toEqual(1);
      expect(wrapper.find("button").length).toEqual(2); // how many button dom it shows.
    });
    it("render PriceForm with no data should render three inputs and no value", () => {
        expect(getInputValue('#title', wrapper)).toEqual('') // # is for Id
        expect(getInputValue('#price', wrapper)).toEqual('')
        expect(getInputValue('#date', wrapper)).toEqual('')
    });
    it('submit form with empty input should show alert message', () => {
        wrapper.find('form').simulate('submit')
        expect(formInstance.state.validatePass).toEqual(false)
        expect(wrapper.find('.alert').length).toEqual(1)
        expect(props_with_item.onFormSubmit).not.toHaveBeenCalled()
    })

  });
});
