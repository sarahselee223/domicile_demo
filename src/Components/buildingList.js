import buildingList from '../Data/buildingtest.json'

//  * Get the cheapest rooms of each room type for each building.
//  *
//  * @param {array} buildingList - An array of building objects
//  * @return {array} array of building objects containing only the cheapest room of each type of room.

function getCheapestRooms() {
	return buildingList.map(building => getBuildingMap(Object.keys(building), Object.values(building)))
}

function getBuildingMap([buildingName], [rooms]) {
	const roomTypeToCheapestRoomMap = {}
	for(let room of rooms){
  	if(!roomTypeToCheapestRoomMap[room.roomtype]) {
        roomTypeToCheapestRoomMap[room.roomtype] = room
  	} else {
  	  if(roomTypeToCheapestRoomMap[room.roomtype].price > room.price){
        roomTypeToCheapestRoomMap[room.roomtype] = room
  	  }
  	} 
  } 
  return { [buildingName]: Object.values(roomTypeToCheapestRoomMap) }
}

const cheapestRoom = getCheapestRooms()

module.exports = cheapestRoom