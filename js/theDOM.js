document.addEventListener('DOMContentLoaded', function() {
  var header1 = document.getElementsByTagName ('h1');
  console.log (header1);

  var header2 = document.getElementById ('headerID');
  console.log (header2);

  header1[0].style.color = 'green';
  header2.style.color = 'darkpink';

  header2.style.fontSize = '40px';
  header2.style.background = 'lightblue';
  header2.style.padding = '10px';
  header2.style.border = '2px dashed blue';

  var newParagraph = document.createElement('p');
  newParagraph.innerText = 'I am confused by Javascript!';
  document.body.appendChild(newParagraph);

  header2.addEventListener('mouseenter', function (event) {
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'tomato'

  }
  );
  var paragraph2 = document.createElement('p')
  paragraph2.innerText = 'My name is Flora';
  paragraph2.fontSize = '40px';
  paragraph2.fontFamily = 'sans-serif';
  paragraph2.style.width = '100px';
  paragraph2.border = '1px,orange';
  paragraph2.padding ='30px';

  paragraph2.addEventListener('mouseenter',function(event) {
  console.log(event);
  console.log (event.target);
  event.target.style.color = 'rebeccapurple';

  }
  
  );

  document.body.appendChild(paragraph2);

  
});

