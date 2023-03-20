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

function viewOne(id,className) {
    var isHidden = document.getElementById(id).hidden
    document.querySelectorAll('.'+className).forEach(e => e.hidden = true);
    if(isHidden) {
        document.getElementById(id).hidden = false;
    }
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