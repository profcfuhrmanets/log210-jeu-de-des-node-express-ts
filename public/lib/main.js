// si vous modifié ce fichier, "npm run build" pour que votre server utilise la nouvelle version, sinon le browser conserve l'ancienne version en cache.
window.addEventListener("load", function()
{
    document.querySelectorAll("button.lancer").forEach(function(element)
    {
        element.addEventListener("click", function()
        {
            fetch("/api/v1/jeu/jouer/" + this.id)
            .then(function()
            {
                location.reload();
            });
        });
    });

    document.querySelectorAll("button.terminer").forEach(function(element)
    {
        element.addEventListener("click", function()
        {
            fetch("/api/v1/jeu/terminerJeu/" + this.id)
            .then(function()
            {
                location.reload();
            });
        });
    });

    demarrer.addEventListener("click", function()
    {
        nomDuFormulaire = formNouveauJoueur.elements["nom"].value.trim();

        if (nomDuFormulaire.length > 0)
        {
            fetch("/api/v1/jeu/demarrerJeu", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({nom: nomDuFormulaire})
            }).then(function()
            {
                location.reload();
            })
        }
        else
        {
            alert("Spécifier un nom, SVP.");
        }
    });
});
