export abstract class Plugin {
  abstract handleEvent(event: any, context: any): void
}
