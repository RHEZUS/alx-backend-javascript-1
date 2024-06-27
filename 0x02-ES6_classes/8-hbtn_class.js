export default class HolbertonClass{
    constructor(size, location){
        this.size = size;
        this.location = location;
    }

    get size(){
        return this._size;
    }

    get location(){
        return this._location;
    }

    [Symbol.toPrimitive](hint){
        if (hint === 'number') return this._size;
        if (hint === 'string') return this._location;
        return this._location;
    }
}