import { GetProjects } from "../types";

/**
 * プロジェクト一覧取得API
 */
export const getProjects = async (): Promise<GetProjects> => {
  const res = await fetch("http://localhost:5020/api/v1/projects");
  return res.json();
};
