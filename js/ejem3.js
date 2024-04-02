var n,i,a,b,c;
n=parseInt(prompt("n:"));
a=1;b=1;
for (i =0;i < n;i++) {
    c=a+b;
    b=c;
    document.write("<font size='50' color='red'>" + c+ "</font>");
    
}