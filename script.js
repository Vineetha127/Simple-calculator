function AddNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    num1=parseInt(num1);
    num2=parseInt(num2);
    let h1=document.getElementById("result")
    res=num1+num2
    h1.innerHTML="Result:"+res
    // alert(num1+num2)
}
function SubNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById("result")
    res=num1-num2
    h1.innerHTML="Result:"+res
    // alert(num1-num2)
}
function MulNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById("result")
    res=num1*num2
    h1.innerHTML="Result:"+res
    // alert(num1*num2)
}
    function DivNum(){
        let num1=document.getElementById('firstbox').value
        let num2=document.getElementById('secondbox').value
        let h1=document.getElementById("result")
        res=num1/num2
        h1.innerHTML="Result:"+res
        // alert(num1/num2)
    }
    function PowNum(){
        let num1=document.getElementById('firstbox').value
        let num2=document.getElementById('secondbox').value
        let h1=document.getElementById("result")
        res=num1**num2
        h1.innerHTML="Result:"+res
        // alert(num1**num2)
    }
    