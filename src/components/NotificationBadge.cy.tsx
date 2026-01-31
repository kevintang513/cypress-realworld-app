import React from "react";
import { MemoryRouter } from "react-router-dom";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge", () => {
  it("hides badge when count is undefined", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("not.contain.text");
  });

  it("hides badge when count is 0", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={0} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("not.contain.text");
  });

  it("displays correct count when notifications exist", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={5} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible").and("contain.text", "5");
  });

  it("displays correct count for large numbers", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={99} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]")
      .should("be.visible")
      .and("contain.text", "99");
  });

  it("has correct data-test attributes for E2E compatibility", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={3} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-link]").should("exist");
    cy.get("[data-test=nav-top-notifications-count]").should("exist");
  });

  it("links to notifications page by default", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={1} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-link]").should("have.attr", "href", "/notifications");
  });
});
