import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotificationBadge from "../NotificationBadge";

const renderNotificationBadge = (props: any) => {
  return render(
    <MemoryRouter>
      <NotificationBadge {...props} />
    </MemoryRouter>
  );
};

describe("NotificationBadge", () => {
  it("should hide badge when count is 0", () => {
    renderNotificationBadge({ count: 0 });

    const badge = screen.getByTestId("nav-top-notifications-count");
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe("");
  });

  it("should display correct count when count is greater than 0", () => {
    renderNotificationBadge({ count: 5 });

    const badge = screen.getByTestId("nav-top-notifications-count");
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe("5");
  });

  it("should display correct count for larger numbers", () => {
    renderNotificationBadge({ count: 99 });

    const badge = screen.getByTestId("nav-top-notifications-count");
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe("99");
  });

  it("should render with custom className", () => {
    renderNotificationBadge({ count: 3, className: "custom-badge-class" });

    const badge = screen.getByTestId("nav-top-notifications-count");
    const badgeContent = badge.querySelector(".MuiBadge-badge");
    expect(badgeContent).toHaveClass("custom-badge-class");
  });

  it("should render notifications icon and link to notifications page", () => {
    renderNotificationBadge({ count: 1 });

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/notifications");

    const icon = link.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
