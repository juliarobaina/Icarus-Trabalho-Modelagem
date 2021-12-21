$('#close-modal').click(() => {
    $('#modal').hide()
})

let lastModalType = ''
function clearLastModalType() {
    lastModalType = ''
}

function wasErrorModal() {
    return lastModalType == 'error'
}

function wasModalMsg() {
    return lastModalType == 'message'
}

function modalError(message) {
    lastModalType = 'error'
    modal('Alerta!', message)   
}

function modalMsg(message) {
    lastModalType = 'message'
    modal('Info', message)
}

function modal(title, message) {
    $('#modal-title').text(title)
    $('#modal-message').text(message)
    $('#modal').show()
}