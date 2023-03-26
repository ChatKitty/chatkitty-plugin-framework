import {ChannelResource, ChatUserResource, MessageResource} from "chatkitty-platform-sdk";

export type UserSentMessageEvent = {
  user: ChatUserResource
  channel: ChannelResource
  message: MessageResource
}
