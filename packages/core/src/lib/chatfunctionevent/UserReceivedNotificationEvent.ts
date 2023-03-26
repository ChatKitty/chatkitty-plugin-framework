import {Notification, User} from "@chatkitty/core";

export type UserReceivedNotificationEvent = {
  user: User
  notification: Notification
  userHasActiveSession: boolean
}
