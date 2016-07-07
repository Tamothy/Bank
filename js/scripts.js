//business logic
function BankAccount(name, deposit) {
  this.customerName = name;
  this.initialDeposit = deposit;
}

BankAccount.prototype.depositWithdraw = function(deposit, withdraw) {
  return this.initialDeposit + deposit - withdraw;
}

//user interface logic
$(document).ready(function () {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-customer-name").val();
    var inputtedInitialDeposit = $("input#new-customer-initial-deposit").val();

    var newCustomer = new BankAccount(inputtedName, inputtedInitialDeposit);

    $("ul#customers").append("<li><span class='customer'>" + newCustomer.customerName + newCustomer.initialDeposit + "</span></li>");

    $("ul#customers").append('<div class="deposit">' +
                             '<div class="form-group">' +
                               '<label for="deposit">Deposit</label>' +
                               '<input type="text" class="form-control deposit">' +
                             '</div>' +
                             '<div class="form-group">' +
                               '<label for="withdraw">Withdraw</label>' +
                               '<input type="text" class="form-control withdraw">' +
                             '</div>' +
                           '</div>');

    $("ul#customers").append('<button type="submit" class="btn">Submit</button>');

  });
});
