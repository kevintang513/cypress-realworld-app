import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge Component", () => {
  it("should hide badge when count is 0", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={0} />
      </MemoryRouter>
    );

    cy.getBySel("nav-top-notifications-count").should("exist");
    cy.getBySel("nav-top-notifications-count").should("not.have.text");
  });

  it("should display correct count when count is greater than 0", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={7} />
      </MemoryRouter>
    );

    cy.getBySel("nav-top-notifications-count").should("have.text", "7");
  });

  it("should navigate to notifications page when clicked", () => {
    cy.mount(
      <MemoryRouter>
        <NotificationBadge count={3} />
      </MemoryRouter>
    );

    cy.getBySel("nav-top-notifications-link").should("have.attr", "href", "/notifications");
  });
});
