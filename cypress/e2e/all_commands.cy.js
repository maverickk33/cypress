describe("Test for commands!", () => {
  it("commands", () => {});
});

describe("My First Test", () => {
  //   it.skip() will skip or don't execute the test suite

  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
    cy.pause();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get('input[type="email"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
