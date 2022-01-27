describe("AspectRatio Tests", () => {
  function snapshotMatchesRatio(viewport: string, ratio: string) {
    cy.visit(
      `/iframe.html?id=components-aspectratio--default&args=&knob-ratio=${ratio}&viewMode=story`
    )
      .get(".bb--aspect-ratio")
      .matchImageSnapshot(`${viewport}--aspect-ratio-${ratio}`, {
        failureThresholdType: "percent",
        failureThreshold: 1
      });
  }

  function testRatios(viewport: string) {
    // dynamic creation of tests for all of our ratios
    ["1x1", "2x1", "4x3", "16x9", "21x9"].forEach((ratio) => {
      it(`supports ${ratio}`, () => {
        snapshotMatchesRatio(viewport, ratio);
      });
    });
  }

  ["iphone-x", "macbook-16"].forEach((viewport: "iphone-x" | "macbook-16") => {
    context(viewport, () => {
      beforeEach(() => {
        cy.viewport(viewport);
      });
      testRatios(viewport);
    });
  });
});
