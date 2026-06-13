/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0)return ""
  class Node{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
  }
  class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        if(word.length===0)return
        let node = this.root
        
        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new Node()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }
    longestCommonPrefix(){
        if(!this.root) return ""
        let prefix = ""
        let node = this.root
        
       while(node){

        let keys = Object.keys(node.child)

        if(keys.length!==1 || node.isEnd){
            break
        }

        const nextChar = keys[0]
        prefix += nextChar

        node = node.child[nextChar]

       }
        return prefix
    }
  }
  let t = new Trie()
  for(let word of strs){
    if(word.length===0)return ""
        t.insert(word)
 }
 
  return t.longestCommonPrefix()
};


