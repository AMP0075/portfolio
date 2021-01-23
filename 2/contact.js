document.getElementById("btn-submit").addEventListener('click', () => {
    window.open('mailto:test@example.com');
})

var c = 0;
document.getElementById("submit-btn").addEventListener('click', () => {
    var f1 = 0;
    var f2 = 0;
    var f3 = 1;

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    var table = document.getElementById("details");
    var k = table.rows.length;

    if (name == "" || age == "" || email == "" || msg == "") {
        f2 = 1;
        alert("Please Fill in all the input fields!");
    } else if (age >= 155) {
        f2 = 1;
        alert("Please Enter a valid age!");
    } else {
        for (var i = 0; i < k; i++) {
            if (table.rows[i].cells[2].innerHTML == email) { /* Assuming that only mail id will be unique, there can be people with same name, age and sending similar messages. */
                f1 = 1;
                alert('Email Already exists!');
                break;
            }
        }
        if (!(validateEmail(email))) {
            f3 = 0;
            alert("Please Enter a valid email!");
        }
        if (f1 != 1 && f2 != 1 && f3 != 0) {
            c++;
            var row = table.insertRow(c);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = name;
            cell2.innerHTML = age;
            cell3.innerHTML = email;
            cell4.innerHTML = msg;
        }
    }
})

function clear1() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('email').value = "";
    document.getElementById('msg').value = "";
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}