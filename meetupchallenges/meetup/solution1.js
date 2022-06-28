const newEmail1 = {
    to: "email@something.com",
    title: "sduhfüasdufasd",
    body: "uhsdpifuhspdfas",
}

const newEmail2 = {
    to: "email@something.com",
    title: "sduhfüasdufasd",
    body: "uhsdpifuhspdfas",
}

const emailHandler = new EmailHandler();

emailHandler.push(newEmail1);
emailHandler.push(newEmail2);


const nextEmail1 = emailHandler.processNext();  // newEmail1
const nextEmail2 = emailHandler.processNext();  // newEmail2


class EmailHandler {
    constructor() {
        this.array = [];
    }

    push(email) {
        this.array.push(email);
    }

    processNext() {
        return this.array.shift();
    }
}


// class Queue {
//     constructor() {
//         this.array = [];
//     }

//     push(email) {
//         this.array.push(email);
//     }

//     pop() {
//         return this.array.shift(); -+
//     }
// }


// const queue = new Queue();
// queue.push("X")
// queue.pop();


// class Stack {
//     constructor() {
//       this.array = [];
//     }
    
//     push(email) {
//       this.array.push(email);
//     }
    
//     pop() {
//       return this.array.pop();
//     }
//   }



