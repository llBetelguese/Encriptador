//expresion regular para la verificacion en la entrada de mi informacion
const regex = /^([a-z?!¿¡]|\s)+$/


function Copiar(){
    let Texto = document.getElementById("TextoDeSalida").textContent;
    let BottonCopiar = document.getElementById("Copiar");
    let ImagenMuneco = document.getElementById("Muneco");
    console.log(Texto);
    navigator.clipboard.writeText(Texto).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.log('Error al copiar el texto');
    });
    document.getElementById("TextoDeSalida").textContent = "Ningun Mensaje fue encontrado.\n Ingrese el texto que desees encriptar o desencriptar.\n";
    BottonCopiar.style.display = 'none';
    ImagenMuneco.style.display = 'block';
    elementoHTML.style.height = '50%';
    return;
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    elementoHTML.style.height = '80%';
    let textarea = document.getElementById("TextoDeEntrada");
    textarea.value = "";
    return;
}


function Desencriptador(){

    let Texto = document.getElementById("TextoDeEntrada").value;
    let BottonCopiar = document.getElementById("Copiar");
    let ImagenMuneco = document.getElementById("Muneco");
    if(regex.test(Texto)){
    
        console.log("Tu texto cumple con lo establecido "+Texto);
        let tamanoCadena = Texto.length;
        let i = 0;
        let textoEncriptado = '';
        console.log(tamanoCadena)
        
        while( i < tamanoCadena){
            
            let cadenaAuxiliar = Texto[i];
            
            //Deberia usar un switch en lugar de un else if? ya que la comparacion son con valores fijos y no un rango
            if(Texto[i] === 'a'){
                if(Texto[i+1] === 'i'){
                    cadenaAuxiliar = 'a';
                    i++; 
                }
                }else if( Texto[i] === 'e'){
                    if(Texto[i+1] === 'n' && Texto[i+2] === "t" && Texto[i+3] === "e" && Texto[i+4] === "r"){ 
                        cadenaAuxiliar = 'e';    
                        i = i+4;
                    }

                    }else if(Texto[i] === 'i'){
                    if(Texto[i+1] === 'm' && Texto[i+2] === "e" && Texto[i+3] === "s"){ 
                        cadenaAuxiliar = 'i';    
                        i = i+3;
                    }
                       }else if(Texto[i] === 'o'){
                        if(Texto[i+1] === 'b' && Texto[i+2] === "e" && Texto[i+3] === "r"){ 
                            cadenaAuxiliar = 'o';    
                            i = i+3;
                        }
                            }else if(Texto[i] === 'u'){
                                if(Texto[i+1] === 'f' && Texto[i+2] === "a" && Texto[i+3] === "t"){ 
                                    cadenaAuxiliar = 'u';
                                    i = i+3;                                
                                }
                            }
            i++;
            textoEncriptado = textoEncriptado+cadenaAuxiliar;            
            
        };

        BottonCopiar.style.display = 'block'
        ImagenMuneco.style.display = 'none'
        Texto = textoEncriptado
        asignarTextoElemento('TextoDeSalida',Texto);

        }else{
            
            console.log("Tu texto no cumple con las indicaciones "+Texto);
            
            }     

    return Texto


}

function Encriptador(){
    
    //La inmutabilidad del tipo string fuerza a utilizar una funcion o crear una nueva cadena para remplazarlo manuealmente. Elegi la segunda opcion.
    //Aunque puede no ser la mejor opcion en terminos de recursos
    let Texto = document.getElementById("TextoDeEntrada").value;
    let BottonCopiar = document.getElementById("Copiar");
    let ImagenMuneco = document.getElementById("Muneco");
    if(regex.test(Texto)){
    
        console.log("Tu texto cumple con lo establecido "+Texto);
        let tamanoCadena = Texto.length;
        let i = 0;
        let textoEncriptado = '';
        console.log(tamanoCadena)
        
        while( i < tamanoCadena){
            
            let cadenaAuxiliar = Texto[i];
            
            //Deberia usar un switch en lugar de un else if? ya que la comparacion son con valores fijos y no un rango
            if(Texto[i] === 'a'){

                cadenaAuxiliar = 'ai';

                }else if( Texto[i] === 'e'){

                    cadenaAuxiliar = 'enter';    

                    }else if(Texto[i] === 'i'){

                        cadenaAuxiliar = 'imes';    

                       }else if(Texto[i] === 'o'){

                            cadenaAuxiliar = 'ober';    

                            }else if(Texto[i] === 'u'){

                                cadenaAuxiliar = 'ufat';    
                                
                            }

            textoEncriptado = textoEncriptado+cadenaAuxiliar;
            i++;

            
        };

        Texto = textoEncriptado
        BottonCopiar.style.display = 'block'
        ImagenMuneco.style.display = 'none'
        asignarTextoElemento('TextoDeSalida',Texto);

        
        }else{
            
            console.log("Tu texto no cumple con las indicaciones "+Texto);
            
            }     

    return Texto

}
  