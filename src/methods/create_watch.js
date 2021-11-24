import chokidar from "chokidar";
import generate from "@/scripts/commands/generate";
import cli_params from "@/configs/runtime.config";

export default async function create_watch(){
  await generate(cli_params.docs_path, cli_params.sidebar);
  const watch_path=cli_params.docs_path;
  chokidar.watch(watch_path,{
    ignoreInitial:true,
    ignored:cli_params.sidebar,
  }).on("all", async () => {
    await generate(cli_params.docs_path, cli_params.sidebar);
  });
};