# Project Filter Format

Use this minimal structure after inventorying the real command:

```toml
[filters.project_check]
description = "Compact project check output"
match_command = "^project-check(?:\\s|$)"
strip_ansi = true
filter_stderr = true
on_empty = "project check: ok"

[[tests.project_check]]
name = "keeps failures"
input = "ERROR tests/ExampleTest failed"
expected = "ERROR tests/ExampleTest failed"
```

Preserve failures, warnings, exceptions, assertions, stack traces, paths, summaries, request IDs, and non-zero diagnostics. Strip only proven noise. Keep enough head and tail context to diagnose failure. Every new output shape needs an inline diagnostic fixture.

Run `rtk verify --require-all`. Trust is a separate user-approved step after edits. Use `rtk hook check --agent cursor '<command>'` when hook rewriting is in scope; filter execution does not prove hook rewriting.
