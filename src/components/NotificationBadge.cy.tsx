import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge", () => {
  it("should hide badge when count is 0", () => {
    cy.mount(
      <NotificationBadge count={0}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("exist");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "have.class",
      "MuiBadge-invisible"
    );
  });

  it("should hide badge when count is undefined", () => {
    cy.mount(
      <NotificationBadge count={undefined}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("exist");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "have.class",
      "MuiBadge-invisible"
    );
  });

  it("should display badge with count 1", () => {
    cy.mount(
      <NotificationBadge count={1}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "not.have.class",
      "MuiBadge-invisible"
    );
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should("contain", "1");
  });

  it("should display badge with count 5", () => {
    cy.mount(
      <NotificationBadge count={5}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "not.have.class",
      "MuiBadge-invisible"
    );
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should("contain", "5");
  });

  it("should display badge with count 99", () => {
    cy.mount(
      <NotificationBadge count={99}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "not.have.class",
      "MuiBadge-invisible"
    );
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should("contain", "99");
  });

  it("should handle negative count (-1)", () => {
    cy.mount(
      <NotificationBadge count={-1}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("exist");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "have.class",
      "MuiBadge-invisible"
    );
  });

  it("should handle multiple negative values (-5)", () => {
    cy.mount(
      <NotificationBadge count={-5}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("exist");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "have.class",
      "MuiBadge-invisible"
    );
  });

  it("should handle non-integer values (0.5)", () => {
    cy.mount(
      <NotificationBadge count={0.5}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "not.have.class",
      "MuiBadge-invisible"
    );
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should("contain", "0.5");
  });

  it("should handle very large numbers (9999)", () => {
    cy.mount(
      <NotificationBadge count={9999}>
        <NotificationsIcon />
      </NotificationBadge>
    );
    cy.get("[data-test=nav-top-notifications-count]").should("be.visible");
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should(
      "not.have.class",
      "MuiBadge-invisible"
    );
    cy.get("[data-test=nav-top-notifications-count] .MuiBadge-badge").should("contain.text", "99+");
  });
});
