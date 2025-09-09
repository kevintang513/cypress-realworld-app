import React from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Badge } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const PREFIX = "NotificationBadge";

const classes = {
  customBadge: `${PREFIX}-customBadge`,
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [`& .${classes.customBadge}`]: {
    backgroundColor: "red",
    color: "white",
  },
}));

interface NotificationBadgeProps {
  count?: number;
  to?: string;
  color?: "inherit" | "default" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  to = "/notifications",
  color = "inherit",
  size = "large",
}) => {
  return (
    <StyledIconButton
      color={color}
      component={RouterLink}
      to={to}
      data-test="nav-top-notifications-link"
      size={size}
    >
      <Badge
        badgeContent={count}
        data-test="nav-top-notifications-count"
        classes={{ badge: classes.customBadge }}
      >
        <NotificationsIcon />
      </Badge>
    </StyledIconButton>
  );
};

export default NotificationBadge;
