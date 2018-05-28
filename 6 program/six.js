var input=[];
function array_push(n)
{
    var n=parseInt(document.getElementById("number1").value);
    if(n<=0)
    alert("The number cannot be Negative or Zero");
    else
    {
        input.push(n);
    }
    document.getElementById("number1").value=" ";
   // document.getElementById("answer").innerHTML=input;
}

function pairs_of_numbers()
{
    //document.getElementById("answer").innerHTML=input;
    var i;
    var m=parseInt(document.getElementById("number").value);
    for(i=0;i<input.length;i++)
    {
        for(var j=i+1;j<input.length;j++)
        {
            if(input[i]+input[j]==m)
                document.getElementById("answer").innerHTML += "\""+input[i]+"\""+","+"\""+input[j]+"\""+"<br>";
        }
    }
}

