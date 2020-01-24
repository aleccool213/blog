import postSlugs from "../post_slugs";

describe("Post URLS are correct values", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("all of the post slugs should work", () => {
    postSlugs.forEach(postSlug => {
      cy.visit(`/${postSlug}`).then(() => {
        // content appears
        cy.get("p");
      });
    });
  });
});

// TODO: re-enable when you have 404 pages working again
xdescribe("404 not found shows when going to bad link", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("should show 404 page", () => {
    cy.visit(`/does_not_exist`).then(() => {
      // header appears
      cy.findByText("Gatsby.js development 404 page").should("exist");

      // content appears
      cy.get("p");
    });
  });
});
