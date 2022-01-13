describe("Badge Tests", () => {
  it("renders default color overview", () => {
    cy.visit("/iframe.html?id=components-badge--default&viewMode=story")
      .get(".bb--badge")
      .each((el) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wrap(el).wait(300).toMatchImageSnapshot({
          thresholdType: "percent",
          threshold: 0.01
        });
      });
  });
});
