import {WorldCities} from '../data/WorldCities'

export const CityExist = (city) => {
    if(WorldCities.find(element => element.name.toLowerCase() === city.toLowerCase()) !== undefined){
        return true
    }
    return false
}