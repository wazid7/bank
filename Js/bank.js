//handle deposit Btn
document.getElementById('depositBtn').addEventListener ('click', function(){

    // console.log("deposit Btn Clicked");
    //Get Deposit Value and Set In depositAmount ;

    const depositInput= document.getElementById('deposit-amount');
    
    const newdepositAmount= parseFloat(depositInput.value) ;

    //console.log(depositAmount);

   const depositTotal=document.getElementById('deposit-total');
   const previousDepositAmount= depositTotal.innerText;
   const newDepositTotal= parseFloat(previousDepositAmount ) + parseFloat(newdepositAmount) ;
   depositTotal.innerText = newDepositTotal ;

   //2. Update Account Balance
   //previous Balance
   const balanceTotal=document.getElementById('balance-total');
   const balanceTotalText=balanceTotal.innerText;
   const previousBalanceTotal= parseFloat(balanceTotalText);
    //New Added Balance
     const newBalancetotal=previousBalanceTotal+newdepositAmount;
     balanceTotal.innerText=newBalancetotal;
   //Clear deposit input fields

   depositInput.value = " ";
    
});

//Handle Withdraw Event Handler
document.getElementById('withdrawBtn').addEventListener('click', function(){
   const withdrawAmount=document.getElementById('withdraw-amount');
   const withdrawAmountText=withdrawAmount.value;
   const newWithdrawAmount=parseFloat(withdrawAmountText);
   //console.log(newWithdrawAmount);

   //set Withdraw Total
   const withdrawTotal=document.getElementById('withdraw-total');
   const previousWithdrawText= withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawText);

   // Sum all Withdraw Total
   const newWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText= newWithdrawTotal;

    //update Balance After Withdraw
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);
     //New  Balance
      const newBalancetotal=previousBalanceTotal-newWithdrawAmount;
      balanceTotal.innerText = newBalancetotal;


   //Clear Withdraw Amount Input Fields

   withdrawAmount.value='';




});