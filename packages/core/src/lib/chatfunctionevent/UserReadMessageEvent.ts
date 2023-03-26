import {ChatUserResource, MessageReadReceiptResource, MessageResource} from "chatkitty-platform-sdk";

export type UserReadMessageEvent = {
  user: ChatUserResource
  message: MessageResource
  receipt: MessageReadReceiptResource
}
