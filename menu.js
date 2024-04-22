    window.addEventListener("scroll", function(){
        let header = document.querySelector('#header')
        header.classList.toggle('rolagem',window.scrollY > 250)
    })

    window.addEventListener('scroll', function() {
        var botaoVoltar = document.getElementById('botao-voltar');
        if (window.scrollY > 50 * window.innerHeight / 50) {
            botaoVoltar.style.display = 'block'; // Mostra o botão
        } else {
            botaoVoltar.style.display = 'none'; // Oculta o botão
        }
    });

    function voltarAoInicio() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

