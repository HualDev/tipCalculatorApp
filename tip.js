let bill=0
let numberPeople=0
let custom=0
let amountTotal=0
let amountPerson=0
let totalPerson=0
let tip=0
let porcentaje=0

function cambioReset(){
    if(bill>0||amountPerson>0){
        document.getElementById('reset').style.opacity=1
        document.getElementById('reset').style.background='#26c0ab'
    }
    else{
        document.getElementById('reset').style.opacity=0.2
    }
}

function mostrarZero(){    
        numberPeople=document.getElementById('numberPeople').value
        if(numberPeople>0){
            ocultarZero()

        }else{
        document.getElementById('zero').style.visibility='visible'
        document.getElementById('numberPeople').style.border='2px solid tomato'
        document.getElementById('numberPeople').style.borderRadius='5px'
        }
      
       
    }

function ocultarZero(){
    document.getElementById('numberPeople').style.border=null
    document.getElementById('zero').style.visibility='hidden'
    }    

function cinco(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value

    if (numberPeople<=0){
          mostrarZero()  
    }
    else if(bill>0){
        document.getElementById('zero').style.visibility='hidden'
        tip=bill*5/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson 
        ocultarZero()
        cambioReset()        
    }
}

function diez(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value

    if(numberPeople<=0){
        mostrarZero()
    }
    else if(bill>0){
        tip=bill*10/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson
        document.getElementById('zero').style.visibility='hidden'
        document.getElementById('numberPeople').style.border=null
        cambioReset()
    }    
}

function quince(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value

    if(numberPeople<=0){
        mostrarZero()
    }
    else if(bill>0){
        tip=bill*15/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson
        document.getElementById('zero').style.visibility='hidden'
        document.getElementById('numberPeople').style.border=null
        cambioReset()
    }    
}

function veinticinco(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value

    if(numberPeople<=0){
        mostrarZero()
    }
    else if(bill>0){
        tip=bill*25/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson
        document.getElementById('zero').style.visibility='hidden'
        document.getElementById('numberPeople').style.border=null
        cambioReset()
    }    
}

function cincuenta(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value

    if(numberPeople<=0){
        mostrarZero()
    }
    else if(bill>0){
        tip=bill*50/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson
        document.getElementById('zero').style.visibility='hidden'
        document.getElementById('numberPeople').style.border=null
        cambioReset()
    }    
}

function percent(){
    bill=document.getElementById('bill').value
    numberPeople=document.getElementById('numberPeople').value
    porcentaje=document.getElementById('cust').value

    if(numberPeople<=0){
        mostrarZero()
    }
    else if(bill>0){
        tip=bill*porcentaje/100
        amountPerson=(tip/numberPeople).toFixed(2)
        amountTotal=parseFloat(bill)+parseFloat(tip)
        totalPerson=(amountTotal/numberPeople).toFixed(2)
        document.getElementById('amountPerson').innerHTML=amountPerson
        document.getElementById('rTotal').innerHTML=totalPerson
        document.getElementById('zero').style.visibility='hidden'
        document.getElementById('numberPeople').style.border=null
        cambioReset()
    }
}

function reset(){
    document.getElementById('amountPerson').innerHTML='$0.00'
    document.getElementById('rTotal').innerHTML='$0.00'
    document.getElementById('miForm').reset()
    document.getElementById('reset').style.background='#26c0ab'
    document.getElementById('reset').style.opacity=0.2
}