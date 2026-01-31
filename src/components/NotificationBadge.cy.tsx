import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge", () => {
  it("hides badge when count is undefined", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("not.exist");
  });

  it("hides badge when count is 0", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={0} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("not.exist");
  });

  it("displays correct count when notifications exist", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={5} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("contain", "5");
  });

  it("displays correct count for different values", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={12} />
      </MemoryRouter>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("contain", "12");
  });
});
