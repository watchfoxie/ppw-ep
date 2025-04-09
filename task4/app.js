document.addEventListener('DOMContentLoaded', () =>{
    function countOccurrences(arr, value){
        let i = 0;
        for(let element of arr){
            if(element == value)
                i++;
        }
        return i;
    }
    let array = [2,3,4,5,6,7,5,5];
    let val = Number(prompt('Insert a value to check occurrences: '));
    document.getElementById('occurrences').textContent = 'In the orginal array ' + array + ', value ' + val + ' has ' + countOccurrences(array, val) + ' occurrences!';
});