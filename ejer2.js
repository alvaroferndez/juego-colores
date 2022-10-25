
      function juego(){
            span = document.getElementsByTagName("span")
            div = document.getElementsByTagName("div")
            h3 = document.getElementsByTagName("h3")
            h3[0].innerHTML = ""

            function generarNumero(numero){
                  return (Math.random()*numero).toFixed(0);
            }

            function colorRGB(){
                  rgb = [generarNumero(255),generarNumero(255),generarNumero(255)]
                  return(rgb)
            }

            solucion = []
            for (let i=0; i<span.length; i++){
                  numero = colorRGB()[i]
                  span[i].innerHTML = numero
                  solucion.push(numero)
            }

            for (let i=0; i<div.length; i++){
                  div[i].style.backgroundColor = "rgb(" + colorRGB()[0] + "," +  colorRGB()[1] + "," + colorRGB()[2] + ")"
            }

            divsolucion = Math.floor(Math.random()*5);
            div[divsolucion].style.backgroundColor = "rgb(" + solucion[0] + "," +  solucion[1] + "," + solucion[2] + ")"
            
            for (let i=0; i<div.length; i++){
                  div[i].addEventListener("click", (e) => {
                        comprobar = "rgb(" + solucion[0] + ", " +  solucion[1] + ", " + solucion[2] + ")"
                        if (e.target.style.backgroundColor == comprobar){
                              h3[0].innerHTML = "Has ganado!"
                        }
                  })
            }
      }
      
      window.addEventListener("load",() =>{
            juego();

            p = document.getElementsByTagName("p");
            p[0].addEventListener("click", juego);
      })
