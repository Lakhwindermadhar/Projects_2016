import {computer} from './computer.js'
class Macbook extends computer{
    constructor(name,company){
        super(name)
        this.company=company
    }

logIn(){
    console.log("You are logged into a MacBook"+this.name)
}
}

export default Macbook