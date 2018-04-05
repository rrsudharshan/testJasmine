// Simple test sute. The tests bellow are very basic and show what Allure can provide
// to you regardless of any other extensions

const { expect } = require("chai");

// Workaround for https://github.com/allure-framework/allure-mocha/issues/28
// Enforce allure object to be exposed. If you want to use `allure` outside of before/beforeEach
// sections, you will have to import reporter here directly
require("mocha-allure-reporter");

describe("simple test demo", () => {
  // Example of step definition. `allure.createStep` wraps any function and then every
  // call of it will be recorded and displayed in report.
  const testStep = allure.createStep("initial", () => {
    // do something
  });
  // If step will throw an exception or return a rejected promise, it will be marked as broken
  // in the report, and also  will fail the test
  // const stepToBreak = allure.createStep("break test", () => {
  //   throw new Error("Make test broken");
  // });

    var attachresponse = allure.createAttachment("RESPONSE", function(level, log) {
        return new Buffer(log, "utf-8");
    });
    var attachrequest = allure.createAttachment("REQUEST", function(level, log) {
        return new Buffer(log, "utf-8");
    });
    var attachassertions = allure.createAttachment("ASSERTIONS", function(level, log) {
        return new Buffer(log, "utf-8");
    });

    var val ="1234";



    TestStep=allure.createStep("MyData", function(){
        // attachrequest("log", request);
        // attachresponse("log", response);
        attachassertions("log",val)
    });

  it("simple passed test0000000000", () => {
      TestStep();

  });


  it("failed test11111111111111", () => {
      try{
          expect(false).to.equal(true);
      }catch(err){
          val = err.message;
          TestStep();
          expect(false).to.equal(true);
      }
  });

  it("failed test22222222222", () => {
        try{
            expect(0).to.equal(1);
        }catch(err){
            val = err.message;
            TestStep();
            throw new Error(err);
        }
    });

    it("simple passed  and failed test ", () => {
    var k=false;
        try{
            expect(0).to.equal(1);
        }catch(err){
            k=true;
            val = err.message;
            TestStep();

                expect(1).to.equal(1);
                val = "test passed succesfully";
                TestStep();
            expect(0).to.equal(1);
        }



    });

    it("simple passed test222222222", () => {
        TestStep();

    });

});
