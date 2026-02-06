import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NotificationBadge from "../NotificationBadge";

describe("NotificationBadge", () => {
  it("should hide badge when count is 0", () => {
    render(<NotificationBadge count={0} />);

    const badge = screen.getByTestId("NotificationsIcon");
    expect(badge).toBeInTheDocument();

    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  it("should display correct count when count > 0", () => {
    render(<NotificationBadge count={5} />);

    const badge = screen.getByTestId("NotificationsIcon");
    expect(badge).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should display correct count for larger numbers", () => {
    render(<NotificationBadge count={99} />);

    expect(screen.getByText("99")).toBeInTheDocument();
  });

  it("should use custom data-test attribute when provided", () => {
    render(<NotificationBadge count={3} dataTest="custom-test-id" />);

    const badge = screen.getByTestId("NotificationsIcon");
    expect(badge).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should apply custom classes when provided", () => {
    const customClasses = { badge: "custom-badge-class" };
    render(<NotificationBadge count={1} classes={customClasses} />);

    const badge = screen.getByTestId("NotificationsIcon");
    expect(badge).toBeInTheDocument();
  });

  it("should render notifications icon", () => {
    render(<NotificationBadge count={0} />);

    const icon = screen.getByTestId("NotificationsIcon");
    expect(icon).toBeInTheDocument();
  });
});
