document.addEventListener('DOMContentLoaded', () => {
    function objectToArray(obj) {
        let outputArray = [];
        for (let prop in obj) {
            outputArray.push([prop, obj[prop]]);
        }
        return outputArray;
    }

    let myObject = { name: 'Marian', age: '24' };
    document.getElementById('convertedArray').textContent = 'The original object myObject = ' + JSON.stringify(myObject, null, 4) + ', and converted array: ' + JSON.stringify(objectToArray(myObject), null, 4);
});
