OpenList = id => {
    var list = document.getElementById(id);
    list.hidden = !list.hidden;
}
Bold = id => {
    var element = document.getElementById(id);
    var style = 'font-weight:bold';
    if(element.hasAttribute('style')) {
        element.removeAttribute('style');
    }
    else {
        element.setAttribute('style',style);
    }
}