    function mostrar()
    {
    let item1=document.getElementById(`prod1`)
    let item2=document.getElementById(`prod2`)
    let item3=document.getElementById(`prod3`)
    let adic=0;


    //PRIMER ITEM DE LA FACTURA
        if(item1.selectedIndex==0)
        {
document.getElementById(`desc01`).value="";
document.getElementById(`vau01`).value=0;
document.getElementById(`cant01`).value=0;
document.getElementById(`vat01`).value=0;
        }


if(item1.selectedIndex==1)
        {
document.getElementById(`desc01`).value="hamburguesa + REFRESCO";
document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
}

if(item1.selectedIndex==2)
        {
document.getElementById(`desc01`).value="hamburguesa + papas";
document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
}

if(item1.selectedIndex==3)
        {
document.getElementById(`desc01`).value="hamburguesa + papas + bebida";
document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
}

//SEGUNDO ITEM DE LA FACTURA

 if(item2.selectedIndex==0)
        {
document.getElementById(`desc02`).value="";
document.getElementById(`vau02`).value=0;
document.getElementById(`cant02`).value=0;
document.getElementById(`vat02`).value=0;
        }


if(item2.selectedIndex==1)
        {
document.getElementById(`desc02`).value="hamburguesa";
document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
}

if(item2.selectedIndex==2)
        {
document.getElementById(`desc02`).value="hamburguesa";
document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
}

if(item2.selectedIndex==3)
        {
document.getElementById(`desc02`).value="hamburguesa";
document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
}


//TERCER ITEM DE LA FACTURA

 if(item3.selectedIndex==0)
        {
document.getElementById(`desc03`).value="";
document.getElementById(`vau03`).value=0;
document.getElementById(`cant03`).value=0;
document.getElementById(`vat03`).value=0;
        }


if(item1.selectedIndex==1)
        {
document.getElementById(`desc03`).value="NOTHING PHONE";
document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
}

if(item3.selectedIndex==2)
        {
document.getElementById(`desc03`).value="NOTHING PHONE";
document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
}

if(item3.selectedIndex==3)
        {
document.getElementById(`desc03`).value="NOTHING PHONE";
document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
}

//CALCULOS ADICIONALES

let totaladic0=0;
if(document.getElementById(`checkbox1`).checked)
{
        totaladic0 += 3000;
}

if(document.getElementById(`checkbox2`).checked)

{
        totaladic0 += 5000;
}

if(document.getElementById(`checkbox3`).checked)
{
        totaladic0 += 7000;
}

//ASIGNAR VALOR
document.getElementById(`adic0`).value=totaladic0;

//SUBTOTAL

document.getElementById(`subt`).value=(parseFloat(document.getElementById(`vat01`).value)+parseFloat(document.getElementById(`vat02`).value)+parseFloat(document.getElementById(`vat03`).value)+parseFloat(document.getElementById(`adic0`).value)||0).toFixed(0);

//IVA
 
document.getElementById(`iva`).value=(parseFloat(document.getElementById(`subt`).value)*0.19||0).toFixed(0);

//DESCUENTO

if(document.getElementById(`radio1`).checked)
{
document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.10||0).toFixed(0);
}
else if(document.getElementById(`radio2`).checked)
{
document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.00||0).toFixed(0);
}
    else if(document.getElementById(`radio3`).checked)
{
document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.00||0).toFixed(0);
}

//NETO
document.getElementById(`neto`).value=(parseFloat(document.getElementById(`subt`).value)+parseFloat(document.getElementById(`iva`).value)-parseFloat(document.getElementById(`desc`).value)||0).toFixed(0);
}

function enviar(){
        swal("ESTIMADO USUARIO","SU PEDIDO ESTA EN PROCESO .. ESPERE UN MOMENTO... ","success");
}