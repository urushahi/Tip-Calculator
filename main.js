let form = document.getElementById("tip-form");
form.onchange = function () {
  let totalBill = document.getElementById("totalBill").value;
  let tipPercentage = document.getElementById("tipValue").value;
  let tipOutput = document.getElementById("tipOutput");
  tipOutput.innerHTML = tipPercentage + "%";
  tipOutput.style = "display:block";
  calculate(totalBill, tipPercentage);
};
function calculate(totalBill, tipPercentage) {
  let tipAmt = parseInt(totalBill * (tipPercentage / 100).toFixed(2));
  document.getElementById("tipAmt").value = "Rs. " + tipAmt;
  let finalAmt = Number(totalBill) + Number(tipAmt);
  console.log(tipAmt);
  document.getElementById("finalAmt").value = "Rs. "+finalAmt;
}
