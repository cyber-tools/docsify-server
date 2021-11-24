import path from "path";
import { ArgumentParser } from "argparse";
import {version,description} from "@@/package.json";

const parser = new ArgumentParser({description});

parser.add_argument("-v", "--version", { action: "version", version });
parser.add_argument("-s", "--sidebar", { 
  help: "sidebarname",
  default:path.resolve(process.cwd(),"./docs/_sidebar.md")
});
parser.add_argument("-p", "--docs-path", { 
  help: "文档源文件",
  default:path.resolve(process.cwd(),"./docs")
});

const cli_params=parser.parse_args();

export default {...cli_params};