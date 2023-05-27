import Config from "../module.js"

function Accueil(doc, options){

    // LOAD CSS 
        let cssNormalService = document.getElementById('cssNormalService')
        cssNormalService.href = '/css/module/style.css';
        let cssResponsiveService = document.getElementById('cssResponsiveService')
        cssResponsiveService.href = '/css/module/responsive.css';
    // LOAD CSS 

    let ShellPassWMessageErrorCheckLongueurHTML
    let ShellPassWMessageSuccessCheckLongueurHTML
    let ShellPassWMessageErrorCheckNombreHTML
    let ShellPassWMessageSuccessCheckNombreHTML
    let ShellPassWMessageErrorCheckSpecialCharHTML
    let ShellPassWMessageSuccessCheckSpecialCharHTML
    let progressBarHTML

    let ContainerPrincipaleContent = document.getElementById("ShellBody");
    ContainerPrincipaleContent.innerHTML = ""

    let cadreService = document.createElement('div')
    cadreService.classList.add('cadre__service')
        {
            // let logoServiceHTML = document.createElement('img')
            // logoServiceHTML.classList.add('cadre__service_logo')
            // logoServiceHTML.src = options.logo
            // cadreService.append(logoServiceHTML)
            // let titleHTML = document.createElement('h2')
            // titleHTML.innerText = options.app
            // cadreService.append(titleHTML)
            let descriptionHTML = document.createElement('small')
            descriptionHTML.innerText = Config.description
            cadreService.append(descriptionHTML)
            
        }
    ContainerPrincipaleContent.append(cadreService)

    let containerHTML = document.createElement('div')
    containerHTML.classList.add('container__application-passwchecker')

        let ShellPassWLabelPasswordHTML = document.createElement("div")
        ShellPassWLabelPasswordHTML.classList.add("ShellPassWC__label-password")
        ShellPassWLabelPasswordHTML.innerText = "Entrez votre mot de passe : "
        containerHTML.append(ShellPassWLabelPasswordHTML)

        let ShellPassWInputPasswordHTML = document.createElement("input")
        ShellPassWInputPasswordHTML.classList.add("ShellPassWC__input-password")
        ShellPassWInputPasswordHTML.type = "password"
        containerHTML.append(ShellPassWInputPasswordHTML)

        ShellPassWInputPasswordHTML.addEventListener("input", function() {

            let chaine = ShellPassWInputPasswordHTML.value
            let longueurMinimum = 8;
            let aUnNombre = /[0-9]/;
            let aUnCaractereSpecial = /[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

            if (chaine.length < longueurMinimum) {
                ShellPassWMessageErrorCheckLongueurHTML.style.display = null 
                ShellPassWMessageSuccessCheckLongueurHTML.style.display = "none"
                progressBarHTML.value = "0"
            } else {
                ShellPassWMessageErrorCheckLongueurHTML.style.display = "none"
                ShellPassWMessageSuccessCheckLongueurHTML.style.display = null
                progressBarHTML.value = "33.33"
            }

            if (!aUnNombre.test(chaine)) {
                ShellPassWMessageErrorCheckNombreHTML.style.display = null 
                ShellPassWMessageSuccessCheckNombreHTML.style.display = "none"
                progressBarHTML.value = progressBarHTML.value
            } else {
                ShellPassWMessageErrorCheckNombreHTML.style.display = "none"
                ShellPassWMessageSuccessCheckNombreHTML.style.display = null
                progressBarHTML.value = progressBarHTML.value + 33.33
            }

            if (!aUnCaractereSpecial.test(chaine)) {
                ShellPassWMessageErrorCheckSpecialCharHTML.style.display = null
                ShellPassWMessageSuccessCheckSpecialCharHTML.style.display = "none"
                progressBarHTML.value = progressBarHTML.value
            } else {
                ShellPassWMessageErrorCheckSpecialCharHTML.style.display = "none"
                ShellPassWMessageSuccessCheckSpecialCharHTML.style.display = null
                progressBarHTML.value = progressBarHTML.value + 33.33
            }

            if(progressBarHTML.value == 99.99 || progressBarHTML.value == 100){
                chkUtil()
                .then(result => {

                    gtag('event', 'service_passwchecker', {
                        'usage': true
                    })

                    console.log(result)
                })
                .catch(err => {
                    alert(err)
                })
            }

        })

        let ShellPassWButtonHTML = document.createElement("button")
        ShellPassWButtonHTML.classList.add("ShellPassWC__input-show")
        ShellPassWButtonHTML.innerText = "Montré"
        containerHTML.append(ShellPassWButtonHTML)

        ShellPassWButtonHTML.addEventListener("click", function() {

            let typeInput = ShellPassWInputPasswordHTML.type
            if(typeInput === "password"){
                ShellPassWInputPasswordHTML.type = "text"
            } else {
                ShellPassWInputPasswordHTML.type = "password"
            }

        })

        let ShellPassWCadreInfosHTML = document.createElement("div")
        ShellPassWCadreInfosHTML.classList.add("ShellPassWC__cadre")

            ShellPassWMessageErrorCheckLongueurHTML = document.createElement("div")
            ShellPassWMessageErrorCheckLongueurHTML.style.display = "none"
            ShellPassWMessageErrorCheckLongueurHTML.classList.add("ShellPassWC__message-error")
            ShellPassWMessageErrorCheckLongueurHTML.innerText = "La longueur minimal doit être de 8 caractères."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageErrorCheckLongueurHTML)

            ShellPassWMessageSuccessCheckLongueurHTML = document.createElement("div")
            ShellPassWMessageSuccessCheckLongueurHTML.style.display = "none"
            ShellPassWMessageSuccessCheckLongueurHTML.classList.add("ShellPassWC__message-success")
            ShellPassWMessageSuccessCheckLongueurHTML.innerText = "La longueur minimal est de 8 caractères."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageSuccessCheckLongueurHTML)

            ShellPassWMessageErrorCheckNombreHTML = document.createElement("div")
            ShellPassWMessageErrorCheckNombreHTML.style.display = "none"
            ShellPassWMessageErrorCheckNombreHTML.classList.add("ShellPassWC__message-error")
            ShellPassWMessageErrorCheckNombreHTML.innerText = "Il est conseillé d'avoir minimum un chiffre ou un nombre dans votre mot de passe."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageErrorCheckNombreHTML)

            ShellPassWMessageSuccessCheckNombreHTML = document.createElement("div")
            ShellPassWMessageSuccessCheckNombreHTML.style.display = "none"
            ShellPassWMessageSuccessCheckNombreHTML.classList.add("ShellPassWC__message-success")
            ShellPassWMessageSuccessCheckNombreHTML.innerText = "Minimum 1 chiffre ou un nombre dans votre mot de passe."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageSuccessCheckNombreHTML)

            ShellPassWMessageErrorCheckSpecialCharHTML = document.createElement("div")
            ShellPassWMessageErrorCheckSpecialCharHTML.style.display = "none"
            ShellPassWMessageErrorCheckSpecialCharHTML.classList.add("ShellPassWC__message-error")
            ShellPassWMessageErrorCheckSpecialCharHTML.innerText = "Il est conseillé d'avoir minimum un caractères spécial dans votre mot de passe."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageErrorCheckSpecialCharHTML)

            ShellPassWMessageSuccessCheckSpecialCharHTML = document.createElement("div")
            ShellPassWMessageSuccessCheckSpecialCharHTML.style.display = "none"
            ShellPassWMessageSuccessCheckSpecialCharHTML.classList.add("ShellPassWC__message-success")
            ShellPassWMessageSuccessCheckSpecialCharHTML.innerText = "Minimum 1 caractère spécial dans votre mot de passe."
            ShellPassWCadreInfosHTML.append(ShellPassWMessageSuccessCheckSpecialCharHTML)

        containerHTML.append(ShellPassWCadreInfosHTML)

        progressBarHTML = document.createElement("progress")
        progressBarHTML.classList.add("ShellPassWC__progressbar")
        progressBarHTML.value = "0"
        progressBarHTML.max = "100"
        progressBarHTML.innerText = "0 %"
        containerHTML.append(progressBarHTML)

    ContainerPrincipaleContent.append(containerHTML)

    async function chkUtil() {

        const response = await fetch('/api/passwchecker/utilisation', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const password = await response.json();
        return password;

    }

}

export default Accueil;