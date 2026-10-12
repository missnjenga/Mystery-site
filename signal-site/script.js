// ===== EDIT THIS SECTION TO MAKE IT HIS =====
var P={name:"Tonnie",handle:"Tonnie_savage",codename:"NIGHT OWL",status:"ACTIVE",threat:"Moderate (mostly to za supplies)",
stats:[["Meme Level",97],["Tech Skills",82],["Sleep Schedule",8],["Za Dependency",91],["Gaming Rage",64]],
facts:["Has 14 browser tabs open at all times","Says 'one more game' and means five","Will fix your Za unprompted but has "],
timeline:[["YEAR 1","First contact established. Nobody suspected anything."],["YEAR 2","The incident. We do not speak of the incident."],["YEAR 3","Legendary 3 a.m. gaming session. Records broken."],["NOW","Still the one you call when tech breaks or need za ."]],
secret:"Well, well… look who found his way here. My man, my Man, my living legend. Of all the souls who could have stumbled upon this little corner of the universe, it had to be you. Perhaps fate has a peculiar sense of humour, or perhaps this little world was always waiting for its favourite troublemaker. Either way, welcome, good sir. The kingdom is yours to explore. This whole machine was built for you."};
var jokes=["There are 10 types of people: those who get binary and those who don't.","A SQL query walks into a bar, sees two tables, asks: 'Can I join you?'","I'd tell you a UDP joke, but you might not get it."];
var roasts=["Your search history is just 'how to' followed by things you already know.","You rage-quit games you're winning.","Your password is probably still Juicewrld name plus 999."];
var WO=["Order food","Play a random game","???","No phones for 1 hour","Learn a new shortcut","Text an your ex","Build something cool","Build something dumb","Call your mum!!!","Do 10 pushups", "Stop doom scrolling","Go outside","shots o'clock"];
var RL=[["Weird website","Visit neal.fun and lose an hour."],["Weird website","Wikipedia speedrun: reach Philosophy in 5 clicks."],["Gadget","A Raspberry Pi Zero can run a tiny retro arcade for the price of lunch."],["Fun fact","The first computer bug was a real moth stuck in a relay in 1947."],["Fun fact","The first 1 GB hard drive weighed over 500 pounds."],["Fun fact","The first computer virus was created in 1983."],["Fun fact","The worst part about drug addiction is ending up religious"],["Coding challenge","Write FizzBuzz without any if statements."],["Weekend build","Make a bot that roasts your friends on command."],["Weekend build","A Wi-Fi plant that texts you when it needs water."],["Tech dare","One hour with all notifications off. Report back."],["Tech dare","Set your phone to grayscale for a day."]];
var H={1:"Some things in the file want to be clicked. Try the stamp.",2:"The terminal responds to orders. Try 'sudo'.",3:"The wheel has a '???' slot. Keep spinning.",4:"Roulette gets generous on the fifth spin.",5:"Decoder: shift each letter back by 3."};
// Gallery: [emoji sprite, animation (wiggle|bob|spin), title, caption]. Subject is photophobic, so it's all text.
var GAL=[
["🦉","wiggle","Exhibit A: The Night Owl","Spotted at 3:07 a.m. Face: not provided. Subject refuses all cameras."],
["🍺","bob","Exhibit B: Peter Griffin energy","Laugh detected from two rooms away. Cause: unknown. Possibly a meme."],
["👶","spin","Exhibit C: Stewie-grade scheming","Subject said 'one more game'. Plan: stay up until sunrise."],
["🐶","wiggle","Exhibit D: Brian-style philosophy","Deep thoughts delivered from the couch, mostly about tech and za."],
["🕶️","bob","Exhibit E: Quagmire-level confidence","Entered the room like he owned the Wi-Fi. He did own the Wi-Fi."],
["📸","spin","Exhibit F: Camera incident","Photo attempt failed. Subject deployed a hoodie and vanished."]];
// ===========================================
var $=function(i){return document.getElementById(i)},got=[],rc=0,spinning=false;
try{got=JSON.parse(localStorage.getItem("sig")||"[]")}catch(e){}
function toast(t){var e=$("toast");e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(function(){e.hidden=true},3200)}
function render(){$("sl").innerHTML=[1,2,3,4,5].map(function(n){var o=got.indexOf(n)>-1;return '<span class="'+(o?"on":"")+'" title="Fragment '+n+'">'+(o?"◆":"◇")+"</span>"}).join("");$("cnt").textContent=got.length+" / 5"}
function find(n){if(got.indexOf(n)>-1)return;got.push(n);try{localStorage.setItem("sig",JSON.stringify(got))}catch(e){}render();toast("Fragment "+got.length+" of 5 recovered");if(got.length===5)setTimeout(finale,1600)}
function finale(){$("ov").hidden=true;var f=$("fin");f.hidden=false;f.innerHTML='<h1>SIGNAL RESTORED</h1><p class="lead" style="margin:0 auto 20px">'+P.secret+'</p><button class="btn" id="fx">keep exploring</button>';$("fx").onclick=function(){f.hidden=true}}
$("hint").onclick=function(){for(var n=1;n<=5;n++)if(got.indexOf(n)<0){toast(H[n]);return}toast("Nothing left to find. You did it.")};
$("th").onclick=function(){var r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0e1022";r.setAttribute("data-theme",d?"light":"dark")};
$("ttl").textContent="Node "+P.handle+" is broadcasting.";
$("ft").textContent="host: "+P.handle+" // last seen: just now // uptime: suspicious";
var B={};
(function(){var s=document.createElement("style");s.textContent=[
"#tmx{position:relative!important;display:flex!important;flex-direction:column!important;height:min(55vh,360px)!important;min-height:240px!important;width:100%!important;background:#000!important;border:1px solid #00ff41!important;box-shadow:0 0 14px rgba(0,255,65,.35) inset!important;overflow:hidden!important;font-family:'Courier New',monospace!important;box-sizing:border-box!important}",
"#tmx canvas{position:absolute!important;left:0;top:0;width:100%!important;height:100%!important;opacity:.25!important;pointer-events:none!important;margin:0!important}",
"#tmx .tm-out{position:relative!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;padding:10px!important;height:auto!important;max-height:none!important}",
"#tmx .tm-line{display:block!important;opacity:1!important;margin:2px 0!important;white-space:pre-wrap!important;color:#00ff41!important;text-shadow:0 0 6px #00ff41!important;font-size:14px!important}",
"#tmx .tm-row{position:relative!important;display:flex!important;gap:8px!important;padding:8px 10px!important;border-top:1px solid #0a7a2a!important;background:rgba(0,0,0,.85)!important}",
"#tmx .tm-row span{color:#00ff41!important;white-space:nowrap!important;font-size:14px!important}",
"#tmx .tm-row input{flex:1!important;min-width:0!important;background:transparent!important;border:0!important;outline:0!important;box-shadow:none!important;color:#00ff41!important;font:14px 'Courier New',monospace!important;caret-color:#00ff41!important}",
".g-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-top:12px}",
".g-card{border:1px dashed currentColor;padding:12px;text-align:center;border-radius:8px}",
".g-card b{display:block;margin:6px 0 4px}.g-card small{opacity:.7}",
".g-sp{display:inline-block;font-size:44px;line-height:1.1}",
".g-wiggle{animation:gwig 1.2s ease-in-out infinite}.g-bob{animation:gbob 1s ease-in-out infinite}.g-spin{animation:gspn 3s linear infinite}",
"@keyframes gwig{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}",
"@keyframes gbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}",
"@keyframes gspn{to{transform:rotate(360deg)}}",
"@media (prefers-reduced-motion:reduce){.g-sp{animation:none!important}}"
].join("\n");document.head.appendChild(s)})();

B.dossier=function(b){
 var s=P.stats.map(function(x){return '<div class="m"><span>'+x[0]+'</span><i style="--w:'+x[1]+'%"></i><em>'+x[1]+'%</em></div>'}).join("");
 b.innerHTML='<button class="stamp" id="st">TOP SECRET</button><p>SUBJECT: '+P.name+'<br>ALIAS: '+P.handle+'<br>CODENAME: '+P.codename+'<br>STATUS: '+P.status+'<br>THREAT LEVEL: '+P.threat+'</p><h3>Vitals</h3>'+s+'<h3>Verified facts</h3><ul>'+P.facts.map(function(f){return "<li>"+f+"</li>"}).join("")+'</ul><h3>Known history</h3><ul>'+P.timeline.map(function(t){return "<li><b>"+t[0]+"</b> "+t[1]+"</li>"}).join("")+"</ul>";
 $("st").onclick=function(){find(1);$("st").style.opacity=.5}};
B.terminal=function(b){
 b.innerHTML='<div id="tmx"><canvas id="tmc"></canvas><div class="tm-out" id="tmo"></div><div class="tm-row"><span>root@night-owl:~#</span><input id="tmi" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Terminal command"></div></div>';
 var tm=$("tmx"),o=$("tmo"),i=$("tmi"),cv=$("tmc"),cx=cv.getContext("2d"),busy=true,cols=0,drops=[];
 var glyphs="01{}[]<>/\\$#=+*";
 function size(){cv.width=tm.clientWidth;cv.height=tm.clientHeight;cols=Math.floor(cv.width/14);drops=[];for(var c=0;c<cols;c++)drops[c]=Math.random()*-50}
 var rainT=setInterval(function(){
  if(!cv.isConnected){clearInterval(rainT);return}
  if(tm.clientWidth&&(cv.width!==tm.clientWidth||cv.height!==tm.clientHeight))size();
  cx.fillStyle="rgba(0,0,0,.12)";cx.fillRect(0,0,cv.width,cv.height);
  cx.fillStyle="#00ff41";cx.font="14px monospace";
  for(var c=0;c<cols;c++){
   cx.fillText(glyphs.charAt(Math.floor(Math.random()*glyphs.length)),c*14,drops[c]*14);
   if(drops[c]*14>cv.height&&Math.random()>.975)drops[c]=0;
   drops[c]++}},70);
 function out(t,c){var p=document.createElement("div");p.className="tm-line";p.textContent=t;if(c)p.style.setProperty("color",c,"important");o.appendChild(p);o.scrollTop=o.scrollHeight;return p}
 function seq(list,done){var k=0;(function n(){if(k>=list.length){if(done)done();return}var s=list[k++];out(s[0],s[2]);setTimeout(n,s[1])})()}
 function typeOut(t,done){var p=out(""),k=0;(function n(){p.textContent=t.slice(0,k);o.scrollTop=o.scrollHeight;if(k++<t.length)setTimeout(n,18);else if(done)done()})()}
 function typeList(arr,done){var k=0;(function n(){if(k>=arr.length){if(done)done();return}typeOut("> "+arr[k++],function(){setTimeout(n,250)})})()}
 function bar(done){var p=out(""),v=0;(function n(){v=Math.min(100,v+Math.floor(Math.random()*9)+3);var f=Math.floor(v/5);p.textContent="["+"#".repeat(f)+".".repeat(20-f)+"] "+v+"%";o.scrollTop=o.scrollHeight;if(v<100)setTimeout(n,90);else done()})()}
 function fin(){busy=false;i.focus()}
 var K={help:function(){out("help  dossier  facts  joke  roast  whoami  ls  sudo  hack  clear")},
 dossier:function(){out("SUBJECT: "+P.name+"\nALIAS: "+P.handle+"\nCODENAME: "+P.codename+"\nTHREAT: "+P.threat)},
 joke:function(){out(jokes[Math.floor(Math.random()*jokes.length)])},
 roast:function(){out(roasts[Math.floor(Math.random()*roasts.length)],"#ff3b3b")},
 whoami:function(){out("tonnie. Clearance: pending.")},
 ls:function(){out("dossier.txt  wheel.exe  roulette.app  decoder  gallery/ (locked)")},
 sudo:function(){out("Permission denied. But the system flinched, and something fell out.","#ff3b3b");find(2)},
 clear:function(){o.innerHTML=""}};
 var A={
 facts:function(){seq([
  ["$ npm install facts-of-"+P.handle.toLowerCase(),500],
  ["npm WARN deprecated sleep-schedule@0.0.8: not found",350,"#ffb000"],
  ["npm WARN deprecated self-control@1.0.0: abandoned",350,"#ffb000"],
  ["+ meme-engine@9.7.0",150],["+ za-dependency@9.1.0",150],["+ browser-tabs@14.0.0",150],["+ one-more-game@5.0.0",150],
  ["fetching packages...",250]],
  function(){bar(function(){seq([
   ["added 1337 packages, audited 1338 in 4s",400],
   ["found 0 vulnerabilities (just vibes)",400],
   ["",100],["[ DECRYPTING VERIFIED FACTS ]",600,"#ffffff"]],
   function(){typeList(P.facts,fin)})})})},
 hack:function(){seq([
  ["Accessing mainframe...",600],["Bypassing firewall...",700],["Injecting payload [########..]",700],
  ["Cracking hash 0x7F3A9C...",800],["ACCESS GRANTED",500,"#ffffff"],["Just kidding. Try 'sudo'.",100,"#ffb000"]],fin)}};
 i.onkeydown=function(e){
  if(e.key!=="Enter"||busy)return;
  var v=i.value.trim().toLowerCase();i.value="";if(!v)return;
  out("guest$ "+v,"#0a9a30");
  var c=v.split(/\s+/)[0];
  if(A[c]){busy=true;A[c]()}
  else if(K[c])K[c]();
  else out("command not found: "+c+". Type 'help'.","#ff3b3b")};
 seq([["[BOOT] NIGHT OWL uplink v2.0",400],["[ OK ] loading kernel modules...",350],["[ OK ] mounting /dev/tonnie",350],["[ OK ] establishing encrypted tunnel...",500],["[WARN] subject is photophobic. cameras disabled.",400,"#ffb000"],["Terminal ready. Type help.",100,"#ffffff"]],fin)};
B.wheel=function(b){
 b.innerHTML='<canvas id="cv" width="300" height="300"></canvas><p id="wr">Spin the wheel. One slot hides something.</p><button class="btn" id="sp">SPIN</button><div class="tl"><input id="wi" maxlength="28" placeholder="add your own option"><button class="btn" id="wa">add</button></div>';
 var cv=$("cv"),x=cv.getContext("2d"),rot=0;
 function draw(){var n=WO.length,s=2*Math.PI/n,cs=getComputedStyle(document.documentElement),fg=cs.getPropertyValue("--cy").trim(),dm=cs.getPropertyValue("--dim").trim(),bg=cs.getPropertyValue("--bg").trim(),hot=cs.getPropertyValue("--hot").trim();
  x.clearRect(0,0,300,300);
  for(var i=0;i<n;i++){x.beginPath();x.moveTo(150,150);x.arc(150,150,140,rot+i*s,rot+(i+1)*s);x.closePath();x.fillStyle=i%2?dm:fg;x.fill();x.strokeStyle=bg;x.lineWidth=2;x.stroke();
   x.save();x.translate(150,150);x.rotate(rot+(i+.5)*s);x.fillStyle=bg;x.font="bold 12px monospace";x.textAlign="right";x.fillText(WO[i].slice(0,17),130,4);x.restore()}
  x.beginPath();x.moveTo(138,0);x.lineTo(162,0);x.lineTo(150,24);x.closePath();x.fillStyle=hot;x.fill()}
 $("sp").onclick=function(){if(spinning)return;spinning=true;$("wr").textContent="Spinning...";
  var st=rot,tot=Math.PI*2*(5+Math.random()*3)+Math.random()*6.28,t0=performance.now(),dur=matchMedia("(prefers-reduced-motion:reduce)").matches?300:3800;
  (function f(t){var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);rot=st+tot*e;draw();
   if(p<1)requestAnimationFrame(f);else{spinning=false;var s=2*Math.PI/WO.length,k=Math.floor(((((-Math.PI/2-rot)%6.2832)+6.2832)%6.2832)/s),w=WO[k];
    $("wr").textContent=w==="???"?"Static in the noise. Something was hiding in that slot.":"Chaos has chosen: "+w;if(w==="???")find(3)}})(t0)};
 $("wa").onclick=function(){var v=$("wi").value.trim().replace(/[<>]/g,"");if(v){WO.push(v);$("wi").value="";draw()}};
 draw()};
B.roulette=function(b){
 b.innerHTML='<p id="rr">Press the button for a random piece of tech.</p><button class="btn" id="rb">Press</button>';
 $("rb").onclick=function(){rc++;var r=RL[Math.floor(Math.random()*RL.length)];$("rr").innerHTML="<b></b> <span></span><br><small style='color:var(--dim)'>spin "+rc+"</small>";var q=$("rr").children;q[0].textContent=r[0]+":";q[1].textContent=r[1];if(rc%5===0){find(4);toast("Roulette leaked something. Fragment check.")}}};
B.decoder=function(b){
 b.innerHTML='<p>Intercepted transmission. The sender used a simple shift cipher.</p><div class="cipher">WKH VLJQDO LV BRX</div><div class="tl"><input id="di" autocomplete="off" aria-label="Decoded message" placeholder="type the decoded message"><button class="btn" id="db">decode</button></div><p id="dr"></p>';
 $("db").onclick=function(){var v=$("di").value.toUpperCase().replace(/[^A-Z ]/g,"").trim();if(v==="THE SIGNAL IS YOU"){$("dr").textContent="Decoded. The signal is you.";find(5)}else $("dr").textContent="Garbled. Check each letter."}};
B.photos=function(b){
 if(got.length<3){b.innerHTML="<p><b>ENCRYPTED</b></p><p>Recover 3 fragments to unlock this folder. Progress: "+got.length+" / 3.</p>";return}
 b.innerHTML='<p>Folder unlocked. Subject is photophobic, so evidence was reconstructed in text.</p><div class="g-grid" id="gl"></div>';
 GAL.forEach(function(g){var d=document.createElement("div");d.className="g-card";d.innerHTML='<div></div><b></b><small></small>';
  d.children[0].textContent=g[0];d.children[0].className="g-sp g-"+g[1];d.children[1].textContent=g[2];d.children[2].textContent=g[3];$("gl").appendChild(d)})};
var APPS=[["dossier","dossier.txt","The classified file on "+P.name],["terminal","terminal","Type things. Break things."],["wheel","wheel.exe","Let chaos decide"],["roulette","roulette.app","Random tech, on demand"],["decoder","decoder","Intercepted transmission"],["photos","gallery/","Locked folder"]];
APPS.forEach(function(a){var t=document.createElement("button");t.className="tile";t.innerHTML="<b></b><small></small>";t.children[0].textContent=a[1];t.children[1].textContent=a[2];t.onclick=function(){$("wt").textContent=a[1];var b=$("wb");b.innerHTML="";B[a[0]](b);$("ov").hidden=false;$("x").focus()};$("grid").appendChild(t)});
function close(){$("ov").hidden=true}
$("x").onclick=close;$("ov").onclick=function(e){if(e.target===$("ov"))close()};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){close();$("fin").hidden=true}});
render();