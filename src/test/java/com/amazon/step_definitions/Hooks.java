package com.amazon.step_definitions;

import com.amazon.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {


@Before
    public void setUp(){

        Driver.getDriver().manage().window().maximize();
        //Driver.getDriver().get(ConfigurationReader.get("url")); we can also put here our URL but in this case i preferred put it on StepDefs
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);


    }

@After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }

        Driver.closeDriver();

    }



}
