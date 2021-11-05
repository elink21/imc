
function calculateIMC()
{
    let weight= document.getElementById("campoPeso").value;
    let height= document.getElementById("campoAltura").value;
    let result= document.getElementById("result");
    let imc= weight/ (height* height);
    let msg= document.getElementById("msg");

    if(imc>0)
    {
        msg.innerHTML= "Su IMC es:";
        result.innerHTML= imc;
    }else{
        result.innerHTML= "Coloque valores validos";
    }

}