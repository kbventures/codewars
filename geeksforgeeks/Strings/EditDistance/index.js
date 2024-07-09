// https://www.geeksforgeeks.org/edit-distance-dp-5/


var oneEditDistance = function(s,t) {
    let diff  = Math.abs(s.length - t.length)
    
    // If more than one character difference one insert not possible
    if(diff > 1) return false; 
    
    let editCount = 0; 
    
    // Replace a character of s to get t
    if(s.length == t.length){
        for(let i in t){
            if(s[i] !== t[i]){
                let temp1 = s.split('')
                temp1[i] = t[i]
                let temp2 = temp1.join('')
                if(temp2 === t){
                    editCount++
                    if(editCount ==2) return false; 
                } 
            }
        }
    } 
    // Insert a character into s to get t
    if((s.length+1)== t.length){
        for(let y =0; y<t.length;y++){
            let temp1 = s.slice(0,y) + t[y] + s.slice(y); 
            if(temp1 == t){
                editCount++
                    if(editCount ==2) return false; 
            }
        }
    }
    
    // Delete a character from s to get t
    if((s.length-1)== t.length){
        for (let i = 0; i < s.length; i++) {
            let newStr = s.slice(0, i) + s.slice(i + 1);
            if(newStr == t){
                editCount++
                    if(editCount ==2) return false; 
            }
        }
    }
    
        return editCount > 1 
            
    }
    
    // // Delete Example
    // const result1 = oneEditDistance("abit","abi")
    // console.log(result1)
    
    
    // Insert Example
    const result1 = oneEditDistance("abix","abi")
    console.log(result1)