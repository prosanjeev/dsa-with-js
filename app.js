////////////////Program-1////////////////////////////
//--------Method-1-----------
// function traversing() {
//     let arr= [23,45,21,78,65]

//     for(let i=0; i<arr.length; i++){
//            console.log(arr[i]); 
//         }        
// }
//--------Method-2-----------
function traverseArray(arr= [23,45,21,78,65], index=0 ) {
   
    if (index >= arr.length) {
        return;
    }

    console.log(arr[index]);
    traverseArray(arr, index + 1);    
}
// traverseArray();

////////////////Program-2////////////////////////////
//--------Method-1-----------
// function insertElementInArr() {
//     let arr= [23,45,21,78,65]
//     let targetIndex=1
//     arrLength= arr.length
//     insertElement=5
//     for(let i=arrLength; i>= targetIndex; i--){
//         arr[i] = arr[i-1]
//             if(i==targetIndex){
//                 arr[i]=insertElement
//             }
//     }
//        console.log(arr);     
// }

//--------Method-2-----------
function insertElementInArr(){
    let arr= [23,45,21,78,65]
    let targetIndex=1
    insertElement=5
    arr.splice(targetIndex,0,insertElement);
    console.log(arr)
}
// insertElementInArr();

////////////////Program-3////////////////////////////
//--------Method-1-----------
// function deleteElementInArr() {
//     let arr= [23,45,21,78,65]
//     let targetIndex=2
//     arrLength= arr.length
//     for(let i=targetIndex; i<arrLength; i++){
//         arr[i] = arr[i+1]
            
//     }
//     arr.length = arrLength - 1;
//        console.log(arr);     
// }

//--------Method-2-----------
function deleteElementInArr(){
    let arr= [23,45,21,78,65]
    let targetIndex=2
   
    arr.splice(targetIndex,1);
    console.log(arr)
}
// deleteElementInArr();

////////////////Program-4////////////////////////////
//--------Method-1-----------
// function searchElementInArr() {
//     let arr= [23,45,21,78,65]
//     let targetElemnt=45
//     let arrLength= arr.length
//     for(let i=0; i<arrLength; i++){
//         if(arr[i] === targetElemnt){
//             console.log(i);
//             break
//         }
//      }
        
// }

//--------Method-2-----------
function searchElementInArr(){
    let arr= [23,45,21,78,65]
    let targetElemnt=21
    
    console.log(arr.indexOf(targetElemnt))
}
// searchElementInArr();

////////////////Program-5////////////////////////////
//--------Method-1-----------
// function mergeTwoArr() {
//     let arr1= [23,45,21,78,65]
//     let arr2= [15,29,12,35]
//     let arr3=[]
   
//     let arr1Length= arr1.length
//     let arr2Length= arr2.length

//     for(let i=0; i<arr1Length; i++){
//         arr3[i] =arr1[i]                
//      }
//     for(let i=0; i<arr2Length; i++){
//         arr3[arr1Length+i] =arr2[i]                
//      }
//      console.log(arr3)       
// }

//--------Method-2-----------
function mergeTwoArr() {
        let arr1= [23,45,21,78,65]
        let arr2= [15,29,12,35]
        let arr3=[...arr1,...arr2]
              
         console.log(arr3)       
    }
// mergeTwoArr();

////////////////Program-6////////////////////////////
//--------Method-1-----------
function mergeTwoArrWithSort() {
    let arr1= [23,45,21,78,65]
    let arr2= [15,29,12,35]
    let arr3=[]
    
    let arr1Length= arr1.length
    let arr2Length= arr2.length

    for(let i=0; i<arr1Length; i++){
        arr3[i] =arr1[i]                
     }
    for(let i=0; i<arr2Length; i++){
        arr3[arr1Length+i] =arr2[i]                
     }
     console.log(arr3)       
}

//--------Method-2-----------
function mergeTwoArr() {
        let arr1= [23,45,21,78,65]
        let arr2= [15,29,12,35]
        let arr3=[...arr1,...arr2]
              
         console.log(arr3)       
    }
// mergeTwoArr();