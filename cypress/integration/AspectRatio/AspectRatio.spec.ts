describe("AspectRatio Tests", () => {
  function snapshotMatchesRatio(ratio: string) {
    cy.visit(
      `/iframe.html?id=components-aspectratio--default&args=&knob-ratio=${ratio}&viewMode=story`
    )
      .get(".bb--grid-example")
      .toMatchImageSnapshot({ thresholdType: "percent", threshold: 0.01 });
  }

  // dynamic creation of tests for all of our ratios
  ["1x1", "2x1", "4x3", "16x9", "21x9"].forEach((ratio) => {
    it(`supports ${ratio}`, () => {
      snapshotMatchesRatio(ratio);
    });
  });
});
