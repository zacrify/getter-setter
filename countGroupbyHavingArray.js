let x = ['x','y','z','x']
const y = x.reduce((acc, el) => {
  if (acc[el]) {
    ++acc[el];
  } else {
    acc[el] = 1;
  }
  return acc
}, []);

console.log(y);