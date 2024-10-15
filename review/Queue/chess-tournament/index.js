// The city of Hackerland organised a chess tournament for its citizens.

// There are n participants numberered 1 to n where the ith participants has potential denoted by potential[i]. The potential of each player is distinct. 

// Initially, all players stand in a queue in order fro the 1st to the nth player in each game, the first 2 participants of the queue compete and the participant
// with a higher potential wins the game.

// After each game, the winner remains at the beginning of the queue and plays with the next person from the queue and the losing player goes to the end of the queue.

// The game continues until a player wins k consecutive games.

// Given the potential of the participant and the deciding factor k, find the potential of the winning player.


// Example

// Consider n = 4 participants have potential = [ 3, 2, 1, 4] and k = 2

// Initial position of participants [1,2,3,4]

// Pariticipants 1 and 2 compete. Their potential are 3 and 2. Player 1 wins due to the higher potential.
// Player 1 stays at the front of the queue and player 2 moves to the back. Now their  positions are [1, 3, 4, 2]

// Pariticipants 1 and 3 compete.  Their potentials are 3 and 1. 1 wins a second consecutive game. Since k = 2 player 1 has a won enought consecutivegames.

// Return player 1's potential, 3. 

// Function description
// Complete the function getPotentialOfWinner in the editor below

// getPotentialOfWinner has the following paramters
//     int potential[n]: the potentials of Pariticipants
//     long_int k: the number of consecutive matches the winning participants must winning

// returns int; the potentialof the winning player

// constraints

// 2 <= n <= 10^5
// 1 <= potential[i] <= n
// 2 <= k <= 10^14

// Brute Force Attempt 1
// function getPotentialOfWinner(potential, k) {

//     let player1 = 0
//     let player2 = 1
//     let players = potential.slice()
//     let currentPoints = 0; 

//     while(true){
//     if(players[player1]>players[player2]){
//     currentPoints++
//     players.push(players[player2])
//     players.splice(player2,1)
//     // console.log(players[player1], players[player2])
//     } else {
//     currentPoints = 1; 
//     players.push(players[player1])
//     players.splice(player1,1)
//     }
   
    
//     if(k === currentPoints){
//     return players[player1]
//     }      
//     }
// }

// // Example usage
// const potential = [2,1,3];

// // win
// // const potential = [3, 2, 1, 4];
// const k = 2; 
// // loose
// // const potential = [2, 3, 1, 4];
// // const k = 2;
// console.log(getPotentialOfWinner(potential, k)); // Output: 3



// Queue LinkedList

class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}


class LinkedListQueue{
    constructor(){
    this.front = null;
    this.rear = null;
    this.size = 0; 
    } 

    enqueue(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode; 
            this.rear = newNode; 
        }

        this.size++
    }

    dequeue(){
        let temp; 
        if(this.isEmpty()){
            return undefined
        } else if(this.size ===1){
            temp = this.front.value
            this.front = null; 
            this.rear = null; 
        } else {
            temp = this.front.value; 
            this.front = this.front.next; 
        }
        return temp; 
    }

    isEmpty(){
        return this.size === 0;
    }

    length(){
        return this.size;
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        } else {
            return this.front.value
        }
    }
}


// There are n number of players and they are given to us with their potentials

// Index 0 and 1 player first.. winner stays while looser is moved to the end of the que and winning cont goes up or resets to 1

// This goes on until k consecutive wins in a row happen


function getPotentialOfWinner(potential, k) {

    const queue = new LinkedListQueue()
    let currentWinningStreak = 1; 

    // Initialize queue
    for( let z of potential){
        queue.enqueue(z)
    }


    let player1 = queue.dequeue()
    let player2 = queue.dequeue()
    let lead, nextOpponent;

    // Find the initial winner
    if(player1 > player2){
        lead = player1
        queue.enqueue(player2)
    } else {
        lead = player2;
        queue.enqueue(player1)
    }

    // Iterate until final winner is found
    while(true){

    if(currentWinningStreak === k ) return lead; 
    nextOpponent = queue.dequeue()
    if(lead > nextOpponent){
        currentWinningStreak++
        queue.enqueue(nextOpponent)
    } else {
        currentWinningStreak = 1; 
        queue.enqueue(lead)
    }
    }
}

// Example usage
const potential = [2,1,3];

// win
// const potential = [3, 2, 1, 4];
const k = 2; 
// loose
// const potential = [2, 3, 1, 4];
// const k = 2;
console.log(getPotentialOfWinner(potential, k)); // Output: 3



// Reference Queue
