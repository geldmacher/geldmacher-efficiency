---
name: compact-session
description: Create a verified minimal state snapshot for continuing in a fresh Cursor task.
---

# Compact Session

Follow the `session-context-compaction` skill.

1. Use the current conversation and existing evidence.
2. Inspect repository state only when needed to resolve conflicting or incomplete claims.
3. Preserve task meaning, exact references, constraints, evidence, and uncertainty.
4. Omit obsolete exploration, repetition, and routine narration.
5. Produce state only; do not plan work, assign roles, modify files, or rerun validation by default.
6. Return only the compact snapshot and the required fresh-task instruction.
