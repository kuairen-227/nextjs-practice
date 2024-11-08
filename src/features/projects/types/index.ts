import { z } from "zod";
import { type getProjectsSchema } from "../schema";

/**
 * プロジェクト一覧取得
 */
export type GetProjects = z.infer<typeof getProjectsSchema>;
