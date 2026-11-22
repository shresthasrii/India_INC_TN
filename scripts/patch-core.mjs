import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Patch process.js
const processFile = path.resolve(__dirname, "../node_modules/@agent-native/core/dist/cli/process.js");
if (fs.existsSync(processFile)) {
  let content = fs.readFileSync(processFile, "utf-8");
  if (!content.includes('const cmd = command.includes(" ")')) {
    content = content.replace(
      'child = spawnProcess(command, args, cliSpawnOptions({',
      'const cmd = command.includes(" ") && !command.startsWith(\'"\') ? `"${command}"` : command;\n        child = spawnProcess(cmd, args, cliSpawnOptions({'
    );
    fs.writeFileSync(processFile, content, "utf-8");
  }
}

// 2. Patch react-router-command.js
const rrFile = path.resolve(__dirname, "../node_modules/@agent-native/core/dist/cli/react-router-command.js");
if (fs.existsSync(rrFile)) {
  let content = fs.readFileSync(rrFile, "utf-8");
  if (!content.includes('process.platform === "win32" && candidate.includes(" ")')) {
    content = content.replace(
      'if (fs.existsSync(candidate))\n            return candidate;',
      'if (fs.existsSync(candidate))\n            return process.platform === "win32" && candidate.includes(" ") ? `"${candidate}"` : candidate;'
    );
    fs.writeFileSync(rrFile, content, "utf-8");
  }
}

// 3. Patch index.js runBuildStep
const indexFile = path.resolve(__dirname, "../node_modules/@agent-native/core/dist/cli/index.js");
if (fs.existsSync(indexFile)) {
  let content = fs.readFileSync(indexFile, "utf-8");
  if (!content.includes('const finalArgs = cmdArgs.map')) {
    content = content.replace(
      'const child = spawn(cmd, cmdArgs, {',
      'const finalCmd = cmd.includes(" ") && !cmd.startsWith(\'"\') ? `"${cmd}"` : cmd;\n        const finalArgs = cmdArgs.map((arg) => typeof arg === "string" && arg.includes(" ") && !arg.startsWith(\'"\') ? `"${arg}"` : arg);\n        const child = spawn(finalCmd, finalArgs, {'
    );
    content = content.replace(
      'const finalCmd = cmd.includes(" ") && !cmd.startsWith(\'"\') ? `"${cmd}"` : cmd;\n        const child = spawn(finalCmd, cmdArgs, {',
      'const finalCmd = cmd.includes(" ") && !cmd.startsWith(\'"\') ? `"${cmd}"` : cmd;\n        const finalArgs = cmdArgs.map((arg) => typeof arg === "string" && arg.includes(" ") && !arg.startsWith(\'"\') ? `"${arg}"` : arg);\n        const child = spawn(finalCmd, finalArgs, {'
    );
    fs.writeFileSync(indexFile, content, "utf-8");
  }
}
