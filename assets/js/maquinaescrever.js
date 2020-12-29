function tipoEscrita(elemento){
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    texto.forEach((letra, i)=>{
        setTimeout(()=> elemento.innerHTML += letra, 120 * i)
    });
}
const titulo = document.getElementById('title');
tipoEscrita(titulo);
