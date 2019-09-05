$(function () {
    $("button.lancer").click(function () {
        $.get("/api/v1/jeu/jouer/" + $(this).attr('id'), function (data, status) {
            //alert("Data: " + data + "\nStatus: " + status);
            window.location.reload(true);
        });
    });
    $("button.terminer").click(function () {
        $.get("/api/v1/jeu/terminerJeu/" + $(this).attr('id'), function (data, status) {
            //alert("Data: " + data + "\nStatus: " + status);
            window.location.reload(true);
        });
    });
    $("button.demarrer").click(function () {
        nomDuFormulaire = document.getElementById("formNouveauJoueur").elements["nom"].value;
        if (nomDuFormulaire !== '') {
            $.get("/api/v1/jeu/demarrerJeu/" + nomDuFormulaire,
                function (data, status) {
                    //alert("Data: " + data + "\nStatus: " + status);
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