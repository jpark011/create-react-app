import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { cwd } from 'process';
import ora from 'ora';

const program = new Command();
const srcPath = path.resolve(__dirname, '../template');

program.argument(`<dirName>`, `name of directory to create`).action(copyTemplate).parse();

function copyTemplate(dirName: string) {
  const spinner = ora('필요 파일 복사중...').start();
  const destPath = path.resolve(cwd(), dirName);

  fs.copySync(srcPath, destPath);

  spinner.succeed('React 앱 생성 완료!');
}
