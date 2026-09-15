function toggleMenu(){const n=document.getElementById('navLinks');n.style.display=n.style.display==='flex'?'none':'flex'}
function submitForm(e){
 e.preventDefault();
 const f=e.target, msg=document.getElementById('formMsg');
 const data=new FormData(f);
 const text=[...data.entries()].map(([k,v])=>`${k}: ${v}`).join('\n');
 const phone='919032788662';
 const url=`https://wa.me/${phone}?text=${encodeURIComponent('New website enquiry\\n\\n'+text)}`;
 msg.textContent='Opening WhatsApp with your enquiry…';
 window.open(url,'_blank');
}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)document.getElementById('navLinks').style.display='none'}));
