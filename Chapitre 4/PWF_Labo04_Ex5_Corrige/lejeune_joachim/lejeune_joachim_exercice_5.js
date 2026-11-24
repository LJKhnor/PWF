// Labo 4 — Exercice 5 : une page qui parle

// Étape 2 : vérifier que le fichier est bien relié à la page (message visible dans la console, F12)
console.log("script.js est bien chargé");

// Étape 3 : demander le prénom et le ranger dans une constante (il ne changera plus)
const prenom = prompt("Quel est votre prénom ?");

// Étape 4 : la « recette » pour lire l'heure (l'objet Date sera expliqué au chapitre 6)
const maintenant = new Date();
const h = maintenant.getHours();
const m = maintenant.getMinutes();

// Bonus : forcer deux chiffres pour les minutes, pour afficher 14h05 et pas 14h5
const mm = String(m).padStart(2, "0");

// Étapes 3 et 4 : un seul message construit avec un gabarit,
// montré au visiteur (alert) et au développeur (console.log)
const message = `Bonjour ${prenom}, il est ${h}h${mm}.`;
alert(message);
console.log(message);

// Étape 5 : le piège du prompt
const age = prompt("Quel est votre âge ?");
console.log(`Dans 10 ans, vous aurez ${age + 10} ans.`);
console.log(typeof age);

// Explication attendue (réponse 27) :
// la console affiche « Dans 10 ans, vous aurez 2710 ans. » puis « string ».
// prompt renvoie TOUJOURS du texte : age vaut "27", pas 27.
// Entre un texte et un nombre, + ne calcule pas, il colle : "27" + 10 donne "2710".
// Correction au chapitre 5 : convertir d'abord le texte en nombre avec Number(age).
