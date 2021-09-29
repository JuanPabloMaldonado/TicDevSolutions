let productos = [
    ["ID","Nombre","Apellido","Sexo","Edad"],
    ["001","Juan","Perez","M","32"],
    ["002","Maria","Olarte","F","35"],
    ["003","Alexei","Muller","M","29"],
    ["004","Ana","Otalora","F","43"],
    ["005","Mark","Oviedo","M","40"]]

let newId = 0;
let ind = 0;
let newdata = "";


let getProducts = (data) => {
    productos.forEach((element)=>{
        
                let div = document.createElement("div");
                div.className="table";
                for (let m=0; m<element.length; m++){
                
                    let id = document.createTextNode(element[m]+ "\t" );
                    div.style.gridColumnGap= "50px";
                    id.className="renglon";
                    div.appendChild(id);
                    let contenedor = document.getElementById("table");
                        for (let n=0; n<productos.length; n++){
                            contenedor.appendChild(div);
                        }                               
                    }
    });
}
getProducts(productos);

document.getElementById("modify").onclick = function Modificar(){
        newId=parseInt(document.getElementById('idIngresado'));
        ind=(parseInt(document.getElementById("indexIngresado")))-1;
        newdata = document.getElementById("cambioIngresado").outerHTML;
       
        
        return newId, newdata, ind;
}

console.log(productos);
console.log(newId, ind, newdata);