var array=[];
function array_add()
{
    var n=parseInt(document.getElementById("number").value);
    if(n<=0)
    alert("The number cannot be Negative or Zero");
    else
    {
        array.push(n);
    }
    document.getElementById("number").value=" ";
}

function repeat()
{
    var i;
    for(i=0;i<array.length;i++)
    {
        //document.write(array.length);
        for(var j=i+1;j<array.length;j++)
        { 
           if(array[i]==array[j])
           {
                document.getElementById("answer").innerHTML+="\""+array[i]+"\""+"<br>"
                break;
           }
       }
    }
}