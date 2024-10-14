import { setupServer } from "msw/node";
import { handlers } from "./handlers";

/**
 * サーバーコンポーネント用のモックサービスワーカー
 *
 * @type {SetupWorker}
 */
export const server = setupServer(...handlers);
