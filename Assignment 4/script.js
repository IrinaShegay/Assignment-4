submit.onclick = function() {
  alert('Thank you for your opinion! We appreciate your feedback!');
};


document.querySelector('.musicBottom').onmousemove = function (e) { 
    var x = e.pageX - e.target.offsetLeft; 
    var y = e.pageY - e.target.offsetTop; 
    e.target.style.setProperty('--x', x + 'px'); 
    e.target.style.setProperty('--y', y + 'px'); 
    }; 


    function musicBottom() {
      if(music.paused) {
     document.getElementById('music').play();
      }
     else{
      document.getElementById('music').pause();
     }
    }
  

    document.querySelector('.musicBottom1').mouseover = (e) => {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty('--x', x + 'px');
      e.target.style.setProperty('--y', y + 'px');
    }; 
  
  
      function musicBottom1() {
        if(music1.paused) {
       document.getElementById('music1').play();
        }
       else{
        document.getElementById('music1').pause();
       }
      }
    
    
      function meow() {
        var z = document.getElementById("text").value;
        if(z==="Meow")
       document.getElementById('meow').play();
       else if (z=== "") {
        document.getElementById('meow').pause();
       }
      }

      function meow1() {
        var y = document.getElementById("text2").value;
        if(y ==="Meow")
       document.getElementById('meow').play();
       else if (y=== "") {
        document.getElementById('meow').pause();
       }
      }

     function makeMove() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        mouse.style.left = timePassed / 5 + 'px';

        if (timePassed > 6600) clearInterval(timer);

      }, 20);
    }
    
    var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}