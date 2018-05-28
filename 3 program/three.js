function mul() 
{
    var m=document.getElementById("number").value ;
    var n=parseInt(m);
    document.getElementById("answer").innerHTML=mult(n);       
}
function mult(n)
{
    var sum=0;
    for(var i=1;i<n;i++)
    {
        if(i%3===0||i%5===0)
        {
            sum=sum+i;
        }
        
    }
    return sum;
}
