
function calculateIMC()
{
    let weight= document.getElementById("campoPeso").value;
    let height= document.getElementById("campoAltura").value;
    let result= document.getElementById("result");
    let imc= weight/ (height* height);

    if(imc>0)
    {
        result.innerHTML= imc;
    }else{
        result.innerHTML= "Coloque valores validos";
    }

}