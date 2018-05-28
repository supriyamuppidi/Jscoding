function fact() 
{
    var m=document.getElementById("number").value ;
    var n=parseInt(m);
    document.getElementById("answer").innerHTML=fat(n);       
}
function fat(n)
{
    if (n==0||n==1) 
        return 1;
    else
        return n*fat(n-1);
}
