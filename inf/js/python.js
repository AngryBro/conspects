var html = document.body.innerHTML;
html = html
.replace(/{\.\.\./g,'<span class="code">&lt;')
.replace(/\.\.\.}/g,'&gt;</span>')
.replace(/\\{/g,'__tempL__')
.replace(/\\}/g,'__tempR__')
.replace(/{{/g,'<span class="operation">')
.replace(/}}/g,'</span>')
.replace(/{/g,'<span class="variable">')
.replace(/}/g,'</span>')
.replace(/__tempL__/g,'{')
.replace(/__tempR__/g,'}');
document.body.innerHTML = html;
document.querySelectorAll('.listing').forEach(code => {
    code.innerHTML = code.innerHTML
    .replace(/  /g,'&nbsp;')
    .replace(/\n/g,'<br>');
});