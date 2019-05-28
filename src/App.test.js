import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import buildingList from './Data/buildingtest.json'
import buildingListResult from './Data/buildingtest_result.json'
const cheapestRoom = require("./Components/buildingList")

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("result returns value", () => {
  expect(cheapestRoom).not.toBe(null)
  expect(cheapestRoom).not.toBe([])
});

it("result returns same numbers of building as the input building numbers", () => {
  expect(cheapestRoom.length).toBe(buildingList.length)
});

it("result is equal to the buildingtest_result.json", () => {
  expect(cheapestRoom).toEqual(buildingListResult)
})
