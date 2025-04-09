document.addEventListener('DOMContentLoaded', () => {
    function mergeObjects(obj1, obj2) {
        return Object.assign({}, obj1, obj2);
    }

    let myObject1 = {marian: '23', andrian: '25', dmitrii: '20'}
    let myObject2 = {marian: '24', andrian: '24', dan: '21'}
    document.getElementById('convertedArray').textContent = 'Original objects: myObject1 = ' + JSON.stringify(myObject1, null, 4) + ' myObject2 = ' + JSON.stringify(myObject2, null, 4) + ' and finally merged object is ' + JSON.stringify(mergeObjects(myObject1, myObject2)) ;
});
