function gerarQRCode() {
    var inputUsuario = document.querySelector('textarea').value
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=h&chl='
    var conteudoQRCode = googleChartAPI + encodeURIComponent(inputUsuario)
    document.querySelector('#QRCodeImage').src = conteudoQRCode
}