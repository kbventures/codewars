// Brute force
// Simulate the process. We can do it with a heap, or by sorting some list of stones every time we take a turn.
function lastStoneWeight(stones: number[]): number {
stones.sort((a,b)=> {
        return a - b
    })

    while(stones.length >= 2){
        if(stones.length == 1){
            return stones[0]
        } else if(stones.length == 0) {
            return 0; 
        }

        // x <= y
        let x = stones[stones.length - 2]
        let y = stones[stones.length - 1]

        if(x==y){
            stones.splice(0,stones.length-2)
        } else {
            stones.splice(0,stones.length-2)
            console.log("??", stones)
            let temp = y - x;

            stones.push(temp);
            console.log(stones)
            stones.sort((a,b)=>{
                return a-b;
            })
        }
        console.log(stones)
    }

};