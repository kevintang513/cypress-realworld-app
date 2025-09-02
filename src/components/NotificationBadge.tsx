import React from "react";
import { Badge, IconButton } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export interface NotificationBadgeProps {
  count: number;
  className?: string;
  "data-test"?: string;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  className,
  "data-test": dataTest,
}) => {
  return (
    <IconButton
      color="inherit"
      component={RouterLink}
      to="/notifications"
      data-test="nav-top-notifications-link"
      size="large"
    >
      <Badge
        badgeContent={count > 0 ? count : undefined}
        data-test={dataTest || "nav-top-notifications-count"}
        data-testid={dataTest || "nav-top-notifications-count"}
        classes={className ? { badge: className } : undefined}
      >
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationBadge;
