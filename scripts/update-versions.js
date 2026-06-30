#!/usr/bin/env node
// Updates ./deploy/versions.json with the latest deploy entry for a branch.
// Usage: node scripts/update-versions.js
// Reads env vars: BRANCH, APP, TIMESTAMP, SHA, MSG

const fs = require('fs');

const versionsPath = './deploy/versions.json';
const branch    = process.env.BRANCH    || 'unknown';
const app       = process.env.APP       || 'app';
const timestamp = process.env.TIMESTAMP || new Date().toISOString();
const sha       = process.env.SHA       || '';
const message   = (process.env.MSG      || '').substring(0, 72);

let versions = [];
try { versions = JSON.parse(fs.readFileSync(versionsPath, 'utf8')); } catch (_) {}
if (!Array.isArray(versions)) versions = [];

// Drop any malformed entries missing required fields
versions = versions.filter(v => v.branch && v.app);

// Each branch+app pair is a unique entry
versions = versions.filter(v => !(v.branch === branch && v.app === app));
versions.unshift({
  branch,
  app,
  lastDeploy: timestamp,
  commit: sha ? sha.substring(0, 7) : '',
  message,
  url: `/${branch}/${app}/`,
});
versions.sort((a, b) => new Date(b.lastDeploy) - new Date(a.lastDeploy));

fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2));
console.log('versions.json updated for branch:', branch);
