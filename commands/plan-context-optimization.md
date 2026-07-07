---
name: plan-context-optimization
description: Analyze a Context Usage Analysis report and create a readonly implementation plan for durable token reduction.
---

# Plan Context Optimization

Use the `context-usage-optimizer` skill.

Analyze the provided Context Usage Analysis data or canvas. Produce a plan only. Do not edit files.

Required output:

- Main token drivers
- Drivers that are repo-editable vs user, workspace, or process-only
- Target files
- Exact optimization steps
- Constraints that must be preserved
- Validation commands
- Estimated token savings
- Escalation triggers

If the context usage data file is missing, ask for it.
