/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import buildingList from './Data/buildingtest.json'
import buildingListResult from './Data/buildingtest_result.json'
import { getCheapestRooms } from './getCheapestRooms'

it('result returns a value', () => {
  const cheapestRoom = getCheapestRooms(buildingList)
  expect(cheapestRoom).not.toBe(null)
})

it('result returns an empty array if the param is empty array', () => {
  const cheapestRoom = getCheapestRooms([])
  expect(cheapestRoom).toEqual([])
})

it('result returns same number of buildings as the input building numbers', () => {
  const cheapestRoom = getCheapestRooms(buildingList)
  expect(cheapestRoom.length).toBe(buildingList.length)
})

it('result is equal to the buildingtest_result.json', () => {
  const cheapestRoom = getCheapestRooms(buildingList)
  expect(cheapestRoom).toEqual(buildingListResult)
})

it('return the first unit if there are same priced unit', () => {
  const buildingListSamePrice = [{ 'marina': [{ 'name': 'unit1', 'roomtype': 'studio', 'price': 100 }, { 'name': 'unit2', 'roomtype': 'studio', 'price': 100 }] }]
  const cheapestRoom = getCheapestRooms(buildingListSamePrice)
  expect(cheapestRoom).toEqual([{ 'marina': [{ 'name': 'unit1', 'roomtype': 'studio', 'price': 100 }] }])
})
