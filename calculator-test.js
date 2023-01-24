
it('should calculate the monthly rate correctly', function () {
  const values = {
  amount: 20000,
  years: 5,
  rate: 5.6  };
  expect(calculateMonthlyPayment(values)).toEqual('382.95')

});


it("should return a result with 2 decimal places", function() {
  const values = {
  amount: 6897,
  years: 3,
  rate: 8.7 
  }
  expect(calculateMonthlyPayment(values)).toEqual('218.36')
});

it("should be able to use massive loans", function() {
  const values = {
    amount: 210000000000000,
    years: 30,
    rate: 2.9
  }
  expect(calculateMonthlyPayment(values)).toEqual('874082958292.61')
})

