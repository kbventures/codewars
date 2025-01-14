// https://leetcode.com/problems/top-k-frequent-words/

function topKFrequent(words: string[], k: number): string[] {
    let result: string[] = []
    let obj: Record<string,number> = {}
    
    // Obtain count
    for(let g of words){
        // console.log(g,typeof g)
        obj[g] ? obj[g]++ : obj[g] = 1; 
    }
    
    const convObjToArr = Object.entries(obj)
    convObjToArr.sort((a,b)=>{
    
        if(b[1] - a[1] < 0) return -1
        if(b[1] - a[1] > 0) return 1;
    
        return a[0].localeCompare(b[0])
    })
    result = convObjToArr.map(e=>{
        return e[0]
    })
    
    return result.slice(0,k)
    }
    
    