function toggleMenu(){
  const n=document.getElementById('navLinks');
  const b=document.querySelector('.menu');
  const open=n.classList.toggle('open');
  n.style.display=open?'flex':'';
  b.setAttribute('aria-expanded',open?'true':'false');
}
function submitForm(e){
 e.preventDefault();
 const f=e.target, msg=document.getElementById('formMsg');
 const data=new FormData(f);
 const labels={name:'Student Name',mobile:'Mobile Number',qualification:'Current Qualification',rank:'Entrance Exam / Rank',course:'Preferred Course',location:'Preferred Location',budget:'Approximate Budget',message:'Message'};
 const lines=[];
 for(const [k,v] of data.entries()){if(v) lines.push(`${labels[k]||k}: ${v}`)}
 const text=`New website enquiry\n\n${lines.join('\n')}`;
 const url=`https://wa.me/919032788662?text=${encodeURIComponent(text)}`;
 msg.textContent='Opening WhatsApp with your enquiry…';
 window.open(url,'_blank','noopener');
}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
 if(innerWidth<=850){const n=document.getElementById('navLinks');const b=document.querySelector('.menu');n.classList.remove('open');n.style.display='';b.setAttribute('aria-expanded','false')}
}));
