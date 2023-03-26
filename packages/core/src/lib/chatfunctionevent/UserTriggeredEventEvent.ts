import {ChannelGenericEventResource, ChannelResource, ChatUserResource} from "chatkitty-platform-sdk";

export type UserTriggeredEventEvent = {
  user: ChatUserResource
  channel: ChannelResource
  event: ChannelGenericEventResource
}
