rdoPersonality.onchange = function() {
    let userChoice =
        $("input[name = rdoPersonality]:checked").prop("value")
    if (rdoPersonality == 0)
        lblMessage.textContent = `I would agree that you are an '${userChoice}' person too!`
    else if (rdoPersonality == 1)
        lblMessage.textContent = `I would agree that you are an '${userChoice}' person too!`
    else if (rdoPersonality == 2)
        lblMessage.textContent = `I would agree that you are an '${userChoice}' person too!`
    else(rdoPersonality == 3)
    lblMessage.textContent = `I would agree that you are an '${userChoice}' person too!`
}

btnExerciseForm.onclick = function() {
    ChangeForm(favExercise)
}