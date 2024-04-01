import { getSession } from "@auth0/nextjs-auth0";
import MindMapNode from "./MindMapNode";
import { dataServer, dataServerApi } from "./getDataServer";
import Image from "next/image";
import imgNotFound from "@/app/assets/image/404notfound.jpg";

export default async function MindmapMe({ params }) {
  const { id } = params;

  const session = await getSession();
  const user = session?.user || null;

  const data = await dataServer(id);

  const dataApi = await dataServerApi(data);

  // console.log(dataApi);

  let isMe = false;
  let isUserOther = false;
  let checkPrivate = true;

  if (user) {
    if (dataApi?.email === user?.email) {
      isMe = true;
      checkPrivate = false;
    } else {
      isUserOther = true;
      if (dataApi?.isPrivate) {
        checkPrivate = true;
      } else {
        checkPrivate = false;
      }
    }
  } else {
    isUserOther = true;

    if (dataApi?.isPrivate) {
      checkPrivate = true;
    } else {
      checkPrivate = false;
    }
  }

  return (
    <div>
      {checkPrivate === false ? (
        <MindMapNode
          dataApiServer={dataApi}
          idURL={id}
          user={user}
          isMe={isMe}
          isUserOther={isUserOther}
          // initialMetadata={initialMetadata}
        />
      ) : (
        <Image src={imgNotFound} alt="not found" />
      )}
    </div>
  );
}
