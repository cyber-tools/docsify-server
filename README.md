# @cyber-tools/docsify-server

- 针对docsify-cli存在的功能缺陷重新设计的文档助手
- 自动根据docs中的md文件生成sidebar目录,并启动文档预览服务
- 实时监控docs文件夹的改变生成_sidebar.md文件

```shell
npm install @cyber-tools/docsify-server --save-dev
```

usage: docsify-server [-h] [-v] [-s SIDEBAR] [-p DOCS_PATH]

自动根据docs中的md文件生成sidebar目录,并启动文档预览服务

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -s SIDEBAR, --sidebar SIDEBAR
                        sidebarname
  -p DOCS_PATH, --docs-path DOCS_PATH
                        文档源文件