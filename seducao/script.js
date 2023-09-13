new Glide('.glide', {
  type: 'carousel', // Tipo de carrossel
  perView: 1, // Quantidade de slides visíveis
  focusAt: 'center', // Centraliza o slide atual
  gap: 20, // Espaçamento entre os slides
  autoplay: 3000, // Reprodução automática a cada 3 segundos
  hoverpause: true // Pausa a reprodução automática ao passar o mouse
}).mount();