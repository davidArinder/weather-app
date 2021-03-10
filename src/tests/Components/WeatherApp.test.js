import React from "react";
import { shallow } from "enzyme";
import WeatherAppRender from "../../Components/WeatherAppRender";
import singleDayData from "./singleDayData";
import "../setupTests";

test("should render WeatherAppRender with singleDayData", () => {
  const wrapper = shallow(<WeatherAppRender weatherDetails={singleDayData} />);
  expect(wrapper).toMatchSnapshot();
});
