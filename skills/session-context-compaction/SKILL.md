---
name: session-context-compaction
description: Create a verified minimal state snapshot for a fresh Cursor task.
disable-model-invocation: true
---

# Session Context Compaction

## Goal

Replace an oversized conversation with the smallest self-contained state that preserves its task meaning. Capture state only: do not create an implementation plan, assign roles, edit files, or invent future work.

## Evidence

Use the conversation, referenced artifacts, and existing validation. Perform targeted readonly inspection only when needed to resolve a conflict or verify claimed state. Do not rerun checks by default.

Preserve:

- the current objective and user intent
- active constraints, requirements, and preferences
- confirmed decisions and the rationale needed to apply them
- current state, changed artifacts, and exact references
- decisive evidence, validation results, and exact errors
- uncertainty, unresolved conflicts, and open questions
- the next action only when already agreed or directly implied

Keep exact identifiers, paths, commands, numbers, negations, conditions, causality, and ordering. Mark material claims as `confirmed`, `inferred`, or `unverified` when their status is not otherwise clear. Never turn an inference into a fact.

Remove filler, routine narration, repeated facts, obsolete exploration, superseded proposals, and raw logs beyond the shortest decisive excerpt.

## Output

Return only non-empty sections in this order:

```text
# Session State

Objective:
Constraints:
Decisions:
Current state:
Evidence:
Changed artifacts:
Validation:
Open items:
Next action:
```

End with one line telling the user to start a fresh Cursor task with the snapshot. State that keeping it in the current task does not remove existing history.
