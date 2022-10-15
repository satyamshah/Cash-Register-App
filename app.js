const totalBillAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",function validateAmount(){
    hideMessage();
    if(totalBillAmount.value>0)
    {
      if(parseInt(cashGiven.value)==parseInt(totalBillAmount.value))
      {
        showMessage("Bill has been paid")
      }
      else
      {
        if(parseInt(cashGiven.value)>0 && parseInt(cashGiven.value)>parseInt(totalBillAmount.value))
        {
            const amountToBeReturned = cashGiven.value - totalBillAmount.value; 
        calculateChange(amountToBeReturned);
        }
        else
        showMessage("you need to pay more. Please add more cash !")
      }
        
    }
    else 
    showMessage("Invalid Bill Amount. Please add a valid bill Amount");
})

function showMessage(msg)
{
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage() {
    message.style.display = "none";
  }
  
  function calculateChange(amountToBeReturned) {
    
    for (let i = 0; i < availableNotes.length; i++) {
      
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      
      amountToBeReturned = amountToBeReturned % availableNotes[i];

      noOfNotes[i].innerText = numberOfNotes;
    }
  }