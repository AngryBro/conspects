var texCommands = [
    `\\NN{{
        \\mathbb{N}
    }}
    `,
    `\\RR{{
        \\mathbb{R}
    }}
    `,
    `\\QQ{{
        \\mathbb{Q}
    }}
    `,
    `\\ZZ{{
        \\mathbb{Z}
    }}
    `,
    `\\mequiv#1#2#3{{
        #1 \\equiv #2 ~~\\left(\\operatorname{mod}{~#3}\\right)
    }}
    `,
    `\\frame#1{{
        \\begin{array}{|c|}
            \\hline
                #1
            \\\\ \\hline
        \\end{array}
    }}
    `,
    `\\cases#1{{
        \\begin{cases}
            #1
        \\end{cases}
    }}
    `,
    `\\union#1{{
        \\left[
            \\begin{array}{l}
                #1
            \\end{array}
        \\right.
    }}
    `
];
document.body.innerHTML = '<div hidden>\\('+texCommands.map(e => '\\def'+e).join(' ')+'\\)</div>'+document.body.innerHTML;
