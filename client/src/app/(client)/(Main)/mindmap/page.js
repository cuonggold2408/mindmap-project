import { getSession } from "@auth0/nextjs-auth0";
import Mindmap from "./Mindmap";
import { getData } from "./[id]/getDataServer";

export const metadata = {
  title: "Mindmap của tôi - Mindmap Flow",
  description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
};

export default async function MindPages() {
  const session = await getSession();
  const user = session?.user || null;
  const data = await getData(user);
  // console.log(data);
  console.log(user);

  return (
    <div>
      <Mindmap data={data} />
    </div>
  );
}
