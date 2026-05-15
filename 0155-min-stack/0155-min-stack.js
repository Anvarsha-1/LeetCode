
var MinStack = function() {
    this.item = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   let min = this.min.length ? Math.min(this.min[this.min.length-1],val) : val
   this.min.push(min)
   this.item.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.item.length===0)return null
    this.min.pop()
    return this.item.pop()
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
  return this.min.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */