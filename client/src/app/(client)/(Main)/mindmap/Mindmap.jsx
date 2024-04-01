import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ButtonAdd from "./ButtonAdd";
import DataTable from "./DataTable";

async function Mindmap({ data }) {
  //   const dataApi = getData();
  //   console.log(dataApi);
  const session = await getSession();
  const user = session?.user || null;
  // console.log(user);s
  console.log("data", data);
  // const dataFilter = [];
  // dataFilter.push(data.filter((item) => item.email === user.email));
  // console.log("dataFilter", dataFilter);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold">Mindmap của tôi</h1>
      <ButtonAdd user={user} />
      <DataTable user={user} data={data} />
    </div>
  );
}

export default withPageAuthRequired(Mindmap);
