// ===== love.js : load AFTER script.js =====
// ===== EDIT THIS SECTION TO MAKE IT PERSONAL =====
var L={
 from:"Your favourite person",
 tileName:"for-you.txt",
 tileDesc:"Cute notes + songs, just for you",
 intro:"Hey Tonnie. This corner has no puzzles. It's just for you.",
 notes:[
  "You said 'one more game' again. Proud of you for stopping at five. Okay, six.",
  "Out of 14 open tabs, you're the only one I'd never close.",
  "You fix everyone's tech problems. Today, let someone fix your day.",
  "Your 3 a.m. brain is genius. Please let it sleep once in a while though.",
  "Thank you for being the person people call. I'm glad I'm one of them.",
  "You're my favourite notification.",
  "If life had a save button, I'd save every moment with you.",
  "Drink water. Eat something real. Then go back to being a legend."],
 openWhen:[
  ["Open when you're tired","Close the laptop. The game will still be there tomorrow. You did enough today."],
  ["Open when you rage-quit","It was the lag. It's always the lag. Take a breath, then queue again."],
  ["Open when you're bored","Spin the wheel, press roulette, or text me something dumb. Any of them works."],
  ["Open when you miss me","Same here. Play the playlist below and think of me for exactly one song."],
  ["Open when you doubt yourself","Reminder: you built things, fixed things and made people laugh. Still undefeated."]],
 // [song, artist, why this one]. Only titles are listed, so the playlist opens a YouTube search.
 songs:[
  ["Die For You","The Weeknd","For late-night drives."],
  ["Best Part","Daniel Caesar & H.E.R.","Because you're the best part of my day."],
  ["Golden Hour","JVKE","For the days that feel like sunsets."],
  ["Location","Khalid","Send me yours. I'm on my way."],
  ["Snooze","SZA","Soft one. For when we're just vibing."],
  ["Girl of My Dreams","Juice WRLD & SUGA","A nod to your favourite artist."],
  ["Adorn","Miguel","Smooth, slow and a little romantic."]]
};
// =================================================
(function(){
 var st=document.createElement("style");
 st.textContent=[
 ".lv-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}",
 ".lv-box{position:relative;border:1px dashed var(--hot,#ff5c8a);border-radius:10px;padding:14px;margin:10px 0;min-height:60px}",
 ".lv-msg{font-size:1.05em;line-height:1.5}",
 ".lv-from{opacity:.7;font-size:.85em;margin-top:8px}",
 ".lv-open{border:1px solid var(--dim,#888);border-radius:8px;margin:8px 0;padding:10px}",
 ".lv-open b{cursor:pointer;display:block}",
 ".lv-open p{margin:8px 0 0}",
 ".lv-song{display:flex;justify-content:space-between;align-items:center;gap:10px;border:1px solid var(--dim,#888);border-radius:8px;padding:10px;margin:8px 0}",
 ".lv-song a{color:var(--hot,#ff5c8a);text-decoration:none;white-space:nowrap}",
 ".lv-song small{display:block;opacity:.7}",
 ".lv-heart{position:absolute;bottom:8px;animation:lvup 1.4s ease-out forwards;pointer-events:none}",
 "@keyframes lvup{to{transform:translateY(-70px);opacity:0}}",
 "@media (prefers-reduced-motion:reduce){.lv-heart{animation:none;opacity:0}}"].join("\n");
 document.head.appendChild(st);

 function mk(tag,txt,cls){var e=document.createElement(tag);if(txt!=null)e.textContent=txt;if(cls)e.className=cls;return e}

 B.love=function(b){
  b.appendChild(mk("p",L.intro));
  var tabs=mk("div",null,"lv-tabs"),view=mk("div"),idx=-1;
  b.appendChild(tabs);b.appendChild(view);
  function tab(label,fn){var t=mk("button",label,"btn");t.onclick=fn;tabs.appendChild(t)}
  function notes(){
   view.innerHTML="";
   var box=mk("div",null,"lv-box"),m=mk("div",null,"lv-msg"),f=mk("div","- "+L.from,"lv-from"),btn=mk("button","send me a message","btn");
   function next(){var n;do{n=Math.floor(Math.random()*L.notes.length)}while(n===idx&&L.notes.length>1);idx=n;m.textContent=L.notes[n];
    for(var k=0;k<4;k++){var h=mk("span","\u2764","lv-heart");h.style.left=(10+Math.random()*80)+"%";h.style.animationDelay=(k*.12)+"s";box.appendChild(h);h.onanimationend=function(){this.remove()}}}
   btn.onclick=next;box.appendChild(m);box.appendChild(f);view.appendChild(box);view.appendChild(btn);next()}
  function openWhen(){
   view.innerHTML="";
   L.openWhen.forEach(function(o){var d=mk("div",null,"lv-open"),h=mk("b","\u2709 "+o[0]),p=mk("p",o[1]);p.hidden=true;h.onclick=function(){p.hidden=!p.hidden};d.appendChild(h);d.appendChild(p);view.appendChild(d)})}
  function songs(){
   view.innerHTML="";
   L.songs.forEach(function(s){var d=mk("div",null,"lv-song"),l=mk("div"),a=mk("a","\u25B6 listen");
    l.appendChild(mk("b","\u266A "+s[0]+" - "+s[1]));l.appendChild(mk("small",s[2]));
    a.href="https://www.youtube.com/results?search_query="+encodeURIComponent(s[0]+" "+s[1]);a.target="_blank";a.rel="noopener noreferrer";
    d.appendChild(l);d.appendChild(a);view.appendChild(d)})}
  tab("cute notes",notes);tab("open when...",openWhen);tab("our playlist",songs);
  notes()};

 var t=mk("button",null,"tile");t.innerHTML="<b></b><small></small>";
 t.children[0].textContent=L.tileName;t.children[1].textContent=L.tileDesc;
 t.onclick=function(){$("wt").textContent=L.tileName;var b=$("wb");b.innerHTML="";B.love(b);$("ov").hidden=false;$("x").focus()};
 $("grid").appendChild(t);
})();