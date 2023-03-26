import { Plugin, Context, UserAttemptedStartSessionEvent } from '@chatkitty-plugins/core';

type MyRequiredParams = {
  apiKey: string
}

type MyOptionalParams = {
  param1: string

  param2: string
}
export default class MyPlugin extends Plugin<MyRequiredParams, MyOptionalParams> {
  override onInitialize(context: Context<MyRequiredParams, MyOptionalParams>) {
    console.log('Initialized');
  }

  override async handleUserAttemptedStartSessionEvent(event: UserAttemptedStartSessionEvent,
                                                      context: Context<MyRequiredParams, MyOptionalParams>){
    console.log('handleUserAttemptedStartSessionEvent');
  }
}
