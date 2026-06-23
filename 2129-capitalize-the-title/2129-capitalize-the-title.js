/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let ArrString = title.split(" ")
    let str = ""
    console.log(ArrString)
    for(let i=0;i<ArrString.length;i++){
        let len = ArrString[i].length
        if(len>2){
          for(let j=0;j<len;j++){
            if(j==0){
              str += ArrString[i][j].toUpperCase()
            }else{
                str+=ArrString[i][j].toLowerCase()
            }
          }
          str+=" "
        }else{
           str+= ArrString[i].toLowerCase() + " "
        }  
    }
   return str.trim()
};