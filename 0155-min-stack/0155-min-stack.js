
var MinStack = function() {
    this.item = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.item.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.item.length===0)return null
    this.item.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.item.length==0)return null
    return this.item[this.item.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Infinity
    let i = this.item.length-1
    while(0<=i){
        if(min>this.item[i]){
            min = this.item[i]
        }
        i--
    }return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */