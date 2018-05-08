import {IdGenerator} from "./IdGenerator.js";


class Post {
    constructor(data, city) {
        let condition = data.query.results.channel.item.condition;

        this.city = city;
        this.temprature = condition.temp;
        this.date = condition.date;
        this.comments = [];
        this.id = IdGenerator.getNewId();
    }
}

export {Post};