import * as core from '@actions/core'
import * as coreCommand from '@actions/core/lib/command'
import * as latexParser from './latex-parser'

async function run(): Promise<void> {
  const path = core.getInput('latex_file');
  const name = core.getInput('command_name');

  try {
    const val = await latexParser.parse(path, name);

    core.setOutput("command_value", val);
  } catch (error) {
    core.setFailed(error.message);
  }
}

// Main
run();