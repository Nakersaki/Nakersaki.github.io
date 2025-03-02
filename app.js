function ColorMe() {
  let aboutMe = document.getElementById('about-text');
  aboutMe.style.backgroundColor = 'yellow';

  setTimeout(() => {
    aboutMe.style.backgroundColor = '';
  }, 3000);
}

function ColorMe2() {
  let skills = document.getElementById('ski');
  skills.style.backgroundColor = 'green';

  setTimeout(() => {
    skills.style.backgroundColor = '';
  }, 3000);
}

function ColorMe3() {
  let contact = document.getElementById('contact');
  contact.style.backgroundColor = 'blue';

  setTimeout(() => {
    contact.style.backgroundColor = '';
  }, 3000);
}



function colorMe4() {
  let guys = document.getElementById('pro');
  guys.style.backgroundColor = '#92ccd6';

  setTimeout(() => {
    guys.style.backgroundColor = '';
  }, 1500);
}
function removeImage() {
  document.getElementById("btn").innerHTML = "";
document.getElementById('btn2').style.display = 'none';
document.getElementById('btn').innerHTML = ' <button id="btn" class="btn" onclick="showMe()">PHOTO OF ME</button>';
}

document.getElementById('btn2').style.display = 'none';

function showMe() {
  document.getElementById('btn').innerHTML = '<img src="p47407711-6.jpg"> '
  document.getElementById('btn2').style.display = 'block';

  
}