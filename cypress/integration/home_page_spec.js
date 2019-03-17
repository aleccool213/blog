/// <reference types="Cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("can visit a blog post link from the home page", () => {
    cy.visit("/");

    cy.get("#post-page-link").click();

    // header appears
    cy.get("h1");

    // content appears
    cy.get("p");
  });
});
