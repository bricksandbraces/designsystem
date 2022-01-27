describe("Badge Tests", () => {
  function testBadges(viewport: string) {
    it("renders default color overview", () => {
      cy.visit("/iframe.html?id=components-badge--default&viewMode=story")
        .get(".bb--badge")
        .each((el, i) => {
          cy.wrap(el).matchImageSnapshot(`${viewport}--badge-${i}`, {
            failureThresholdType: "percent",
            failureThreshold: 1
          });
        });
    });
  }

  ["iphone-x", "macbook-16"].forEach((viewport: "iphone-x" | "macbook-16") => {
    context(viewport, () => {
      beforeEach(() => {
        cy.viewport(viewport);
      });
      testBadges(viewport);
    });
  });
});
