import type { RequestBody, RequestState } from "./Types";

/*
 |--------------------------------------------------------------------------------
 | Overrides
 |--------------------------------------------------------------------------------
 */

//#region

declare module "http" {
  interface IncomingMessage {
    params: RequestState;
    query: RequestState;
    body: RequestBody;
  }
}

//#endregion

/*
 |--------------------------------------------------------------------------------
 | Exports
 |--------------------------------------------------------------------------------
 */

//#region

export * from "./Lib/Action";
export * from "./Lib/Listener";
export * from "./Lib/Response";
export * from "./Lib/Route";
export * from "./Lib/Router";
export * from "./Lib/Server";
export * from "./Middleware/Cors";
export * from "./Middleware/Route";
export * from "./Types/Middleware";

//#endregion
