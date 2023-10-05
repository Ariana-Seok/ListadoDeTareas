const input = document.querySelector("input");
const agregar = document.querySelector(".btn-agregar");
const ul = document.querySelector("ul");
const aviso = document.querySelector(".aviso");

agregar.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = input.value;

    if(texto != ""){
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = texto;

        li.appendChild(p);
        li.appendChild(addBtnEliminar());
        ul.appendChild(li);

        input.value = "";
        aviso.style.display = "none";
    }
});

function addBtnEliminar() {
    const btn_eliminar = document.createElement("button");
    btn_eliminar.textContent = "Eliminar";
    btn_eliminar.className = "btn-eliminar";

    btn_eliminar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
        if(items.length === 0){
            aviso.style.display = "block";
        }
    });
    return btn_eliminar;
}