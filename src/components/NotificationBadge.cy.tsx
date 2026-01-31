import React from "react";
import { interpret } from "xstate";
import { dataMachine } from "../machines/dataMachine";
import NotificationBadge from "./NotificationBadge";

describe("NotificationBadge", () => {
  let notificationsService;

  beforeEach(() => {
    notificationsService = interpret(dataMachine("notifications"));
    notificationsService.start();
  });

  it("hides badge when there are zero notifications", () => {
    notificationsService.send({ type: "SUCCESS", results: [], pageData: {} });

    cy.mount(<NotificationBadge notificationsService={notificationsService} />);
    cy.get("[data-test=nav-top-notifications-count]").should("not.exist");
  });

  it("displays correct count with multiple notifications", () => {
    const mockNotifications = [{ id: 1 }, { id: 2 }, { id: 3 }];
    notificationsService.send({ type: "SUCCESS", results: mockNotifications, pageData: {} });

    cy.mount(<NotificationBadge notificationsService={notificationsService} />);
    cy.get("[data-test=nav-top-notifications-count]").should("have.text", "3");
  });

  it("displays correct count with single notification", () => {
    const mockNotifications = [{ id: 1 }];
    notificationsService.send({ type: "SUCCESS", results: mockNotifications, pageData: {} });

    cy.mount(<NotificationBadge notificationsService={notificationsService} />);
    cy.get("[data-test=nav-top-notifications-count]").should("have.text", "1");
  });
});
