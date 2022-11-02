import App from "../../src/App";
describe("Header.cy.js", () => {
  // before each will call before evedry component
  beforeEach(() => {
    // Arrange
    cy.viewport(1000, 660);
    cy.mount(<App />);
  });

  const messageButton = ".css-1guk29 > [aria-label='show 4 new mails']";
  const badge =
    ".css-1guk29 > [aria-label='show 4 new mails'] > .MuiBadge-root > .MuiBadge-badge";
  const notifyBadge =
    '.css-1guk29 > [aria-label="show 17 new notifications"] > .MuiBadge-root > .MuiBadge-badge';
  const accountInfo = ".MuiIconButton-edgeEnd";

  const notification = '.css-1guk29 > [aria-label="show 17 new notifications"]';

  it("Header component mounts", () => {
    // Assert
    cy.get("[data-testid=MenuIcon]").should("exist");
    cy.get("[data-testid=MailIcon]").should("exist");
    cy.get(".MuiTypography-root").should("exist");
    cy.get(".MuiInputBase-input").should("have.attr", "placeholder", "Search…");
    cy.get(notification);
    cy.get(notifyBadge);
    cy.get(accountInfo);
  });
  specify("The Message increment after Button Click ", () => {
    cy.get(messageButton).click();
    cy.get(
      ".css-1guk29 > [aria-label='show 4 new mails'] > .MuiBadge-root > .MuiBadge-badge"
    ).should("have.text", "1");
    cy.get(messageButton).click();

    cy.get(badge).should("have.text", "2");
    // account info clicked
    cy.get(accountInfo).click();
    // Profile checked
    cy.get(
      '#primary-search-account-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'
    ).should("have.text", "Profile");
    // My account checked
    cy.get(
      '#primary-search-account-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]'
    ).should("have.text", "My account");
    // profile clicked
    // cy.get(
    //   '#primary-search-account-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'
    // )
    //   .should("have.text", "Profile")
    //   .click();
    // My account clicked
    cy.get(
      '#primary-search-account-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]'
    )
      .should("have.text", "My account")
      .click();
  });

  it("assertion during timeout", () => {
    //   cy.get("#random-number")
    //     .invoke("text")
    //     .then(parseInt)
    //     .should("be.gte", 1)
    //     .and("be.lte", 10);
    // wrong it will not execute the number and return NaN  Overcome it by callback function in assertion should()

    cy.get("#random-number").should((div) => {
      console.log(div.text());
      const n = parseFloat(div.text());
      expect(n).to.be.gte(1).and.be.lte(4);
    });
  });
});
