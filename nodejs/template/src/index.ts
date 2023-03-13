import { Plugin } from '@chatkitty-plugins/core';

export default class MyPlugin extends Plugin {
  onInitialize(context: any) {
    console.log('Initialized');
  }
}
