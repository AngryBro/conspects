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
OpenLists = (id,ids) => {
    OpenList(id);
    for(var i = 0; i<ids.length; i++) {
        document.getElementById(ids[i]).hidden = true;
    }
}
HiddenHeader = (id,ids) => {
    var header = document.getElementById(id);
    for(var i = 0; i<ids.length; i++) {
        if(!document.getElementById(ids[i]).hidden) {
            header.hidden = false;
            return;
        }
    }
    header.hidden = true;
    return;
}

var lastPageId = 'main';
function view(id,title) {
    document.title = title;
    var currentPage = document.getElementById(id);
    var lastPage = document.getElementById(lastPageId);
    lastPage.hidden = true;
    currentPage.hidden = false;
    lastPageId = id;
    document.location.href='#'+id;
}