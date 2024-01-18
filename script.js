const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) =>{
insert.innerHTML = `<div class="key">
${event.key === '' ? 'Space' : event.key} 
<small>event.key</small>
</div>
<div class="key">
${event.keyCode}
<small>event.key</small>
</div>
${ event.code}
<div class="key">
KeyA
<small>event.key</small>
</div>`
})