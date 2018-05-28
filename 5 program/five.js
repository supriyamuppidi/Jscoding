
function fizz() 
{
    var m=document.getElementById("number").value ;
    var n=parseInt(m);
    document.getElementById("answer").innerHTML=fizzu(n);       
}
function fizzu(n)
{
    var arr = [];
    var i;
    var j;
    for(i=1,j=0;i<=n;i++,j++)
    {
        if(i%3===0 && i%5===0)
        arr[j]="FIZZBUZZ";
        else if(i%5===0)
        arr[j]="BUZZ";
        else if(i%3===0)
        arr[j]="FIZZ";
        else
        arr[j]=i;
    }
return arr;
}

