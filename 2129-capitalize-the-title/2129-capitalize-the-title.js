/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
//     let ArrString = title.split(" ")
//     let str = ""
    
//     for(let i=0;i<ArrString.length;i++){
//         let len = ArrString[i].length
//         if(len>2){
//           for(let j=0;j<len;j++){
//             if(j==0){
//               str += ArrString[i][j].toUpperCase()
//             }else{
//                 str+=ArrString[i][j].toLowerCase()
//             }
//           }
//           str+=" "
//         }else{
//            str+= ArrString[i].toLowerCase() + " "
//         }  
//     }
//    return str.trim()

let capitalized = false
let str = ""
for(let i=0;i<title.length;i++){
    if(title[i-1]==" "){
        str+=""
      capitalized = false
    }
    
    if(!capitalized && title[i+1]!==" " && title[i+2]!==" " && i+2!==title.length & i+1!==title.length){
           str +=  title[i].toUpperCase()
           capitalized = true
    }else {
        str+=title[i].toLowerCase()
    }
}
    return str
};