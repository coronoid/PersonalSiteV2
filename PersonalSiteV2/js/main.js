//Copyright year
let copyrightYear = document.getElementById('copyrightYear');
copyrightYear.textContent = new Date().getFullYear();

function sendContact() {
    let name = document.getElementById('tbName').value;

    let email = document.getElementById('tbEmail').value;

    let subject = document.getElementById("tbSubject").value;

    let message = document.getElementById('tbMessage').value;

    let reply = document.getElementById('reply');

    if (!name) {
        let tbName = document.getElementById('tbName');
        reply.style.color = 'darkred';
        reply.textContent = "ERROR: Name Must Be Filled In";
    }
    else
        if (!validateEmail(email)) {
            reply.style.color = 'red';
            reply.textContent = "ERROR: Email Must Be Filled In With Correct Format";
        }
        else
            if (!subject) {
                reply.style.color = 'red';
                reply.textContent = "ERROR: Subject Must Be Filled In";
            }
            else
                if (!message) {
                    reply.style.color = 'darkred';
                    reply.textContent = "ERROR: Message Must Be Filled In";
                }
                else {
                    reply.style.color = 'green';
                    reply.textContent = "Thank's for contacting me, I'll reply to you as soon as possible!";
                }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}