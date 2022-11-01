// <reference types="cypress" />;

describe("hello world ", () => {
  it("Check page", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    ); // command  ( visit ) will visit the urls given
    //  we can throw error inside the function it ->
    // this is empty text
    // throw new Error("this is error");
    // mocha
    // cy.contains("signup");
    // cy.viewport(1000, 660);
    cy.contains("Home");
    cy.contains("XYZ Bank");
    cy.get(".btn.btn-primary.btn-lg").should("exist");
    cy.contains("Customer Login");
    cy.contains("Bank Manager Login");
  });

  it("Login the Customer user", () => {
    cy.get(".borderM > :nth-child(1) > .btn").click();
    cy.contains("Home");
    cy.get("[name='userSelect']").select("Harry Potter").invoke("val");
    cy.get("form.ng-valid > .btn ").click();
  });

  it("Customer Page", () => {
    cy.get(".borderM > :nth-child(1)").should("exist");
    cy.get("#accountSelect").should("exist");
    cy.get("#accountSelect").select("1004").invoke("val");
    // cy.get("#accountSelect").select("1005").invoke("val");
    // cy.get("#accountSelect").select("1006").invoke("val");
    cy.get(".borderM > :nth-child(3)").should("exist");
    cy.get(".borderM > :nth-child(3)").contains("Account Number");
    cy.get(".borderM > :nth-child(3)").contains("Balance");
    cy.get(".borderM > :nth-child(3)").contains("Currency");
    const trancButton = cy.get("[ng-class=btnClass1]");
    trancButton.contains("Transactions");
    trancButton.click();
    cy.contains("Back").click();
  });

  it("Deposit Amount", () => {
    cy.get("[ng-class=btnClass2]").click();
    cy.get("label")
      .contains("Amount to be Deposited")
      .should("have.text", "Amount to be Deposited :");
    cy.get("[ng-model=amount]").should("exist");
    cy.get("[ng-model=amount]").type("89897");
    cy.get(".btn.btn-default").should("exist").contains("Deposit");
    cy.get(".btn.btn-default").should("exist").contains("Deposit").click();
    cy.get("[ng-show='message']").should("have.text", "Deposit Successful");
    cy.get("[ng-class=btnClass3]").click();
  });
});
describe("Check the Withdraw Page", () => {
  it("Check input text and button", () => {
    cy.get("div.form-group")
      .should("exist")
      .then(() => {
        cy.get("[ng-show='message']").should("not.be.visible");
      });
    const withdrawInput = cy.get('input[type="number"]');
    const withdrawButton = cy.get('button[type="submit"]');
    withdrawInput.should("exist");
    withdrawButton.should("have.text", "Withdraw");
    let balance = cy.get(".borderM > :nth-child(3) > :nth-child(2)");
    let amount = withdrawInput.type("200");

    withdrawButton.click();

    cy.get("[ng-show=message]").should("have.text", "Transaction successful");
  });
});
