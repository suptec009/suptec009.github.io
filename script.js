/* 
/Afficher un message en alert et un bloc confirm
alert("Hi bro !");
comfirm("Merci de patienter ");

/ Afficher un message à l'écran
documment.write("Hi bro ! ");

/ Afficher un message dans la console
console.log("Hi bro !");

/ Declarer une variable (javascript étant un langage à typage faible)
var name = "Ismael";

/ Trouver et afficher le type d'une variable
document.write(typeof name);

/ Faire une saisie au clavier 
var name = prompt("Comment t'appelles-tu ? ");

/ Caster une variable
age = parseInt(age);
    / or
    age = parseFloat(age);

/ Déclarer une constante
const pi = 3.14;
    / pour les tableaux et les objets le contenu restent modifiable

/ Opérateurs
    / === (comparer les valeurs ainsi que le type)
    / == (comparer les valeurs uniquement)
    / != (comparer les valeurs uniquement)
    / !== (comparer les valeurs ou les types)

/ Créer une fonction
    function helloWorld()
    {
        document.write("Hello");
        document.write("World");
    }

    / paramètres obligatoires
    function sum(nb1, nb2)
    {
        let result = nb1 + nb2;
        return result;
    }

    /  paramètre optionnel(donner une valeur par défaut)
    function sum(nb1, nb2 = 10)
    {
        let result = nb1 + nb2;
        return result;
    }

    // Avoir une fonction imbriquée dans une autre c'est avoir une fermeture(closure en français)

    / Fonction flèchée 
    (<arguments>) => {<instructions>}

    /// Programmation orientée objet 
    /créer une classe
    class MusicPlayer
    {
        constructor(format) // valeur par défaut pour les attributs // constructor(format = "MPEG4")
        {
            this.format = format;// initialisation
        }
        // Méthode statique
        static hello()
        {
            return "Hello World ! ";
        }
    }
    // Classe : pas d'atibuts privés
    //          pas d'attirbuts statiques
    / rajouter un attribut à la classe
    MusicPlayer.prototype.filenme = "C:";
    / rajouter une méthode à la classe
    MusicPlayer.prototype.hello = function()
    {
        return "Hello !";
    };

    / supprimer un attribut à l'objet
    delete song.filename;


    / Syntaxe intermédiaire pour avoir des attributs privés et statiques (Utilisation de prototype)
    function MusicPlayer(filetype)
    {
        var filetype = filetype;

        this.filetype = function()
        {
            return filetype;
        }
    }
    // attribut statique
    MusicPlayer.data = 14; 
    // méthode statique
    MusicPlayer.hello = function()
    {
        return "Hello World ! ";
    }
*/
