import { http, HttpResponse } from "msw";

// TODO: サンプルのため、改めてスキーマ定義のうえで修正する
export const projectsHandlers = [
  http.get("http://localhost:5020/api/v1/projects", () => {
    return HttpResponse.json([
      {
        id: "4e6b3b92-98eb-440a-b543-d113b78feba0",
        name: "プロジェクト1",
        description: "プロジェクト1の説明",
      },
      {
        id: "77b01c7c-13f0-4e79-acdb-6f2d724596bf",
        name: "プロジェクト2",
        description: "プロジェクト2の説明",
      },
      {
        id: "0fec3261-c12e-445a-b55f-e12efd59741d",
        name: "プロジェクト3",
        description: "プロジェクト3の説明",
      },
      {
        id: "a0dee837-3f64-483b-b3e0-8c3ab3322c54",
        name: "プロジェクト4",
        description: "プロジェクト4の説明",
      },
    ]);
  }),
];
