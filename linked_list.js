

// head = null
// node = {value: 1, next: null}

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }


}

class LinkedList {

    constructor() {
        // head is the first node in the linked list
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = new Node(value);

        // if it is initial node
        if(this.head === null) {
            this.head = node;
            this.length++;
        } else {
            // if there are nodes already, pick the first element and traverse to the end
            let currentNode = this.head;

            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            this.length++;

        }
    }

    remove() {

        // this.length--; 

        let currentNode = this.head;

        if(this.length === 0) {
            throw new Error("Linked list has no elements to be removed.")
            // return "Linked list has no element to be removed";
        }

        if(this.length === 1) {
            
            let firstElement = this.head;
            this.head = null;
            this.length--;

            return firstElement;
        }

        let i = 0;

        while (i < (this.length - 1)) {

            if(i === (this.length - 2)) {
                console.log(currentNode);
                currentNode.next = null;
                this.length--;
                console.log(currentNode);
            }

            currentNode = currentNode.next;
            i++;
        }



    }

    print() {
        let currentNode = this.head;

        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let list = new LinkedList();
console.log(list);
list.add(1);
list.add(2);
list.add(3);
console.log(list);
list.print();
list.remove();
console.log(list)
console.log(list.length);
list.print();
list.remove();
console.log(list)
console.log(list.length);

list.remove();
console.log(list);
list.print();

list.remove();
list.add(1);

// to make this cpde bug proof, we need to make length as a private class field so this manual operation (list.length = 23) on the instance of the linked list will not work,
// hence our remove method which is dependent on length property works fine...


