import React from "react";
import { Badge } from "@mui/material";
import { useActor } from "@xstate/react";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import {
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";
import { DataContext, DataSchema, DataEvents } from "../machines/dataMachine";

interface NotificationBadgeProps {
  notificationsService: Interpreter<
    DataContext,
    DataSchema,
    DataEvents,
    any,
    ResolveTypegenMeta<TypegenDisabled, DataEvents, BaseActionObject, ServiceMap>
  >;
  className?: string;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  notificationsService,
  className,
}) => {
  const [notificationsState] = useActor(notificationsService);
  const allNotifications = notificationsState?.context?.results;

  return (
    <Badge
      badgeContent={allNotifications ? allNotifications.length : undefined}
      data-test="nav-top-notifications-count"
      classes={{ badge: className }}
    >
      <NotificationsIcon />
    </Badge>
  );
};

export default NotificationBadge;
