//Firebase-start
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAkd1_Dvo0gIjA6UIKR9m-WLBOixf7GU2A",
    authDomain: "mrakesh---clone-netflix.firebaseapp.com",
    projectId: "mrakesh---clone-netflix",
    storageBucket: "mrakesh---clone-netflix.appspot.com",
    messagingSenderId: "770631435020",
    appId: "1:770631435020:web:fc9d4c8dbff28f562fff29"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = getDatabase();
//Firebase-end
//Toggle Sign In-Up
let signInPage = document.getElementById('Sign-in');
let signUpPage = document.getElementById('Sign-up');

document.getElementById('Sign-in-now').addEventListener('click', signin);
document.getElementById('Sign-up-now').addEventListener('click', signup);

function signin() {
    signUpPage.style.display = "none";
    signInPage.style.display = "flex";
}
function signup() {
    signInPage.style.display = "none";
    signUpPage.style.display = "flex";
}
//Authentication
//Sign-Up
let signUpBtn = document.getElementById('sign-up-btn');
signUpBtn.addEventListener('click', () => {
    let Name = document.getElementById('Name').value;
    let email = document.getElementById('up-usermail').value;
    let password = document.getElementById('up-pass').value;
    email = email.substring(0, email.length - 4); //to remove .com
    
    if (Name === "" || email === "" || password === "") {
        alert('Please enter details again');
    }
    else {
        set(ref(db, "user/" + email), {
            NameofUser: Name,
            EmailId: email,
            Password: password
        })
        alert('successful registration');
        signin();
    }
})
//Sign-In
let signInBtn = document.getElementById('sign-in-btn');
signInBtn.addEventListener('click', () => {
    let enteredEmail = document.getElementById('in-usermail').value;
    let enteredPass = document.getElementById('in-pass').value;
    enteredEmail = enteredEmail.substring(0, enteredEmail.length - 4); //to remove .com
    if (enteredEmail !== "" && enteredPass !== "") 
    {
        const dbref = ref(db);
        get(child(dbref, "user/" + enteredEmail)).then((snapshot) => {
            if (snapshot.exists()) 
            {
                if (enteredEmail === snapshot.val().EmailId) 
                {
                    if (enteredPass === snapshot.val().Password) 
                    {
                        alert("Welcome " + snapshot.val().NameofUser);
                        myWindow = window.open("User/browse.html", "_self");
                    }
                    else alert("Invalid Password");
                }
                else alert("Invalid Email");
            }
            else alert("Something Wrong");
        })
    }
    else alert("Details are incomplete");
})
