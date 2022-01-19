describe("Accordion Tests", () => {
  function snapshotComponent() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(".bb--accordion-list").wait(300);
  }

  function openAndCloseSecondElement() {
    snapshotComponent();
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent();
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent();
  }
  it("Uncontrolled -- Should open and close", () => {
    cy.visit(
      "/iframe.html?id=components-accordion--uncontrolled&args=&viewMode=story"
    );
    openAndCloseSecondElement();
  });

  it("Controlled -- Should open and close", () => {
    cy.visit(
      "/iframe.html?id=components-accordion--controlled&args=&viewMode=story"
    );
    openAndCloseSecondElement();
  });
});
