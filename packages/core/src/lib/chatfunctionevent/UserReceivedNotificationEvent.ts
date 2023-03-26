import {ChatUserResource, NotificationResource} from "chatkitty-platform-sdk";

export type UserReceivedNotificationEvent = {
  user: ChatUserResource
  notification: NotificationResource
  userHasActiveSession: boolean
}
