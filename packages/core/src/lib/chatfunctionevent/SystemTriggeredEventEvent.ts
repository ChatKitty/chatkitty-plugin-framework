import {ChannelGenericEventResource, ChannelResource} from "chatkitty-platform-sdk";

export type SystemTriggeredEventEvent = {
  channel: ChannelResource
  event: ChannelGenericEventResource
}
