import {Channel, User} from "@chatkitty/core";

export type UserTriggeredEventEvent = {
  user: User
  channel: Channel
  event: any
}
