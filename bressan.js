 // Índices de cada carrossel
    let indices = {1: 0, 2: 0, 3: 0, 4: 0};

    function mudarSlide(card, direcao) {
      const slides = document.getElementById(`slides${card}`);
      const total = slides.children.length;
      indices[card] = (indices[card] + direcao + total) % total;
      slides.style.transform = `translateX(${-indices[card] * 100}%)`;
    }