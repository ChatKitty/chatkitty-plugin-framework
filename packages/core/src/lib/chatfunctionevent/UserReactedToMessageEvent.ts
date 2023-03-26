import {Message, Reaction, User} from "@chatkitty/core";

export type UserReactedToMessageEvent = {
  user: User
  message: Message
  reaction: Reaction
}

