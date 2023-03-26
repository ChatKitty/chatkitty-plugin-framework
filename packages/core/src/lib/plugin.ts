import {Context} from "./context";
import {SystemTriggeredEventEvent} from "./chatfunctionevent/SystemTriggeredEventEvent";
import {UserAttemptedStartSessionEvent} from "./chatfunctionevent/UserAttemptedStartSessionEvent";
import {UserReceivedNotificationEvent} from "./chatfunctionevent/UserReceivedNotificationEvent";
import {UserSentMessageEvent} from "./chatfunctionevent/UserSentMessageEvent";
import {UserStartedChatSessionEvent} from "./chatfunctionevent/UserStartedChatSessionEvent";
import {UserReactedToMessageEvent} from "./chatfunctionevent/UserReactedToMessageEvent";
import {UserReadMessageEvent} from "./chatfunctionevent/UserReadMessageEvent";
import {UserReceivedChannelInviteEvent} from "./chatfunctionevent/UserReceivedChannelInviteEvent";
import {UserTriggeredEventEvent} from "./chatfunctionevent/UserTriggeredEventEvent";

export abstract class Plugin<RequiredParams, OptionalParams> {
  abstract onInitialize(context: Context<RequiredParams, OptionalParams>): void
  async handleUserAttemptedStartSessionEvent(event: UserAttemptedStartSessionEvent,
                                             context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserReceivedNotificationEvent(event: UserReceivedNotificationEvent,
                                            context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserSentMessageEvent(event: UserSentMessageEvent,
                                   context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserStartedChatSessionEvent(event: UserStartedChatSessionEvent,
                                          context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserReactedToMessageEvent(event: UserReactedToMessageEvent,
                                        context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserReadMessageEvent(event: UserReadMessageEvent,
                                   context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserReceivedChannelInviteEvent(event: UserReceivedChannelInviteEvent,
                                             context: Context<RequiredParams, OptionalParams>) {
  }

  async handleUserTriggeredEventEvent(event: UserTriggeredEventEvent,
                                      context: Context<RequiredParams, OptionalParams>) {
  }

  async handleSystemTriggeredEventEvent(event: SystemTriggeredEventEvent,
                                        context: Context<RequiredParams, OptionalParams>) {
  }
}
