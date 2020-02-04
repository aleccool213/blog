import postSlugs from "../post_slugs";

describe("Post Headers", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("should have proper headers for each post", () => {
    postSlugs.forEach(postSlug => {
      cy.visit(`/${postSlug}`).then(() => {
        cy.get("head").within(_headElement => {
          // description
          cy.get('meta[name="description"]').should("exist");

          // og:title
          cy.get('meta[property="og:title"]').should("exist");

          // og:description
          cy.get('meta[property="og:description"]').should("exist");

          // og:image
          cy.get('meta[property="og:image"]').should("exist");

          // canonical / og:url
          cy.get('meta[property="og:url"]').should("exist");

          // canonical
          cy.get('link[rel="canonical"]').should("exist");

          // twitter:card
          cy.get('meta[name="twitter:card"]').should("exist");

          // twitter:creator
          cy.get('meta[name="twitter:creator"]').should("exist");

          // twitter:title
          cy.get('meta[name="twitter:title"]').should("exist");

          // twitter:description
          cy.get('meta[name="twitter:description"]').should("exist");
        });
      });
    });
  });
});
