let calculateBtn = document.querySelector(".form").addEventListener("submit", calculateLoanAmount); 

function calculateLoanAmount(e) { 
    // getting html elements using DOM
    let loanAmount = document.getElementById("inputLoan"); 
    let intrest = document.getElementById("inputInt") 
    let years = document.getElementById("inputyears"); 
    let monthlypayment = document.getElementById("monthlyPay"); 
    let totalPayment = document.getElementById("totalPay"); 
    let totalIntrest = document.getElementById("totalIntrest"); 
    
    // principle is loan amount
    let principle = parseFloat(loanAmount.value); 
    // calculated intrest is intrest/100/12
    let calIntrest = parseFloat(intrest.value)/100/12;  
    
    let calPayments = parseFloat(years.value)*12; 

    
    const a = Math.pow(1+calIntrest, calPayments);
    let monthlyPay = (principle*a*calIntrest)/(a-1) 

    if (isFinite(monthlyPay)) {
        monthlypayment.textContent = monthlyPay.toFixed(2); 
        totalPayment.textContent = (monthlyPay*calPayments).toFixed(2);
        totalIntrest.textContent = ((monthlyPay*calPayments)-principle).toFixed(2);

    }else {
        alert("please enter valid numbers")
    }

    console.log("hi");
    e.preventDefault();
} 