import { ChatKitty } from "chatkitty-platform-sdk"

export type Context<RequiredParams, OptionalParams> = {
  requiredParams: RequiredParams
  optionalParams: Partial<OptionalParams>
  ChatKitty: ChatKitty
}

