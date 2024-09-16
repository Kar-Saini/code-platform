import fs from "fs";
import path from "path";
import { ProblemDefinitionParser } from "./ProblemDefinitionParser";

function partialBoilerPlateGenerator(generatorFilePath: string) {
  const inputFilePath = path.join(__dirname, generatorFilePath, "Structure.md");
  //store code at
  const boilerPlateCodePath = path.join(
    __dirname,
    generatorFilePath,
    "boilerplate-code"
  );
  const fullBoilerPlateCodePath = path.join(
    __dirname,
    generatorFilePath,
    "full-boilerplate-code"
  );

  //read
  const input = fs.readFileSync(inputFilePath, "utf-8");

  const parser = new ProblemDefinitionParser();
  parser.parse(input);

  const jsBoilerPlateCode = parser.generateJs();
  const jsFullBoilerPlateCode = parser.generateFullJs();

  if (!fs.existsSync(boilerPlateCodePath)) {
    fs.mkdirSync(boilerPlateCodePath, { recursive: true });
  }
  if (!fs.existsSync(fullBoilerPlateCodePath)) {
    fs.mkdirSync(fullBoilerPlateCodePath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(boilerPlateCodePath, "function.js"),
    jsBoilerPlateCode
  );
  console.log("Boiler plate code genereated");
  fs.writeFileSync(
    path.join(fullBoilerPlateCodePath, "function.js"),
    jsFullBoilerPlateCode
  );
  console.log("full Boiler plate code genereated");
}

partialBoilerPlateGenerator("../../problems/two-sum");
