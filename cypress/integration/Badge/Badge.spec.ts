describe("Badge Tests", () => {
  it("renders default color overview", () => {
    cy.visit("/iframe.html?id=components-badge--default&viewMode=story")
      .get(".bb--badge")
      .each((el) => {
        cy.wrap(el).toMatchImageSnapshot({
          thresholdType: "percent",
          threshold: 0.01
        });
      });
  });
});
