---
name: rtk-setup
description: Inspect and prepare optional RTK integration for Cursor.
---

# RTK Setup

Use RTK's installed command surface as the source of truth. When available, inspect its location, version, gain summary, help, and current Cursor integration. If RTK is absent, say so and provide installation guidance only when the user asks for it.

For global Cursor integration, preview the locally supported RTK initialization command and summarize the affected files or settings. Apply the change only when the user has requested it and any approval required by Cursor has been granted.

After a change, verify the detected integration and a finite safe command when practical. If the current environment cannot run a check, give the relevant next command and mark the result as unverified instead of treating the missing facility as a workflow failure. Prefer RTK's native Cursor integration over a custom hook.
