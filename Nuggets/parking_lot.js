

class ParkingLot {
    // Add the methods here
   
    constructor(slots) {
        this.slots = new Array(slots).fill(null);
    }
    
    park(carId) {
        for(let i = 0; i < this.slots.length; i++) {
            if(this.slots[i] === null) {
                this.slots[i] = carId;
                return true;
            }  
        }
        
        return false;
    }
    
    getSlots() {
        
    }
    
    remove(carId) {
        
    }
}

let park = new ParkingLot(3);
console.log(park.slots);
park.park(2);
console.log(park.slots)