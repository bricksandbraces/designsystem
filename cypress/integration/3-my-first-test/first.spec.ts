// first.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Button Tests", () => {
  it("Contains Text", () => {
    cy.visit("/iframe.html?id=components-button--default&viewMode=story");
    cy.contains("Button");
  });
});
