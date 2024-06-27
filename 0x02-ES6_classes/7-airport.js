export default class Airport{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }

    // Getter for name attribute
    get name() {
        return this._name;
    }

    // Getter for code attribute
    get code() {
        return this._code;
    }

    // Default string description based on airport code
    toString() {
        return this._code;
    }
}