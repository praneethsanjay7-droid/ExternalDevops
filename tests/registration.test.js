const {test,before,after,beforeEach}=require("node:test");
const assert=require("node:assert/strict");

const {Builder,By,until}=require("selenium-webdriver");

const BASE_URL=process.env.BASE_URL || "http://localhost:3000";

let driver;
 //launch the browser before running the tests
 before(async()=>{
    driver=await new Builder()
        .forBrowser("chrome")
        .build();
 });

 //open the application before every test
 beforeEach(async()=>{
    await driver.get(BASE_URL);
 });
 
 //close the browser after running the tests
 after(async()=>{
    if(driver){
        await driver.quit();
    }
 });

 //tc1:verify application loads
 test("TC01:application should load successfully ",async()=>{
    await driver.wait(
    until.elementLocated(By.css("body")),
    10000
    );
    const body=await driver.findElement(By.css("body"));
    assert.equal(await body.isDisplayed(),true);
 });


test("TC02:verify page title",async()=>{
    const title=await driver.getTitle();
    assert.notEqual(title.trim(),"");
});

//TC03:verify registration form is visible
test("TC03: registation form should be visible",async()=>{
    const forms=awaitdriver.findElements(By.css("form"));
    assert.ok(forms.length>0,"Registration form is not visible");
    assert.equal(await forms[0].isDisplayed(),true);
});
