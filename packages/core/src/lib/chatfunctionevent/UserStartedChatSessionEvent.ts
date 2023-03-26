import {ChannelResource, ChatUserResource} from "chatkitty-platform-sdk";


export type UserStartedChatSessionEvent = {
  user: ChatUserResource
  channel: ChannelResource
  channelUnread: boolean
  channelMessagesCount: number
}
