/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
   let map = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26} 
   let arr =  []
   for(let char of words){
    let sum = 0
    for(let s of char){
       sum+=weights[map[s]-1]
    }
    arr.push(sum)
   }  
    let reverseMap = {25:"a",24:"b",23:"c",22:"d",21:"e",20:"f",19:"g",18:"h",17:"i",16:"j",15:"k",14:"l",13:"m",12:"n",11:"o",10:"p",9:"q",8:"r",7:"s",6:"t",5:"u",4:"v",3:"w",2:"x",1:"y",0:"z"}   
    let result = ""
    for(let i=0;i<arr.length;i++){
       let module = arr[i]%26
       result+=reverseMap[module]
    }return result
};