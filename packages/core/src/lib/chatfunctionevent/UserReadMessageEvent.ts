import {Message, ReadReceipt, User} from "@chatkitty/core";

export type UserReadMessageEvent = {
  user: User
  message: Message
  receipt: ReadReceipt
}
