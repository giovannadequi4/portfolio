#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

main();

function main() {
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(distDir)) {
    console.error('Cannot deploy: run `npm run build` first so the dist folder exists.');
    process.exitCode = 1;
    return;
  }

  const worktree = path.join(rootDir, '.gh-pages-deploy');
  fs.rmSync(worktree, { recursive: true, force: true });
  fs.mkdirSync(worktree, { recursive: true });
  fs.cpSync(distDir, worktree, { recursive: true });

  const remoteUrl = getRemoteUrl(rootDir);
  syncGitConfig(rootDir, worktree);

  runGit(['init'], worktree);
  runGit(['checkout', '--orphan', 'gh-pages'], worktree);
  runGit(['add', '-A'], worktree);
  runGit(['commit', '-m', 'chore: deploy gh-pages', '--allow-empty'], worktree);
  runGit(['remote', 'add', 'origin', remoteUrl], worktree);
  runGit(['push', '-f', 'origin', 'gh-pages'], worktree);

  fs.rmSync(worktree, { recursive: true, force: true });
}

function getRemoteUrl(rootDir) {
  try {
    return runGit(['remote', 'get-url', 'origin'], rootDir, { captureOutput: true });
  } catch (err) {
    console.error('No git remote named "origin" found. Please set one before deploying.');
    process.exit(1);
  }
}

function syncGitConfig(rootDir, worktree) {
  const fallbacks = {
    'user.name': 'deploy-bot',
    'user.email': 'deploy@localhost',
  };

  for (const key of ['user.name', 'user.email']) {
    let value;

    try {
      value = runGit(['config', '--get', key], rootDir, { captureOutput: true });
    } catch (err) {
      // user might not have this config
    }

    runGit(['config', key, value || fallbacks[key]], worktree);
  }
}

function runGit(args, cwd, options = {}) {
  const captureOutput = Boolean(options.captureOutput);
  const result = spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: captureOutput ? 'pipe' : 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const stderr = captureOutput ? result.stderr?.trim() : '';
    const message = stderr ? `: ${stderr}` : '';
    throw new Error(`git ${args.join(' ')} failed${message}`);
  }

  return captureOutput ? result.stdout?.trim() ?? '' : '';
}
