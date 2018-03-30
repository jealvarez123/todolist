console.log("Can I kick it");

// This creates a close button and adds it to each item added

let theList = document.getElementsByTagName('LI');
let i;
for (i=0; i <theList.length; i++) {

  let span = document.createElement('SPAN');
  span.className = 'close';
  span.appendChild(txt);
  theList[i].appendChild(span);
}
//This allows the  close button to hide the item selected to remove from the List
let close =

document.getElementsByClassName('close');
let j;

for (j=0; j < close.length; j++) {
  close[j].onclick = () => {
    let div = this.parentElement;
    li.style.display = "none";
  }
}

// This adds a 'Checked' symbol when clicking on the selected item

let check = document.querySelector('ul');
check.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// This adds a new item to the list when the 'Add It!' button is clicked

function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('Be productive! Add something!');
    } else {
      document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = () => {
        let div = this.parentElement;
        li.style.display = "none";
      }
    }
}
