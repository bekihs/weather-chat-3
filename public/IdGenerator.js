
//static varianles
//static function
class IdGenerator{
    constructor() {
        
    }
    
}

IdGenerator.id = 0;
IdGenerator.getNewId = function(){
    IdGenerator.id++
    return IdGenerator.id
}

export { IdGenerator };