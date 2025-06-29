var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

var red = rootStyles.getPropertyValue('--red');
console.log('red: ', red);

var yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);

// Change the value of the variable
root.style.setProperty('--red', 'brown');
root.style.setProperty('--yellow', 'orange');

