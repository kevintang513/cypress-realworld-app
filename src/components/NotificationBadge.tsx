import React from "react";
import { Badge } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";

export interface NotificationBadgeProps {
  count: number;
  dataTest?: string;
  classes?: {
    badge?: string;
  };
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  dataTest = "nav-top-notifications-count",
  classes,
}) => {
  return (
    <Badge badgeContent={count > 0 ? count : undefined} data-test={dataTest} classes={classes}>
      <NotificationsIcon />
    </Badge>
  );
};

export default NotificationBadge;
