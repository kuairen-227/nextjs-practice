import { z } from "zod";

/**
 * プロジェクトベーススキーマ
 */
export const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
});

/**
 * プロジェクト一覧取得スキーマ
 */
export const getProjectsSchema = projectSchema.array().brand<"GetProjects">();
