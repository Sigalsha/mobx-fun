

class IceCreamStore {
    iceCreams = [];
 
    addIceCream(flavor ,color) {
	this.iceCreams.push({ flavor, color });
    }
}

const store = new IceCreamStore();
export default store;