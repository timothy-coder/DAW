//Se llama al evento scroll
window.addEventListener('scroll', function() {

    //coloco constantes de tag con id o class
    const colorHeader = document.getElementById('headerS1');
    const colorLetras = document.querySelectorAll('.aColorS1');
    const imagen = document.getElementById('LogoBlancoS1');
    //Obtencion de la posicion
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) {
        //cambia a color blanco el header
        colorHeader.classList.add('cambiar');

        //recorre cada clase encontrada y se cambia el color a negro
        for (let i = 0; i < colorLetras.length; i++) {
            colorLetras[i].classList.add('cambiar');
          }

        //se cambia el src de la imagen
        imagen.src = "../img/logo-negro.png";
    } else {

        // En el else se remove los valores agregados
        colorHeader.classList.remove('cambiar');
        for (let i = 0; i < colorLetras.length; i++) {
            colorLetras[i].classList.remove('cambiar');
          }
        
        imagen.src = "../img/logo-blanco.png";
    }
  });