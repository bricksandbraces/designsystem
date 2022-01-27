describe("Accordion Tests", () => {
  function snapshotComponent(name: string) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(".bb--accordion-list").wait(500).matchImageSnapshot(name, {
      failureThreshold: 1,
      failureThresholdType: "pixel"
    });
  }

  function openAndCloseSecondElement(viewport: string, group: string) {
    snapshotComponent(`${viewport}--${group}--accordion1`);
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent(`${viewport}--${group}--accordion2`);
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent(`${viewport}--${group}--accordion3`);
  }

  function testControlledPatterns(viewport: string) {
    it("Uncontrolled -- Should open and close", () => {
      cy.visit(
        "/iframe.html?id=components-accordion--uncontrolled&args=&viewMode=story"
      );
      openAndCloseSecondElement(viewport, "uncontrolled");
    });

    it("Controlled -- Should open and close", () => {
      cy.visit(
        "/iframe.html?id=components-accordion--controlled&args=&viewMode=story"
      );
      openAndCloseSecondElement(viewport, "controlled");
    });
  }

  ["iphone-x", "macbook-16"].forEach((viewport: "iphone-x" | "macbook-16") => {
    context(viewport, () => {
      beforeEach(() => {
        cy.viewport(viewport);
      });
      testControlledPatterns(viewport);
    });
  });
});
