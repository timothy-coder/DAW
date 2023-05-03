function actualizarBarraDeCarga(porcentaje) {
    const barraDeCarga = document.querySelector('.barra-de-carga-llena');
    const porcentajeTexto = document.querySelector('.porcentaje');
    barraDeCarga.style.width = porcentaje + '%';
    porcentajeTexto.textContent = porcentaje + '%';
  }
  