function nat() 
{
    var m=document.getElementById("number").value ;
    var n=parseInt(m);
    document.getElementById("answer").innerHTML=natu(n);       
}
function natu(n)
{
    var sum=0;
    for(var i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
