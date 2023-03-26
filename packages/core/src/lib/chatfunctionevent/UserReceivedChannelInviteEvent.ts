import {Channel, User} from "@chatkitty/core";

export type UserReceivedChannelInviteEvent = {
  user: User
  channel: Channel
  invitingUser: User
}
