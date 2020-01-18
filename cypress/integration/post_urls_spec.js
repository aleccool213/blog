import postSlugs from "../post_slugs";

describe("Post URLS are correct values", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("all of the post slugs should work", () => {
    postSlugs.forEach(postSlug => {
      cy.visit(`/${postSlug}`).then(() => {
        // header appears
        cy.get("h1").should("not.contain", "Not Found");

        // content appears
        cy.get("p");
      });
    });
  });
});

describe("404 not found shows when going to bad link", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("all of the post slugs should work", () => {
    cy.visit(`/does_not_exist`).then(() => {
      // header appears
      cy.findByText("Gatsby.js development 404 page").should("exist");

      // content appears
      cy.get("p");
    });
  });
});
