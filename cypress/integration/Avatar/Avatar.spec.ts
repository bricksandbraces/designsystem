describe("Avatar Tests", () => {
  function snapshotMatchesSize(size: string) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit(
      `/iframe.html?id=components-avatar--default&args=&knob-name=Erika%20Musterfrau&knob-size=${size}&knob-imgUrl=https://randomuser.me/api/portraits/men/74.jpg&viewMode=story`
    )
      .get(".bb--avatar-img")
      .wait(300)
      .toMatchImageSnapshot({ thresholdType: "percent", threshold: 0.01 });
  }

  // dynamic creation of tests for all of our ratios
  ["small", "default", "large"].forEach((size) => {
    it(`matches snapshot with size: ${size}`, () => {
      snapshotMatchesSize(size);
    });
  });
});
