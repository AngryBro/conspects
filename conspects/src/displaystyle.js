const displaystyle = tex => {
    tex = tex.replace(/\\frac/g, '\\displaystyle\\frac');
    return tex;
};

export default displaystyle;