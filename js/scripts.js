//business logic
function Customer(name, deposit) {
  this.customerName = name;
  this.initialDeposit = deposit;
}

//user interface logic
$(document).ready(function () {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-customer-name").val();
    var inputtedInitialDeposit = $("input#new-customer-initial-deposit").val();

    var newCustomer = new Customer(inputtedName, inputtedInitialDeposit);

    $("ul#customers").append("<li><span class='customer'>" + newCustomer.customerName + newCustomer.initialDeposit + "</span></li>");
  });
});
