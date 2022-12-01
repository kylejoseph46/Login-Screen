let username = document.getElementById('username')
let password = document.getElementById('password')
let sign_up_button = document.getElementById('sign_up_button')
let sign_in_button = document.getElementById('sign_in_button')


const Database = {

}

const store_info = () => {
    const user = username.value
    const pass = password.value
    Database[user] = pass
    console.log(Database)
    username.value = ""
    password.value = ""
}

const check_info = () => {
    let correct_user = 0
    Object.keys(Database).forEach(key => {
        if (username.value == key)
            correct_user = 1
    })
    console.log("Diff")
    let correct_pass = 0
    Object.values(Database).forEach(val => {
        if (password.value == val)
            correct_pass = 1
    })
    if (correct_user == 1 && correct_pass == 1) {
        alert("Login successful")
    }
    else {
        alert("Login unsuccessful")
    }
}

sign_up_button.addEventListener("click", store_info)
sign_in_button.addEventListener("click", check_info)
