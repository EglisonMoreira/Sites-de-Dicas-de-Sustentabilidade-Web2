function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const button = document.querySelector('.btn');
    const colors = ['red', 'blue', 'green', 'yellow', 'orange']; // Adicione mais cores se desejar
    let currentIndex = 0;

    function changeBorderColor() {
      button.style.borderColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }
    setInterval(changeBorderColor, 1000); // Altera a cor da borda a cada segundo