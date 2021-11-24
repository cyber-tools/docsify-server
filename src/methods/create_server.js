import express from "express";
import cli_params from "@/configs/runtime.config";

export default function create_server(){
  const server=express();
  server.use(express.static(cli_params.docs_path));
  server.listen(3000,()=>console.log("http://localhost:3000"));
};