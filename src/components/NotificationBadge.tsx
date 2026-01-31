import React from "react";
import { styled } from "@mui/material/styles";
import { Badge, IconButton } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

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
  testId?: string;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  testId = "nav-top-notifications-count",
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/notifications");
  };

  return (
    <StyledIconButton
      color="inherit"
      onClick={handleClick}
      data-test="nav-top-notifications-link"
      size="large"
    >
      <Badge
        badgeContent={count && count > 0 ? count : undefined}
        data-test={testId}
        classes={{ badge: classes.customBadge }}
      >
        <NotificationsIcon />
      </Badge>
    </StyledIconButton>
  );
};

export default NotificationBadge;
