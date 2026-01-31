import React from "react";
import { styled } from "@mui/material/styles";
import { Badge, IconButton } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const PREFIX = "NotificationBadge";

const classes = {
  customBadge: `${PREFIX}-customBadge`,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  [`& .${classes.customBadge}`]: {
    backgroundColor: "red",
    color: "white",
  },
}));

interface NotificationBadgeProps {
  count?: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <IconButton
      color="inherit"
      // @ts-ignore
      component={RouterLink}
      to="/notifications"
      data-test="nav-top-notifications-link"
      size="large"
    >
      <StyledBadge
        badgeContent={count}
        data-test="nav-top-notifications-count"
        classes={{ badge: classes.customBadge }}
      >
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default NotificationBadge;
