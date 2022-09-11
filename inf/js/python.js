var html = document.body.innerHTML;
html = html
.replace(/\\{/g,'__tempL__')
.replace(/\\}/g,'__tempR__')
.replace(/{{/g,'<span class="operation">')
.replace(/}}/g,'</span>')
.replace(/{/g,'<span class="variable">\\(')
.replace(/}/g,'\\)</span>')
.replace(/__tempL__/g,'{')
.replace(/__tempR__/g,'{');
document.body.innerHTML = html;