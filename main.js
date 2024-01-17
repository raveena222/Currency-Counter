function count_notes(){
    var amount = document.getElementById("money").value ;
    amount=parseInt(amount);
    let a= [2000,1000,500,200,100,50,20,10,5,2,1];
    let notes={};
    let sum=0;
    for(let i=0;i<11;i++){
        let k= Math.floor(amount/a[i]);
        amount= amount-k*a[i];
        notes[i]=k;
        sum=sum+k;
        document.getElementById("a[i]").innerHTML=notes[i];

    }
    document.getElementById("sum").innerHTML=sum;
};
