describe("Avatar Tests", () => {
  function snapshotMatchesSize(viewport: string, size: string) {
    cy.visit(
      `/iframe.html?id=components-avatar--default&args=&knob-name=Erika%20Musterfrau&knob-size=${size}&knob-imgUrl=https://randomuser.me/api/portraits/men/74.jpg&viewMode=story`
    )
      .get(".bb--avatar-img")
      .matchImageSnapshot(`${viewport}--avatar-${size}`, {
        failureThresholdType: "percent",
        failureThreshold: 1
      });
  }

  function testSizes(viewport: string) {
    // dynamic creation of tests for all of our ratios
    ["small", "default", "large"].forEach((size) => {
      it(`matches snapshot with size: ${size}`, () => {
        snapshotMatchesSize(viewport, size);
      });
    });
  }

  ["iphone-x", "macbook-16"].forEach((viewport: "iphone-x" | "macbook-16") => {
    context("iPhone X", () => {
      beforeEach(() => {
        cy.viewport(viewport);
      });
      testSizes(viewport);
    });
  });
});
