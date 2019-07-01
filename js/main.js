let userText = [];

document.addEventListener('keypress', function(e) {
  if (e.keyCode == 8) {
    userText.pop();
    document.getElementById('myText').textContent = userText.join('');
    console.log(userText);
  } else {
    let myChar = String.fromCharCode(e.charCode);
    userText.push(myChar);
    document.getElementById('myText').textContent = userText.join('');
    console.log(userText);
  };
})

// document.addEventListener('keypress', function(e) {
//   let myChar = String.fromCharCode(e.charCode);
//   userText.push(myChar);
//   document.getElementById('myText').textContent = userText.join('');
// })

// document.addEventListener('keypress', function(e) {
//   console.log('Key pressed: ' + e.keyCode);
// })
