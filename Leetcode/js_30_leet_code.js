class EventEmitter {
    events = [];
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let exist = false;

        for(let arr of this.events) {
            if(arr[0] === eventName) {
                arr[1].push(callback);
                exist = true;
            } 
        }

        if(exist === false) {
            this.events.push([eventName, [callback]])
        }

        return {
            unsubscribe: () => {
                
                for(let [tempEventName, tempCallbackArr] of this.events) {

                    if(tempEventName === eventName) {

                        tempCallbackArr.filter((tempCallback) => tempCallback !== callback)
                        // for(let tempCallback of tempCallbackArr) {

                        //     if(tempCallback === callback) {
                        //         callback = 0;
                        //     }
                        // }
                    }
                }
                
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let tempResultArr = [];
        for(let [tempEventName, tempCallbackArr] of this.events) {

            if(tempEventName === eventName) {

                for(let tempCallback of tempCallbackArr) {

                    if(args.length > 0) {

                        if(tempCallback !== 0) {
                            let tempResult = tempCallback(...args);
                            tempResultArr.push(tempResult);
                        }
                    } else {

                        if(tempCallback !== 0) {
                            let tempResult = tempCallback();
                            tempResultArr.push(tempResult);
                        }
                    }
                }
            }
        }

        return tempResultArr;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */