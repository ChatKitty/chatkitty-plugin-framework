import {ChannelResource, ChatUserResource} from "chatkitty-platform-sdk";

export type UserReceivedChannelInviteEvent = {
  user: ChatUserResource
  channel: ChannelResource
  invitingUser?: ChatUserResource
}
