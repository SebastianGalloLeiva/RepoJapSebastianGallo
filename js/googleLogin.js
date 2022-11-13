import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { auth } from './firebase.js'

const googleButton = document.querySelector('#boton-google')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        let user = (credentials.user.email).replace('"', '')
        //let email = user.replace('"', '')
        localStorage.setItem("email", user)
        window.location = 'portada.html'

    } catch (error) {
        alert(error)
    }

})