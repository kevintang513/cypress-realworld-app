import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "red",
    color: "white",
  },
}));

interface NotificationBadgeProps {
  count?: number;
  children: React.ReactNode;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count, children }) => {
  const showBadge = count !== undefined && count > 0;

  return (
    <StyledBadge
      badgeContent={showBadge ? count : undefined}
      data-test="nav-top-notifications-count"
    >
      {children}
    </StyledBadge>
  );
};

export default NotificationBadge;
