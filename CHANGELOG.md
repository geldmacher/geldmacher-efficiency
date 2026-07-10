# Changelog

## 0.5.0 - 2026-07-10

### Added

- Adaptive semantic-density guidance for main-agent chat, delegation prompts, and generic subagent results.
- `/compact-session` and an explicit-only skill for verified state snapshots that continue in a fresh Cursor task.
- Policy and release checks for protected information, subagent inheritance, artifact boundaries, and context-neutral integration.

### Changed

- Extended cost budgets and efficiency reviews to cover communication waste and over-compression risk.
- Kept the recurring plugin baseline at 436 estimated tokens while adding the communication policy.
- Removed redundant generic concision instructions from reviewer agents so the always-on rule remains the shared source.

## 0.4.0 - 2026-07-10

### Added

- Project-scoped RTK cost snapshots for cost budgets and efficiency reviews.
- Official Cursor manifest schema validation with semantic component checks.
- Readonly context-budget measurement with enforced baseline limits.
- Node test fixtures for schema, frontmatter, path, naming, readonly, and policy failures.
- Compatibility guidance and a manual Cursor release gate.
- Measured plugin baseline reduction from approximately 919 to 389 tokens (58%) using the documented `characters / 4` estimate.

### Changed

- Reduced the always-on efficiency rule and made RTK filter maintenance conditional.
- Strengthened RTK setup identification, preview, hook verification, and rollback guidance.
- Required `rtk verify --require-all` for project filters.
- Made reviewer delegation threshold-based to avoid unnecessary model calls.
- Kept the context optimizer model-discoverable until plugin visibility is verified reliably.

## 0.3.0

- Added project RTK filters and context usage optimization workflows.
