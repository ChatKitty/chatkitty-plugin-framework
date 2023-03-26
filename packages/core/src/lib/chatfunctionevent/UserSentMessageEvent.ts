import {Channel, Message, User} from "@chatkitty/core";

export type UserSentMessageEvent = {
  user: User
  channel: Channel
  message: Message
}
