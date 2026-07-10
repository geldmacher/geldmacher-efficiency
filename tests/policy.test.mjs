import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { defaultRoot, parseFrontmatter } from "../scripts/validate-plugin.mjs";

function read(path) {
  return readFileSync(join(defaultRoot, path), "utf8");
}

test("RTK setup preserves identification, preview, and approval gates", () => {
  const setup = `${read("commands/setup-rtk.md")}\n${read("skills/rtk-cursor-setup/SKILL.md")}`;
  for (const expected of [
    "command -v rtk",
    "rtk --version",
    "rtk gain",
    "rtk init --show",
    "rtk init --global --agent cursor --dry-run -v",
    "explicit confirmation",
  ]) assert.ok(setup.includes(expected), `missing setup policy: ${expected}`);
});

test("project filter validation requires inline tests", () => {
  const filterPolicy = `${read("commands/create-rtk-filter.md")}\n${read("skills/project-rtk-filter/SKILL.md")}\n${read("agents/rtk-filter-reviewer.md")}`;
  assert.ok(filterPolicy.includes("rtk verify --require-all"));
  assert.doesNotMatch(filterPolicy, /`rtk verify`/);
  assert.match(filterPolicy, /untrusted project filters skipped/);
});

test("context execution refuses to edit without an approved plan", () => {
  const command = read("commands/execute-context-optimization.md");
  assert.match(command, /If no approved plan is present/);
  assert.match(command, /create the plan first and stop for approval/);
});

test("review delegation has deterministic cost thresholds", () => {
  const review = `${read("commands/efficiency-review.md")}\n${read("skills/efficiency-review/SKILL.md")}`;
  assert.match(review, /six (?:changed files|or more changed files)/);
  assert.match(review, /ten (?:relevant shell commands|or more relevant shell commands)/);
  assert.match(review, /inline by default/i);
});

test("filter maintenance is conditional and context optimizer remains discoverable", () => {
  assert.match(read("rules/rtk-filter-maintenance.mdc"), /alwaysApply: false/);
  const fields = parseFrontmatter(join(defaultRoot, "skills/context-usage-optimizer/SKILL.md"));
  assert.equal("disable-model-invocation" in fields, false);
});

test("the always-on rule does not carry setup or measurement workflows", () => {
  const rule = read("rules/cursor-efficiency.mdc");
  assert.doesNotMatch(rule, /rtk init|rtk gain|v0\.1/);
});

test("the always-on rule preserves meaning while compressing communication", () => {
  const rule = read("rules/cursor-efficiency.mdc");
  assert.match(rule, /Result first/);
  assert.match(rule, /chat\/handoffs minimal, complete/);
  for (const expected of [
    "constraints",
    "evidence",
    "uncertainty",
    "negation",
    "conditions",
    "causality",
    "order",
    "exact identifiers",
    "paths",
    "commands",
    "numbers",
    "errors",
  ]) assert.ok(rule.includes(expected), `missing semantic-preservation policy: ${expected}`);
  assert.match(rule, /Delegate relevant context/);
  assert.match(rule, /return only new findings/);
  assert.match(rule, /Chat style doesn't constrain artifacts/);
});

test("session compaction is explicit, readonly, and unavailable to automatic invocation", () => {
  const skillPath = join(defaultRoot, "skills/session-context-compaction/SKILL.md");
  const fields = parseFrontmatter(skillPath);
  const skill = read("skills/session-context-compaction/SKILL.md");
  const command = read("commands/compact-session.md");

  assert.equal(fields["disable-model-invocation"], true);
  assert.match(command, /session-context-compaction/);
  assert.match(command, /do not plan work, assign roles, modify files/);
  assert.match(skill, /do not create an implementation plan, assign roles, edit files/);
  assert.match(skill, /confirmed.*inferred.*unverified/);
  assert.match(skill, /fresh Cursor task/);
  assert.match(skill, /current task does not remove existing history/);
});
