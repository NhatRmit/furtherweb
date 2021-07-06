function load() {
    var userStr = localStorage.getItem("user");
    var user = JSON.parse(userStr);

    if (user!==null){
        if(confirm("Do you want to reload your infor?")){
            document.querySelector("#fname").value = user.fname;
            document.querySelector("#lname").value = user.lname;
            document.querySelector("#yob").value = user.yob;
            document.querySelector("gender").value = user.gender;
        }
    }
}

function signUp_1(){
    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    yob = document.querySelector("#yob").value;
    gender = document.querySelector("#gender").value;

    var user = {
        fname: fname,
        lname: lname,
        yob: yob,
        gender: gender
    }

    localStorage.setItem("user", JSON.stringify(user))
}

function signUp_2(){
    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    yob = document.querySelector("#yob").value;
    gender = document.querySelector("#gender").value;

    var user = {
        fname: fname,
        lname: lname,
        yob: yob,
        gender: gender
    }

    var userListStr = localStorage.getItem("user_list");
    var userList = JSON.parse(userListStr);

    if(userList == null){
        alert("NULL");
        userList = [];
    }

    userList.push(user)

    localStorage.setItem("user_list", JSON.stringify(userList))
}

function showList(){
    var userListStr = localStorage.getItem("user_list");
    var userList = JSON.parse(userListStr);
    console.log(userList)
    var row = '';
    for (let u of userList){
        console.log(u);
        row += `<tr>
            <td>${u.fname}</td>
            <td>${u.lname}</td>
            <td>${u.yob}</td>
            <td>${u.gender}</td>
            </tr>`
    }

    document.querySelector("#list").innerHTML = row;
}