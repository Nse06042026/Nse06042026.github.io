function toggleMenu(){
  const n=document.getElementById('navLinks');
  const b=document.querySelector('.menu');
  const open=n.classList.toggle('open');
  b.setAttribute('aria-expanded',open?'true':'false');
  b.textContent=open?'✕':'☰';
}

function submitForm(e){
 e.preventDefault();
 const f=e.target, msg=document.getElementById('formMsg');
 const data=new FormData(f);
 const labels={name:'Student Name',mobile:'Mobile Number',qualification:'Current Qualification',rank:'Entrance Exam / Rank',course:'Admission Area',location:'Preferred Location',budget:'Approximate Budget',message:'Message'};
 const lines=[];
 for(const [k,v] of data.entries()){if(v) lines.push(`${labels[k]||k}: ${v}`)}
 const text=`Hello Next Step Education, I need admission guidance.\n\n${lines.join('\n')}`;
 const url=`https://wa.me/919032788662?text=${encodeURIComponent(text)}`;
 msg.textContent='Opening WhatsApp with your enquiry…';
 window.open(url,'_blank','noopener');
}

document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{
 const n=document.getElementById('navLinks');
 const b=document.querySelector('.menu');
 n.classList.remove('open');
 b.setAttribute('aria-expanded','false');
 b.textContent='☰';
}));

document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{
 const select=document.querySelector('select[name="location"]');
 if(select) select.value=a.dataset.interest;
}));
