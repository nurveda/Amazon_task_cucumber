$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CreatAccount.feature");
formatter.feature({
  "name": "Create account on amazon",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Navigating homepage of amazon.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_navigates_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should display",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.homepage_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Going to create an account page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_navigates_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should hover over to the \"Hello, Sing in Account \u0026 Lists\" box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_should_hover_over_to_the_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits to \"Start Here\" link",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_to_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should change to \"Amazon Registration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.title_should_change_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the header should be \"Create account\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.the_header_should_be_Create_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Creating amazon account with regular way",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user should hover over to the \"Hello, Sing in Account \u0026 Lists\" box",
  "keyword": "And "
});
formatter.step({
  "name": "hits to \"Start Here\" link",
  "keyword": "And "
});
formatter.step({
  "name": "enters \"\u003cname\u003e\" to Your Name input box",
  "keyword": "When "
});
formatter.step({
  "name": "enters \"\u003cemail\u003e\" to Email input box",
  "keyword": "And "
});
formatter.step({
  "name": "enters \"\u003cpassword\u003e\" to Password input box",
  "keyword": "And "
});
formatter.step({
  "name": "enters \"\u003cpassword\u003e\" to re-enter password input box",
  "keyword": "And "
});
formatter.step({
  "name": "hits the \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.step({
  "name": "the title changed to \"Authentication required\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Ramiz",
        "ramizKaraeski@gmail.com",
        "gucBizdenGelirYegen"
      ]
    },
    {
      "cells": [
        "Polat",
        "polatAleemdar@hotmail.com",
        "sonunuDusunenKahramanOlamaz"
      ]
    },
    {
      "cells": [
        "Cengiz",
        "cengizAtay@gmail.com",
        "benCengizAtayMahallenizinKaraKedisi"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating amazon account with regular way",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_navigates_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should hover over to the \"Hello, Sing in Account \u0026 Lists\" box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_should_hover_over_to_the_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits to \"Start Here\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_to_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"Ramiz\" to Your Name input box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Your_Name_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"ramizKaraeski@gmail.com\" to Email input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Email_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"gucBizdenGelirYegen\" to Password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"gucBizdenGelirYegen\" to re-enter password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_re_enter_password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits the \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title changed to \"Authentication required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.the_title_changed_to_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating amazon account with regular way",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_navigates_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should hover over to the \"Hello, Sing in Account \u0026 Lists\" box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_should_hover_over_to_the_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits to \"Start Here\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_to_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"Polat\" to Your Name input box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Your_Name_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"polatAleemdar@hotmail.com\" to Email input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Email_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"sonunuDusunenKahramanOlamaz\" to Password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"sonunuDusunenKahramanOlamaz\" to re-enter password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_re_enter_password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits the \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title changed to \"Authentication required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.the_title_changed_to_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating amazon account with regular way",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"amazon_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_navigates_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should hover over to the \"Hello, Sing in Account \u0026 Lists\" box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.user_should_hover_over_to_the_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits to \"Start Here\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_to_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"Cengiz\" to Your Name input box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Your_Name_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"cengizAtay@gmail.com\" to Email input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Email_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"benCengizAtayMahallenizinKaraKedisi\" to Password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_Password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"benCengizAtayMahallenizinKaraKedisi\" to re-enter password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.enters_to_re_enter_password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits the \"Create your Amazon account\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.hits_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title changed to \"Authentication required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.CreatAccountStepDefs.the_title_changed_to_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});