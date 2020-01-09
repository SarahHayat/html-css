document.querySelector('#choice-1').addEventListener('change', function() {

    // On stock la valeur du select dans la variable "value"
    let value       = this.value;

    // On stock l'élément #choix-niveau dans la variable "select"
    let select      = document.querySelector('#level-choice-1');

    // On défini une variable qui passera a vraie quand une selection par défauit sera faite
    let hasSelected = false;


    // On parcourt toutes les options du select précédemment enregistré
    select.querySelectorAll('option').forEach(function(item, i) {

        // On enregistre les classes de l'option courante dans la variable "classList"
        let classList = item.classList;

        // SI la variable "value" est inclus dans le tableau des classes "classList"
        // ALORS on retirer la classe "hidden" (on affiche)
        // SINON on ajoute la classe "hidden" (on cache)
        if( classList.contains(value) ) {
            if(!hasSelected) item.selected = 'selected';
            hasSelected = true;
            item.classList.remove('hidden');
        }
        else item.classList.add('hidden');
    });

});
document.querySelector('#choice-2').addEventListener('change', function() {

    // On stock la valeur du select dans la variable "value"
    let value       = this.value;

    // On stock l'élément #choix-niveau dans la variable "select"
    let select      = document.querySelector('#level-choice-2');

    // On défini une variable qui passera a vraie quand une selection par défauit sera faite
    let hasSelected = false;


    // On parcourt toutes les options du select précédemment enregistré
    select.querySelectorAll('option').forEach(function(item, i) {

        // On enregistre les classes de l'option courante dans la variable "classList"
        let classList = item.classList;

        // SI la variable "value" est inclus dans le tableau des classes "classList"
        // ALORS on retirer la classe "hidden" (on affiche)
        // SINON on ajoute la classe "hidden" (on cache)
        if( classList.contains(value) ) {
            if(!hasSelected) item.selected = 'selected';
            hasSelected = true;
            item.classList.remove('hidden');
        }
        else item.classList.add('hidden');
    });

});