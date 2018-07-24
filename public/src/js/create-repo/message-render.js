'use strict'

function renderConfirmMsg(msg, msgType) {
    var respMsg = document.getElementById('msgRendered');
    var header = document.getElementById('responseMsg');

    if (respMsg !== null) {
        header.removeChild(respMsg);
    }
    var msgRendered = document.createElement('div')

    if (msgType === "error") {

        msgRendered.setAttribute('class', 'alert alert-danger alert-dismissible fade show w-100');
        msgRendered.setAttribute('role', 'alert');
        msgRendered.setAttribute('id', 'msgRendered');
    } else if (msgType === "success") {

        msgRendered.setAttribute('class', 'alert alert-success alert-dismissible fade show w-100');
        msgRendered.setAttribute('role', 'alert');
        msgRendered.setAttribute('id', 'msgRendered');
    }

    var strong = document.createElement('strong');
    var textNode = document.createTextNode(msg);
    strong.append(textNode);

    var closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('class', 'close');
    closeButton.setAttribute('data-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');
    //closeButton.onclick = closeMsgBox;

    var xicon = document.createTextNode('x');
    var spanDiv = document.createElement('span');
    spanDiv.setAttribute('aria-hidden', 'true');
    spanDiv.setAttribute('class', 'msg');
    spanDiv.append(xicon);
    closeButton.append(spanDiv);

    msgRendered.append(strong);
    msgRendered.append(closeButton);

    header.append(msgRendered);

    $("#msgRendered").fadeTo(2000, 500).slideUp(500, function () {
                       $("#msgRendered").slideUp(500);
    });
}

export { renderConfirmMsg };
