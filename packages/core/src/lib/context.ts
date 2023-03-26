import {ChatKitty} from "@chatkitty/core";

export type Context<RequiredParams, OptionalParams> = {
  requiredParams: RequiredParams
  optionalParams: Partial<OptionalParams>
  ChatKitty: ChatKitty
}

