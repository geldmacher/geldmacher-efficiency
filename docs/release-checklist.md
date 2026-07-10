# Cursor release checklist

Complete this checklist before tagging a plugin release. Use a clean local plugin installation and the supported baseline versions documented in the README.

## Automated gates

- [ ] `npm ci`
- [ ] `npm run validate`
- [ ] `npm test`
- [ ] `npm run context-budget`
- [ ] `git diff --check`
- [ ] No unexpected working-tree changes after the gates

## Cursor discovery

- [ ] Install or link the repository at `~/.cursor/plugins/local/geldmacher-efficiency`.
- [ ] Run `Developer: Reload Window` or fully restart Cursor.
- [ ] Confirm the Efficiency plugin is visible in Cursor settings.
- [ ] Confirm all seven commands, six skills, three agents, and three rules are visible.
- [ ] Confirm `context-usage-optimizer` is available to the model and `/plan-context-optimization` can use it.
- [ ] Confirm `session-context-compaction` is not available to automatic model invocation and `/compact-session` can use it explicitly.

## Safe behavior

- [ ] `/setup-rtk` runs `rtk gain` and `rtk init --show` before setup.
- [ ] `/setup-rtk` shows the verbose dry-run and does not modify global state without explicit confirmation.
- [ ] After an approved setup in a disposable profile, Cursor is restarted and `rtk init --show` reports the Cursor hook registered.
- [ ] A finite safe shell command is rewritten successfully; long-running or interactive commands are not used for the smoke test.
- [ ] `/execute-context-optimization` stops without editing when no approved plan is present.

## Filter fixture

- [ ] In a temporary repository, create a small `.rtk/filters.toml` with an inline diagnostic-preservation test.
- [ ] Verify that `rtk verify --require-all` passes after the temporary repository is trusted.
- [ ] Confirm an untrusted-filter warning is reported as incomplete validation rather than success.

## Cost and delegation behavior

- [ ] `/cost-budget` reports the five RTK summary fields or an explicit unavailable reason.
- [ ] `/efficiency-review` labels values cumulative unless a same-task baseline is present.
- [ ] A small review stays inline.
- [ ] A fixture with at least six changed files or ten relevant shell commands delegates to `efficiency-reviewer`.
- [ ] A filter fixture with three groups or a broad generic regex delegates to `rtk-filter-reviewer`.
- [ ] An always-on safety edit or context reduction above 25% delegates to `context-optimization-reviewer`.
- [ ] Main-agent chat leads with the result and omits request restatement, routine narration, and repeated conclusions.
- [ ] A plugin reviewer and a project-defined subagent without copied communication rules return only new, task-relevant information with evidence and uncertainty preserved.
- [ ] Ambiguous, security-sensitive, or irreversible scenarios expand enough to preserve conditions, ordering, and risk.
- [ ] Requested code, documentation, commit text, and other artifacts follow their own format instead of the chat style.

## Session compaction

- [ ] `/compact-session` returns only non-empty state sections plus the fresh-task instruction.
- [ ] Exact identifiers, paths, commands, numbers, errors, negations, conditions, causality, and ordering survive the snapshot.
- [ ] A fresh task can continue from the snapshot without inventing decisions, losing open items, or treating inferred claims as confirmed.
- [ ] Run fixed A/B scenarios for long chat, tool-heavy work, and subagent review against v0.4 with the same Cursor version and model. Protected information and retry counts must not regress, no scenario may use more total tokens, and median usage must fall.

## Release evidence

- [ ] Record the tested Cursor and RTK versions in the release notes.
- [ ] Review the changelog and manifest version for consistency.
