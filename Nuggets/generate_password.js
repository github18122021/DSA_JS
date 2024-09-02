

function generate_password(length) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let password = "";
    for(let i = 0; i < length; i++)  {
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }

    console.log(password);
    console.log(password.length);
    return password;
}


generate_password(10); 
generate_password(20);
generate_password(30);
generate_password(40);
generate_password(50);
generate_password(60);