// Write function below
console.log('hello');
const insertIntoArray = (arr, value) => {

    return arr.reduce((result, element, index, array) => {

        result.push(element);

        if (index < array.length - 2) {
            result.push(value);
        }
        console.log(`result is ${result}, element is ${element}, index is ${index}`);
        return result;
    }, []);
};

function groceries(arr) {
    let m = []
    let z = []
    for (let x = 0; x < arr.length; x++) {
      m.push(arr[x].item);
    }
    // console.log(arrLen);
    if (m.length >= 2) {
        m = insertIntoArray(m, ', ');
        
    
      // m.splice(m.length-2,0,', ');
        m.splice(m.length - 1,0,' and ');
  
    } 
    return m.join('');
  }
  
let b = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
let c = [{item: 'Carrots'}];
console.log(groceries(b));
console.log(groceries(c));
  // console.log(b[0].item)
// groceries(b);

