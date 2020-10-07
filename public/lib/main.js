// si vous modifié ce fichier, "npm run build" pour que votre server utilise la nouvelle version, sinon le browser conserve l'ancienne version en cache.
$(function () {
    $("button.index").click(function () {
        location.href = "/"
    });

    $("button.hello").click(function () {
        console.log("redirect to allo");
        location.href = "/api/v1/jeu/allo"
    });

    $("button.lancer").click(function () {
        $.get("/api/v1/jeu/jouer/" + $(this).attr('id'), function (data, status) {
            window.location.reload(true);
        });
    });
    $("button.terminer").click(function () {
        $.get("/api/v1/jeu/terminerJeu/" + $(this).attr('id'), function (data, status) {
            window.location.reload(true);
        });
    });
    $("button.demarrer").click(function () {
        console.log("button demarrer clicked");
        nomDuFormulaire = document.getElementById("formNouveauJoueur").elements["nom"].value;
        if (nomDuFormulaire !== '') {
            $.post("/api/v1/jeu/demarrerJeu",
                {nom: nomDuFormulaire},
                function (data, status) {
                    // alert("Data: " + data + "\nStatus: " + status);
                }).always(function() { // traiter l'erreur
                    window.location.reload(true);
                });
        } else {
            alert("Spécifier un nom, SVP.");
        }
    });
    console.log('ready!!'); // sanity check
});

$('.entry').on('click', function () {
    var entry = this;
    var post_id = $(this).find('h2').attr('id');
    $.ajax({
        type: 'GET',
        url: '/delete' + '/' + post_id,
        context: entry,
        success: function (result) {
            if (result.status === 1) {
                $(this).remove();
                console.log(result);
            }
        }
    });
});
