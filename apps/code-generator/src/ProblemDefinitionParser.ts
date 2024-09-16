export class ProblemDefinitionParser {
  problemName: string = "";
  functionName: string = "";
  inputFields: { type: string; name: String }[] = [];
  outputFields: { type: string; name: String }[] = [];

  parse(input: string): void {
    const lines = input.split("\n").map((line) => line.trim());
    let currentSection: string | null = "";

    lines.forEach((line) => {
      if (line.startsWith("Problem Name:")) {
        this.problemName = this.extractQuotedValue(line);
        console.log("line " + line);
      } else if (line.startsWith("Function Name:")) {
        this.functionName = this.extractQuotedValue(line);
        console.log("fn " + this.functionName);
        console.log("line " + line);
      } else if (line.startsWith("Input Structure:")) {
        currentSection = "input";
      } else if (line.startsWith("Output Structure:")) {
        currentSection = "output";
      } else if (line.startsWith("Input Field:")) {
        if (currentSection === "input") {
          const field = this.extractField(line);
          field && this.inputFields.push(field);
        }
      } else if (line.startsWith("Output Field:")) {
        if (currentSection === "output") {
          const field = this.extractField(line);
          field && this.outputFields.push(field);
        }
      }
    });
  }

  extractQuotedValue(line: string): string {
    const match = line.match(/: "(.*)"$/);
    return match ? match[1] : "";
  }

  extractField(line: string): { type: string; name: string } | null {
    const match = line.match(/Field: (\w+(?:<\w+>)?) (\w+)$/);
    return match ? { type: match[1], name: match[2] } : null;
  }
  generateJs(): string {
    const inputs = this.inputFields.map((field) => field.name).join(", ");
    return `function ${this.functionName}(${inputs}) {\n    // Implementation goes here\n    return result;\n}`;
  }

  generateFullJs(): string {
    const inputs = this.inputFields.map((field) => field.name).join(", ");
    const inputReads = this.inputFields
      .map((field) => {
        if (field.type.startsWith("list<")) {
          return `const size_${field.name} = parseInt(input.shift());\nconst ${field.name} = input.splice(0, size_${field.name}).map(Number);`;
        } else {
          return `const ${field.name} = parseInt(input.shift());`;
        }
      })
      .join("\n  ");
    //const outputType = this.outputFields[0].type;
    const functionCall = `const result = ${this.functionName}(${this.inputFields.map((field) => field.name).join(", ")});`;
    const outputWrite = `console.log(result);`;

    return `##USER_CODE_HERE##

const input = require('fs').readFileSync('/dev/problems/${this.problemName.toLowerCase().replace(" ", "-")}/tests/inputs/##INPUT_FILE_INDEX##.txt', 'utf8').trim().split('\\n').join(' ').split(' ');
${inputReads}
${functionCall}
${outputWrite}
    `;
  }
}
