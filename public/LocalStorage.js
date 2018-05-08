import {Repository} from "./Repository.js"
class LocalStorage{
    constructor(){

    }
}

var STORAGE_ID = 'WEATHER';

LocalStorage.save = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(Repository.posts));
  } 

LocalStorage.get = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  }

  export { LocalStorage };

  