// Solution 1

const rooms = {
    r1: {
        name: "R1",
        description: "First room.",
        completed: true
    },

    r2: {
        name: "R2",
        description: "Second room.",
        completed: false
    },

    r3: {
        name: "R3",
        description: "Third room.",
        completed: true
    }
}

// Solution 2


const Room = function (name, description, completed) {
    this.name = name;
    this.description = description;
    this.completed = completed;
}

const rooms = {
    room1: new Room('Room1', 'This is the first room.', true),
    room2: new Room('Room2', 'This is the second room.', false),
    room3: new Room('Room3', 'This is the third room.', true)
}


// Solution 3

const Room = function (name, description, completed) {
    this.name = name;
    this.description = description;
    this.completed = completed;
}

Room.prototype.sinceConstructed = function (constructionYear) {
    return 2020 - constructionYear;
};

const rooms = {
    room1: new Room('Room1', 'This is the first room.', true),
    room2: new Room('Room2', 'This is the second room.', false),
    room3: new Room('Room3', 'This is the third room.', true)
}

console.log(rooms.room1);
/* Room {
     name: 'Room1',
     description: 'This is the first room.',
     completed: true
   } */

console.log(rooms.room1.sinceConstructed(2000)); // 20