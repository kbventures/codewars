// https://leetcode.com/problems/min-stack/description/


// Overall Time Complexity:
// The worst-case time complexity is O(n) due to the pop operation, which recalculates the minimum using Math.min(...this.stack) in O(n) time. All other operations (push, top, getMin) are O(1).

// Overall Space Complexity:
// The space complexity is O(n) because the stack stores all n elements, and only a constant amount of additional space is used for variables like minValue.


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