document.addEventListener('DOMContentLoaded', () =>{
    let outputArray = [];
    function customReverse(inputArray){
    
        for(let i = inputArray.length-1; i >= 0; i--){
            outputArray.push(inputArray[i]);
        }
        return outputArray;
    }
    const array = [2,3,4,5,6,7];
    const result = customReverse(array);
    document.getElementById('original').textContent = 'Original array: '+ array;
    document.getElementById('reverse').textContent = 'Reverse array: '+ result;
});