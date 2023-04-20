let btnThemeLight = document.querySelector('#btnThemeLight');
let btnThemeDark = document.querySelector('#btnThemeDark');
let estadoTema = document.querySelector(`#estadoTema`);
btnThemeLight.addEventListener('click', ()=> cambiarTema(`light`));
btnThemeDark.addEventListener('click', ()=>cambiarTema(`dark`));
//leer el localstorage
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado);
cambiarTema(temaConfigurado);


function cambiarTema(color){
    //data-bd-theme = 'light/dark'
    if(color === `light`){
        console.log(`prueba`)
        estadoTema.className = "bi bi-brightness-high-fill";
    }else if(color === `dark`){
        estadoTema.className = "bi bi-moon-stars-fill";
    }
    document.querySelector('html').setAttribute('data-bs-theme', color);
    console.log(color)
    //guardar en Localstorage
    localStorage.setItem('tema', JSON.stringify(color));
}

// TAREA: cambiar el icono del navbar segun el tema seleccionado