import create_watch from "@/methods/create_watch";
import create_server from "@/methods/create_server";

(async ()=>{
  await create_watch();
  await create_server();
})();
