import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/**
 * クライアントコンポーネント用のモックサービスワーカー
 *
 * @type {SetupWorker}
 */
export const worker = setupWorker(...handlers);
