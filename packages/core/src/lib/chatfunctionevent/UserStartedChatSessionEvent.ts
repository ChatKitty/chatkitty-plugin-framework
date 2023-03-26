import {Channel, User} from "@chatkitty/core";

export type UserStartedChatSessionEvent = {
  user: User
  channel: Channel
  channelUnread: boolean
  channelMessagesCount: number
}
