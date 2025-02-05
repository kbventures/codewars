// https://leetcode.com/problems/min-stack/description/



// Function Constructor
var MinStack = function() {
    this.stack = []
    this.minValue = null; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.minValue == null || val < this.minValue){
        this.minValue = val; 
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length == 0){
        return []
    } else {
        this.stack.pop()
        let tempMinVal = Math.min(...this.stack)
        this.minValue = tempMinVal; 
        return this.minValue
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack == null){
    } else {
        return this.stack[this.stack.length-1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minValue == null){
        return []
    } else {
        return this.minValue
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */