    
var bn = JSON.parse('{"x" : [["HOME", "index.html"],["SKILLS", "#k2"], ["CONTACT", "cont"], ["TEAM", "#k3"]]}');

(function() {
  var a = document.querySelectorAll(".navl");

  for (var i of a) {

    for (var y of bn.x) {
      var c = document.createElement("a");
      c.innerText = y[0];
      i.appendChild(c);
    }
  }
})();


function nav(a) {
  var b = document.querySelector("#nav>div:nth-child(2)");
  var d = document.querySelector("#navc");
  var e = document.querySelectorAll("#navc a");
  b.classList.toggle("nava");
  d.classList.toggle("navc");
  for (var i = 0; i < e.length; i++) {
    e[i].classList.toggle("anav");
  }
}

(function() {

  var b = document.querySelector("#navc>div");
  for (var i = 0; i < bn.x.length; i++) {
    var c = document.createElement("a");
    c.href = bn.x[i][1];
    c.innerText = bn.x[i][0];
    c.style.transition = "transform 1s ease "+i/4+"s, color 2s ease 0s";
    c.onclick = function () {
      nav(this);
    }
    b.appendChild(c);
  }
/*
  var ba = document.querySelector("#lnav>div:nth-child(2)");
  for (var j = 0; j < bn.x.length; j++) {
    var ca = document.createElement("a");
    ca.href = bn.x[j][1];
    ca.innerText = bn.x[j][0];
    ca.style.transition = "opacity .5s";
    ba.appendChild(ca);
  }
  */
})();


(function(){
  var b = ["Develop", "Freelance", "Program", "Manage", "Create", "Build", "Innovate"];
  
  var a = document.querySelector("#lst");
  var pos = 0;
  
  (function arr(){
    if(pos>=b.length){
      pos = 0;
    }
    a.innerText = b[pos];
    pos++
    setTimeout(arr, 6000);
  })();
  
})();



(function(){
  var skl = JSON.parse('{"sk":[["fas", "globe", "Web Development", "We specialize in building, designing and managing website either static, dynamic or CRUD for large, medium or small scale organizations."], ["fab", "android", "App Development", "Android and IOS application designing, maintenance and implementation are managed by the team with regular updates for users."], ["fas", "coins", "Blockchain Development", "Looking to start, grow and develop your own coin or token? Hit us up and begin your journey into blockchain"],["fas", "database", "Database Programming", "Database management be it MySQL, SQLite, PostgreSQL, MariaDB, Oracle, etc for different projects is managed by team. Regular backup is ensured to avoid loss of data."], ["fab", "hornbill", "Project Management", "Projects of different kinds can be managed and continued by our team. The project are usually optimized where necessary to ensure a better user experience."], ["fab", "java", "Java Programming", "Java programs or apis can be implemented in projects where necessary. Native C++ or #C can also be implemented in various projects including Android via NDK."], ["fab", "jira", "UI/UX", "Need a project or wanting to remodel one where users get the best experience and a responsive and well-formed interface, our team covers all the that with necessary frameworks for such operations."], ["fas", "atom", "Fullstack Development", "Our team is equipped with various skilled and creative programmers ready to jump into action and get your project started and bring your ideas to reality."], ["fas", "edit", "Content Writing", "Need creative writers for your blog or project, our (ghost) writers got you covered whether blog contents, article writing, e.t.c. either for blogs, articles or writeups"]]}');
  
  var a = document.querySelector("#k2>div:nth-child(3)");
  
  for (var i of skl.sk) {
    var b = document.createElement("div");
    var c = document.createElement("i");
    c.classList.add(i[0]);
    c.classList.add("fa-"+i[1]);
    c.classList.add("fa-2x");
    var d = document.createElement("div");
    d.innerText = i[2];
    var e = document.createElement("div");
    e.innerText = i[3];
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a.appendChild(b);
  }
})();



/*
(function(){
  var a = document.querySelector("#k7>div:nth-child(2)>div:nth-child(3)>div:nth-child(2)");
  var b = [["fab", "whatsapp", "https://wa.me/+2348123413704"], ["fas", "envelope", "mailto:acedev@gmail.com"], ["fas", "paper-plane", ""], ["fab", "linkedin-in", ""]];
  
  for (var i of b) {
    var c = document.createElement("a");
    c.href = i[2];
    
    var d = document.createElement("i");
    d.classList.add(i[0]);
    d.classList.add("fa-" + i[1]);
    
    c.appendChild(d);
    a.appendChild(c);
  }
})();
*/

var adm = [["0", "./img/xav.jpg", "Wisdom Jason", "Dev at Ace inc", "Developer, programmer", [["fab", "facebook", "https://www.facebook.com/wisdom.jason.0"], ["fas", "paper-plane", "https://t.me/wizzzd0m"], ["fas", "envelope", "mailto:wisdomjason0@gmail.com"], ["fab", "whatsapp", "https://wa.me/+2348123413704"]]], ["1", "./img/mav.jpg", "Marvel Ezeocha", "Admin at Bullish shill team", "Graphics designer, Crypto specialist", []], ["2", "./img/jud.jpg", "Judith Ivy", "Owner of ivy's fashion house", "Content creator", [[]]]];

(function(){
  var a = document.querySelector("#k3>div:nth-child(2)");
  var b = document.querySelector("#vad");
  
  for (let i of adm){
    var c = document.createElement("div");
    c.onclick = function(){
      b.style.width = "100%";
      b.style.height = "100%";
      b.style.top = "0";
      b.style.left = "0";
      vad(i[0]);
    }
    var ca = document.createElement("img");
    ca.src = i[1];
    var cb = document.createElement("div");
    cb.innerText = i[2];
    c.appendChild(ca)
    c.appendChild(cb)
    a.appendChild(c);
  }
})();


function vad(a){
  var bb = document.querySelector("body");
  
  var b = document.querySelector("#vad");
  
  var ba = document.createElement("div");
  var baa = document.createElement("span");
  baa.innerHTML = "&times;";
  baa.onclick = function(){
    cls();
  }
  var bab = document.createElement("img");
  bab.src = adm[a][1];
  ba.appendChild(baa);
  ba.appendChild(bab);
  var bac = document.createElement("div");
  var c = [["Name : ", adm[a][2]], ["Position : ", adm[a][3]],  ["Specialty : ", adm[a][4]]];
  for (let i of c){
    var baca = document.createElement("div");
    baca.innerText = i[0]
    var bacaa = document.createElement("span");
    bacaa.innerText = i[1];
    baca.appendChild(bacaa);
    var br = document.createElement("br");
    bac.appendChild(baca);
    bac.appendChild(br);
  }
  var so = document.createElement("div");
  so.innerText = "Socials";
  var sb = document.createElement("div");
  for (let i of adm[a][5]){
    var sa = document.createElement("i");
    sa.classList.add(i[0], "fa-"+i[1]);
    sa.onclick = function(){
      window.location.assign(i[2]);
    }
    sb.appendChild(sa);
  }
  bac.appendChild(so);
  bac.appendChild(sb);
  ba.appendChild(bac);
  b.appendChild(ba);
}

function cls(){
  var b = document.querySelector("#vad");
  while (b.firstChild){
  b.firstChild.remove();
  }
  b.style.width = "0";
  b.style.height = "0";
  b.style.top = "50%";
  b.style.left = "50%";
}





//carousel
(function car() {
  var carw = [["../img/bith.jpg", "http://bithaven.net"], ["../img/shil.jpg", ""], ["../img/pay.jpg", "http://bithaven.net"], ["../img/proj.jpg", "http://bithaven.net"]];

  var c = document.querySelector('#k5>div:nth-of-type(3)');
  var a = document.querySelector('#caur');
  var d = document.querySelector('.prev');
  var e = document.querySelector('.nxt');

  var ab = document.documentElement;
  //c.style.height = Math.floor((240*ab.offsetHeight)/966)+"px";
  c.style.height = 250+"px";

  /*
  window.addEventListener('resize',
    function() {
      c.style.height = Math.floor((240*ab.offsetHeight)/966)+"px";
    });
    */

  var sli = 0;
  var slide = 0;
  var theta = 360/carw.length;
  var cellSize = c.offsetWidth;
  var cellhSize = c.offsetHeight;
  var cellCount = carw.length;
  var radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));


  for (let i of carw) {
    var b = document.createElement('div');
    var v = document.createElement('img');
    v.src=i[0];
    b.onclick = function(){
      window.location.assign(i[1]);
    }
    
    b.classList.add('carw');

    b.style.transform = 'rotateY(0deg) translate3d(0,0px,0px)';
    b.style.width = cellSize-40+'px';
    b.style.height = cellhSize+'px';
    b.style.background = 'hsla('+slide+',100%,0%,0.9)';
    slide += theta;

    b.appendChild(v);
    a.appendChild(b);

  }

  function rot() {
    var angle = theta * sli * -1;
    a.style.transform = 'rotateY(' + angle + 'deg)';
  }

  d.addEventListener('click', ()=> {
    sli--;
    rot();
  });

  e.addEventListener('click', ()=> {
    sli++;
    rot();
  });





  var f = document.querySelectorAll('.carw');
  var run = 0;


  document.querySelector("body").addEventListener('scroll', carous);
  document.querySelector("body").addEventListener('focus', carous);

  function carous() {
    for (var i = 0; i < f.length; i++) {
      if ((Math.round(f[0].getBoundingClientRect().top) <= 600)) {
        var angle = theta * i * 1;
        f[i].style.transform = 'rotateY('+angle+'deg) translate3d(0,0px,'+radius+'px)';
        run++;
      }
    }
  }

})();


(function lnk(){
  var a = document.querySelector("#lnks");
  
  var b = [["fab", "twitter", ""], ["fab", "facebook", ""], ["fab", "github", ""], ["fab", "linkedin", ""], ["fas", "envelop", "mailto:"]];
  
  for (let i of b){
    var c = document.createElement("i");
    c.classList.add(i[0], "fa-"+i[1]);
    c.onclick = function(){
      window.location.assign(i[2]);
    }
    a.appendChild(c);
  }
})();

(function(){
  var a = document.querySelector("#foot>span");
  a.innerText = "("+new Date().getFullYear()+")";
})();


