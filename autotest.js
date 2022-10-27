autotest.js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("1 month");
});