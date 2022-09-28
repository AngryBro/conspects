var proofs = [];
var nl = `\\)<br><br>\\(\\displaystyle =`;
	ProofPush(`f'_t(x(t))=\\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{f(x(t_1))-f(x(t))}{t_1-t} = \\lim_{t_1 \\rightarrow t}\\left(
	\\frac{f(x(t_1))-f(x(t))}{x(t_1)-x(t)} \\cdot \\frac{x(t_1)-x(t)}{t_1-t}\\right) =`+nl+`
	\\lim_{x_1 \\rightarrow x}
	\\frac{f(x_1)-f(x)}{x_1-x} \\cdot \\lim_{t_1 \\rightarrow t}\\frac{x(t_1)-x(t)}{t_1-t} =
	f'_x(x) \\cdot x'_t(t).`);
	ProofPush(`c' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{c-c}{t_1-t} = \\displaystyle\\lim_{t_1 \\rightarrow t} 0 =0.`);
	ProofPush(`t' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{t_1-t}{t_1-t} = \\displaystyle\\lim_{t_1 \\rightarrow t} 1 =1.`);
	ProofPush(`(с\\cdot x)' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{c\\cdot x(t_1) - c\\cdot x(t)}{t_1-t} = \\displaystyle\\lim_{t_1 \\rightarrow t} 
	\\frac{c\\cdot (x(t_1)-x(t))}{t_1-t} = \\lim_{t_1 \\rightarrow t} c \\cdot 
	\\lim_{t_1 \\rightarrow t} \\frac{x(t_1)-x(t)}{t_1-t} = c \\cdot x'.`);
	ProofPush(`(x\\pm y)'=\\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{(x(t_1)\\pm y(t_1))-(x(t)\\pm y(t))}{t_1-t} = 
	\\lim_{t_1 \\rightarrow t}
	\\frac{(x(t_1)-x(t))\\pm (y(t_1) - y(t))}{t_1-t} = \\)<br><br>\\(=\\displaystyle 
	\\lim_{t_1 \\rightarrow t}
	\\frac{(x(t_1)-x(t))}{t_1-t}\\pm \\lim_{t_1 \\rightarrow t}\\frac{(y(t_1) - y(t))}{t_1-t} =
	x'+y'.`);
	ProofPush(`(x \\cdot y)' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{x(t_1)\\cdot y(t_1)-x(t)\\cdot y(t)}{t_1-t} = 
	\\lim_{t_1 \\rightarrow t}
	\\frac{x(t_1)\\cdot y(t_1)-x(t)\\cdot y(t)+x(t)\\cdot y(t_1)-x(t)\\cdot y(t_1)}{t_1-t} =
	\\)<br><br>\\(\\displaystyle =\\lim_{t_1 \\rightarrow t}
	\\frac{y(t_1)\\cdot (x(t_1) - x(t))+x(t)\\cdot (y(t_1)-y(t))}{t_1-t} =  
	\\)<br><br>\\(\\displaystyle =\\lim_{t_1 \\rightarrow t} y(t_1)\\cdot \\lim_{t_1 \\rightarrow t}
	\\frac{x(t_1)-x(t)}{t_1-t} + 
	\\lim_{t_1 \\rightarrow t} x(t)\\cdot \\lim_{t_1 \\rightarrow t}
	\\frac{y(t_1)-y(t)}{t_1-t}
	= x' \\cdot y + x \\cdot y'.`);
	ProofPush(`\\displaystyle\\left(\\frac{x}{y}\\right)' = 
	\\left( x \\cdot y^{-1} \\right)' = x' \\cdot y^{-1}+x\\cdot\\left(y^{-1}\\right)' =
	\\frac{x'}{y}+x\\cdot (-1) \\cdot y^{-2} \\cdot y' = \\frac{x' \\cdot y - x\\cdot y'}{y^2}.`);
	ProofPush(`\\left(t^c\\right)' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{t_1^c-t^c}{t_1-t} = \\lim_{t_1 \\rightarrow t}
	\\frac{(t_1-t)\\cdot \\left(t_1^{c-1}+t_1^{c-2}\\cdot t + 
	t_1^{c-3}\\cdot t^2 +\\ldots + t_1 \\cdot t^{c-2}+t^{c-1} \\right)}{t_1-t} =
	\\)<br><br>\\(\\displaystyle =\\lim_{t_1 \\rightarrow t}\\left(t_1^{c-1}+t_1^{c-2}\\cdot t + 
	\\ldots +t^{c-1} \\right) = 
	\\underbrace{t^{c-1}+\\ldots +t^{c-1}}_{c} = c \\cdot t^{c-1}.`);
	ProofPush(`c^t = x ~\\Leftrightarrow ~t = \\log_c{x},~~
	t'_t = (\\log_c{x})'_t ~\\Leftrightarrow ~1 = \\displaystyle\\frac{1}{x\\cdot\\ln{c}}
	\\cdot x'_t ~\\Leftrightarrow ~x' = x\\cdot\\ln{c} ~\\Leftrightarrow ~x' = c^t\\cdot\\ln{c}.`)
	ProofPush(`(\\log_c{t})' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{\\log_c(t_1) - \\log_c(t)}{t_1-t} = \\lim_{t_1 \\rightarrow t}
	\\frac{1}{t}\\log_c{\\left(\\frac{t_1}{t}\\right)^{\\frac{t}{t_1-t}}}=
	\\begin{vmatrix} \\frac{t_1-t}{t} = T \\\\ T \\rightarrow 0\\end{vmatrix}=`+nl+`\\frac{1}{t}\\cdot \\log_c{\\lim_{T \\rightarrow 0} (1 + T)^{\\frac{1}{T}}} = 
	\\frac{1}{t} \\cdot \\log_c{e} = \\frac{1}{t\\cdot \\ln{c}}.`);
	ProofPush(`(\\sin{t})' = \\displaystyle\\lim_{t_1 \\rightarrow t}
	\\frac{\\sin{t_1}-\\sin{t}}{t_1-t}=\\lim_{t_1 \\rightarrow t}
	\\frac{2\\cdot \\cos{\\frac{t_1+t}{2}} \\cdot\\sin{\\frac{t_1-t}{2}}}{t_1-t}=
	\\begin{vmatrix} \\frac{t_1-t}{2}=T\\\\T \\rightarrow 0 \\end{vmatrix}=`+nl+`\\lim_{t_1 \\rightarrow t}
	\\cos{\\frac{t_1+t}{2}} \\cdot \\lim_{T \\rightarrow 0}
	\\frac{\\sin{T}}{T} = \\cos{\\frac{t+t}{2}} = \\cos{t}.`);
	ProofPush(`(\\cos{t})' = \\left(\\sin{\\left(\\frac{\\pi}{2}-t\\right)}\\right)' = 
	\\cos{\\left(\\frac{\\pi}{2}-t\\right)}\\cdot \\left(\\frac{\\pi}{2}-t\\right)'=
	\\sin{t}\\cdot (-1) = - \\sin{t}.`);
	ProofPush(`\\displaystyle (\\operatorname{tg}{t})'=\\left(\\frac{\\sin{t}}{\\cos{t}}\\right)'=
	\\frac{(\\sin{t})'\\cdot \\cos{t}-(\\cos{t})'\\cdot \\sin{t}}{\\cos^2{t}}=
	\\frac{\\cos^2{t}+\\sin^2{t}}{\\cos^2{t}} = 1+\\operatorname{tg^2}{t}.`);
	ProofPush(`\\displaystyle (\\operatorname{ctg}{t})'=\\left(\\frac{\\cos{t}}{\\sin{t}}\\right)'=
	\\frac{(\\cos{t})'\\cdot \\sin{t}-(\\sin{t})'\\cdot \\cos{t}}{\\sin^2{t}}=
	\\frac{-\\sin^2{t}-\\cos^2{t}}{\\sin^2{t}} = -1-\\operatorname{ctg^2}{t}.`);
var derivatives = [];
DerivativePush(1,'\\(c\\)','\\(0\\)');
DerivativePush(2,'\\(t\\)','\\(1\\)');
DerivativePush(3,'\\(c \\cdot x\\)','\\(c \\cdot x\'\\)');
DerivativePush(4,'\\(x\\pm y\\)','\\(x\'\\pm y\'\\)');
DerivativePush(5,'\\(x \\cdot y\\)','\\(x\' \\cdot y + x \\cdot y\'\\)');
DerivativePush(6,'\\(\\displaystyle\\frac{x}{y}\\)','\\(\\displaystyle\\frac{x\' \\cdot y - x \\cdot y\'}{y^2}\\)');
DerivativePush(7,'\\(x^c\\)','\\(c \\cdot x^{c-1} \\cdot x\'\\)');
DerivativePush(8,'\\(c^x\\)','\\(c^x \\cdot \\ln{c} \\cdot x\'\\)');
DerivativePush(9,'\\(\\log_c{x}\\)','\\(\\displaystyle\\frac{1}{x \\cdot \\ln{c}} \\cdot x\'\\)');
DerivativePush(10,'\\(\\sin{x}\\)','\\(\\cos{x} \\cdot x\'\\)');
DerivativePush(11,'\\(\\cos{x}\\)','\\(-\\sin{x} \\cdot x\'\\)');
DerivativePush(12,'\\(\\operatorname{tg}{x}\\)','\\(\\left(\\operatorname{tg^2}{x}+1\\right) \\cdot x\'\\)');
DerivativePush(13,'\\(\\operatorname{ctg}{x}\\)','\\(\\left(-\\operatorname{ctg^2}{x}-1\\right) \\cdot x\'\\)');
opened = 0;
function OpenProof(n) {
	if(opened==n) {
		Print(0);
		opened = 0;
	}
	else {
		Print(n);
		opened = n;
	}
}
function Print(proof_) {
	var cmd = '<table>';
	cmd += '<tr><td>№</td><td>Выражение</td><td>Производная</td></tr>';
	for(var i = 0; i<derivatives.length; i++) {
		cmd += derivatives[i];
		if(proof_ == i+1) {
			cmd += '</table><br>';
			cmd += proofs[proof_];
			if(proof_>6) {
				cmd += '<br><br>';
				cmd += proofs[0];
			}
			cmd += '<br><br><table>';
		}
	}
	cmd += '</table>';
	document.getElementById('derivative_derpr').innerHTML = cmd;
}	
function DerivativePush(n,func,derivative) {
	n = String(n);
	var cmd = '<tr>';
	cmd += '<td>'+n+'.</td><td>';
	cmd += func;
	cmd += '</td><td><a href=\'javascript:OpenProof('+n+')\'>';
	cmd += derivative;
	cmd += '</a></td></tr>';
	derivatives.push(cmd);
}
function ProofPush(proof) {
	var cmd = '\\('+proof+'\\)';
	//cmd += '\\\\ \\hline';
	proofs.push(cmd);
}	