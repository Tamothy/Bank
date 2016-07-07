//business logic
function BankAccount(name, deposit) {
  this.customerName = name;
  this.initialDeposit = parseInt(deposit);
}

BankAccount.prototype.depositWithdraw = function(deposit, withdraw) {
  this.actualDeposit = parseInt(deposit);
  this.actualWithdraw = parseInt(withdraw);
  return this.initialDeposit + this.actualDeposit - this.actualWithdraw;
}

//user interface logic
$(document).ready(function () {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-customer-name").val();
    var inputtedInitialDeposit = $("input#new-customer-initial-deposit").val();

    var newCustomer = new BankAccount(inputtedName, inputtedInitialDeposit);

    $("ul#customers").append("<li><span class='customer'>" + newCustomer.customerName + " " + newCustomer.initialDeposit + "</span></li>");

    $("ul#customers").append('<form id="current-customer">' +
                             '<div class="depositWithdraw">' +
                               '<div class="form-group">' +
                                 '<label for="deposit">Deposit</label>' +
                                 '<input type="text" class="form-control deposit">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="withdraw">Withdraw</label>' +
                                 '<input type="text" class="form-control withdraw">' +
                               '</div>' +
                             '</div>' +
                            '<button type="submit" class="btn">Submit</button>' +
                            '</form>');


    $("ul#customers").submit(function(event) {
      event.preventDefault();
      $(".depositWithdraw").each(function() {
        var inputtedDeposit = $(this).find("input.deposit").val();
        var inputtedWithdraw = $(this).find("input.withdraw").val();
        var balance = newCustomer.depositWithdraw(inputtedDeposit, inputtedWithdraw);
          $("ul#customers").append("<li><span class='customer'>" + balance + "</span></li>");
      });
    });
  });
});
