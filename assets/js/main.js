(function() {
    var v = document.getElementsByClassName("reproductor1");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb1(v[n].dataset.id);
        p.onclick = labnolIframe1
        v[n].appendChild(p);
    }
})();

function labnolThumb1(id) {
    return '<img src="../assets/img/foto_vd_PE.png">';
}

function labnolIframe1() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    this.parentNode.replaceChild(iframe, this);
}

(function() {
    var v = document.getElementsByClassName("reproductor4");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb4(v[n].dataset.id);
        p.onclick = labnolIframe4;
        v[n].appendChild(p);
    }
})();

function labnolThumb4(id) {
    return '<img src="../assets/img/foto_vd_LVP.png">';
}

function labnolIframe4() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    this.parentNode.replaceChild(iframe, this);
}
