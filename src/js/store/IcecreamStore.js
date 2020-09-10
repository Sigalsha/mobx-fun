import { observable } from "mobx";
import { action } from "mobx";


class IceCreamStore {
    @observable iceCreams = [];
    @observable filterString ="";

    guidGenerator = () => {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    @action addIceCream = (flavor, color) => {
        let _id = this.guidGenerator()
        this.iceCreams.push({ flavor, color, _id: _id });
    }

    @action deleteIceCream = (index) => {
        this.iceCreams.splice(index, 1);
    }

    @action updateIceCream = (object, index) => {
        this.iceCreams[index] = object

    }

    // @computed get filteredIcecreams() => {
    //     return this.iceCreams.filter(iceCream => {

    //     }) 
    // }

    // filteredMovies.filter(movie => {
    //     return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}

const store = new IceCreamStore();
export default store;