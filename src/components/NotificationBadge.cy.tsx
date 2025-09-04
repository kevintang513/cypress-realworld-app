import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge", () => {
  const mountWithRouter = (component: React.ReactElement) => {
    cy.mount(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("hides badge when count is zero", () => {
    mountWithRouter(<NotificationBadge count={0} />);

    cy.get("[data-test=nav-top-notifications-count]").should("not.have.text");
    cy.get("[data-test=nav-top-notifications-link]").should("exist");
    cy.get(".MuiBadge-badge").should("have.class", "MuiBadge-invisible");
  });

  it("hides badge when count is undefined", () => {
    mountWithRouter(<NotificationBadge />);

    cy.get("[data-test=nav-top-notifications-count]").should("not.have.text");
    cy.get("[data-test=nav-top-notifications-link]").should("exist");
    cy.get(".MuiBadge-badge").should("have.class", "MuiBadge-invisible");
  });

  it("displays correct count for single notification", () => {
    mountWithRouter(<NotificationBadge count={1} />);

    cy.get("[data-test=nav-top-notifications-count]").should("have.text", "1");
    cy.get(".MuiBadge-badge").should("exist").and("have.class", "NotificationBadge-customBadge");
  });

  it("displays correct count for multiple notifications", () => {
    mountWithRouter(<NotificationBadge count={5} />);

    cy.get("[data-test=nav-top-notifications-count]").should("have.text", "5");
    cy.get(".MuiBadge-badge").should("exist");
  });

  it("displays correct count for large numbers", () => {
    mountWithRouter(<NotificationBadge count={99} />);

    cy.get("[data-test=nav-top-notifications-count]").should("have.text", "99");
  });

  it("has clickable notification link", () => {
    mountWithRouter(<NotificationBadge count={3} />);

    cy.get("[data-test=nav-top-notifications-link]").should("exist");
    cy.get("[data-test=nav-top-notifications-link]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-link]").click();
  });

  it("uses custom test id when provided", () => {
    mountWithRouter(<NotificationBadge count={2} testId="custom-badge-test" />);

    cy.get("[data-test=custom-badge-test]").should("have.text", "2");
  });
});
