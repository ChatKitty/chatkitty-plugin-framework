import {Context} from "./context";
import {
  SystemTriggeredEventEvent,
  UserAttemptedStartSessionEvent, UserReadMessageEvent, UserReceivedChannelInviteEvent,
  UserReceivedNotificationEvent,
  UserSentMessageEvent,
  UserStartedChatSessionEvent, UserTriggeredEventEvent
} from "./chatfunctionevent";

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
