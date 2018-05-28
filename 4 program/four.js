function power() 
{
    var m=document.getElementById("number").value ;
    var n=parseInt(m);
    document.getElementById("answer").innerHTML=power_of_2(n);     
}


function power_of_2(n)
{
    var res=1;
    var count=0;
    var b=ispower(n);
    if(b==0)
    {
         while(res<=(n-1)/2 )
        {
          res=res*2;
          count++;
        }
        return count;
    }
    else
    return b;
}

function ispower(n)
{
    var count1 = 0;
    while(n!=1)
    {
        if(n%2!=0)
           return 0;
        n=n/2;
        count1++;
    }
        return count1;
}

