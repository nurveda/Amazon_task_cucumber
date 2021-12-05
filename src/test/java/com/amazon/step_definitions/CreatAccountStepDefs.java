package com.amazon.step_definitions;

import com.amazon.pages.CreatAccountPage;
import com.amazon.pages.HomePage;
import com.amazon.utilities.BrowserUtils;
import com.amazon.utilities.ConfigurationReader;
import com.amazon.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import static org.junit.Assert.*;

public class CreatAccountStepDefs {

    HomePage homePage= new HomePage();
    CreatAccountPage creatAccountPage= new CreatAccountPage();


    @Given("user navigates to {string}")
    public void user_navigates_to(String expectedURL) {
        Driver.getDriver().get(ConfigurationReader.get(""+expectedURL+""));
    }



    @Given("homepage should display")
    public void homepage_should_display() {
        assertTrue(homePage.youOnAmazonText.getText().contains("You are on amazon.com."));
    }

    @Given("user should hover over to the {string} box")
    public void user_should_hover_over_to_the_box(String string) {
        BrowserUtils.hover(homePage.helloSignBtn);
    }


    @Then("title should change to {string}")
    public void title_should_change_to(String expectedTitle) {
        String actualTitle= Driver.getDriver().getTitle();
        assertEquals("Make sure actual and expected titles are matching",expectedTitle,actualTitle);

    }

    @Given("hits to {string} link")
    public void hits_to_link(String string) {
        homePage.startHereLink.click();
    }


    @Then("the header should be {string}")
    public void the_header_should_be_Create_account(String expectedHeader) {
        String actualHeader= creatAccountPage.header.getText();
        assertEquals("Make sure expected and actual headers are matching",expectedHeader,actualHeader);

    }

    @When("enters {string} to Your Name input box")
    public void enters_to_Your_Name_input_box(String name) {
        creatAccountPage.nameInput.sendKeys(name);
    }

    @When("enters {string} to Email input box")
    public void enters_to_Email_input_box(String email) {
        creatAccountPage.emailInput.sendKeys(email);
    }

    @When("enters {string} to Password input box")
    public void enters_to_Password_input_box(String password) {
        creatAccountPage.passwordInp.sendKeys(password);
    }

    @When("enters {string} to re-enter password input box")
    public void enters_to_re_enter_password_input_box(String rePassword) {
        creatAccountPage.reEntPasswordInp.sendKeys(rePassword);
    }

    @When("hits the {string} button")
    public void hits_the_button(String string) {
        creatAccountPage.submitBtn.click();
    }

    @Then("the title changed to {string}")
    public void the_title_changed_to_(String expectedTitle) {
        String actualTitle= Driver.getDriver().getTitle();
        assertEquals("Make sure the expected and actual titles are matching",expectedTitle,actualTitle);

    }




}
