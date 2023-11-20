class Bird {
  constructor() {
    this.spritewidth = 1920;
    this.spriteheight = 1080;
    this.width = this.spritewidth / 10;
    this.height = this.spriteheight / 10;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 7  + 4;
    this.directionY = Math.random() * 7 - 1;
    this.deleteentity = false;
    this.image = new Image();
    this.image.src = 'img/pajaro2.png';
    this.image.onclick = this.reproducirSonido.bind(this);

    // Genera colores RGBA aleatorios para el fondo
    this.bgColor = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: 0
    };
  }
  
  reproducirSonido() {
    const audio = document.getElementById('sonidoPajaro');
    audio.play();}

  update(timedifference) {
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.directionY = this.directionY * -1;
    }
    this.x -= this.directionX;
    this.y += this.directionY; // el vuelo de arriba hacia abajo
    if (this.x < 0 - this.width) this.deleteentity = true;
  }


  draw() {
    //colores aleatorios en el fondo
    context.fillStyle = `rgba(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b}, ${this.bgColor.a})`;
    for (let i = 0; i < this.width; i += 3) {
      for (let j = 0; j < this.height; j += 3) {
        context.fillRect(this.x + i, this.y + j, 5, 5); 
        
        
      }
    }
    

    context.save(); // Guarda el estado actual del contexto
    context.scale(-1, 1); // Voltea la imagen horizontalmente
    context.drawImage(
      this.image,
      0,
      0,
      this.spritewidth,
      this.spriteheight,
      -this.x - this.width, // Cambia la posición X para que la imagen se dibuje correctamente
      this.y,
      this.width,
      this.height
    );
    context.restore(); // Restaura el estado anterior del contexto
  }
}

