import React from "react";
import { shallow } from "enzyme";
import FiveDayForecastRender from "../../Components/FiveDayForecastRender";
import fiveDayData from "./fiveDayData";
import "../setupTests";

test("should render FiveDayForecastRender with fiveDayData", () => {
  const wrapper = shallow(
    <FiveDayForecastRender weatherDetails={fiveDayData.weatherDetails} />
  );
  expect(wrapper).toMatchSnapshot();
});
