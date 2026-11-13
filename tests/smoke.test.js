const{Builder,Browser,By,until}=require('selenium-webdriver');
const assert=require("node:assert/strict");

async function runTest(){
    let driver;
    try{
        driver=await new Builder()
            .forBrowser(Browser.CHROME)
            .build();

        await driver.get("http://localhost:3000/");

        const form=await driver.wait(
            until.elementLocated(By.css("form")),10000
        );

        assert.equal(await form.isDisplayed(),true);

        console.log("test passed");
        console.log("registration form is displayed");
    }catch(error){
        console.log("Test failed");
        console.error(error);
        process.exitCode=1;
    }finally{
        if(driver){
            await driver.quit();
        }
    }

}
runTest();