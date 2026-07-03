# Efficiency

Cursor cost controls for agent work: RTK-backed shell usage, targeted context gathering, bounded command output, lean validation, and concrete efficiency review.

This plugin is intentionally small. It does not ship a custom Cursor hook in v0.1. RTK integration is delegated to RTK's supported Cursor setup through `rtk init --global --agent cursor`.

It is not a workflow plugin and does not define handoffs, implementation roles, delivery-review loops, or task execution packets.

## Installation

Copy or clone this repository to `~/.cursor/plugins/local/geldmacher-efficiency/` so Cursor discovers it automatically, or install it from a marketplace that lists this repository.

## Usage

Use the plugin when a Cursor session should spend fewer tokens and avoid broad exploratory churn.

1. Run `/setup-rtk` once per machine to verify RTK and prepare Cursor's RTK integration.
2. Run `/cost-budget` when a session needs explicit cost guardrails for context, commands, dry-runs, validation, and stop conditions.
3. Use Cursor or the workflow plugin for actual task planning and execution.
4. Run `/efficiency-review` after meaningful work to find wasted context, missed RTK usage, validation cost issues, and cost controls to improve next time.

## Components

- **Commands**: `/setup-rtk`, `/cost-budget`, `/efficiency-review`.
- **Skills**: `rtk-cursor-setup`, `cost-reduction`, `efficiency-review`.
- **Agent**: `efficiency-reviewer`, a readonly review role focused on cost gaps and missed reduction measures.
- **Rule**: `cursor-efficiency`, an always-on rule for RTK-first shell usage, targeted reads, `rg` before broad scans, dry-runs before global setup, and escalation instead of costly guessing.

## RTK Integration

`/setup-rtk` verifies RTK and guides Cursor's supported RTK integration. It previews setup before applying changes and must not install RTK or mutate global Cursor configuration without explicit confirmation.

## Cost Budget

`/cost-budget` produces compact cost controls for a Cursor session. It is deliberately not an implementation plan and can be used alongside Cursor's native planning or the workflow plugin.

## Development

This repository intentionally does not include an `AGENTS.md` file because Cursor injects it automatically when the plugin is loaded. Agent-facing plugin behavior belongs in `commands/`, `skills/`, `agents/`, and `rules/`; human-facing usage and maintenance notes belong in this README.

Before publishing or submitting the plugin, validate it with:

```bash
node scripts/validate-plugin.mjs
```

## References

- [RTK supported agents](https://www.rtk-ai.app/docs/getting-started/supported-agents/)
- [RTK installation](https://www.rtk-ai.app/docs/getting-started/installation/)
- [RTK configuration](https://www.rtk-ai.app/docs/getting-started/configuration/)
