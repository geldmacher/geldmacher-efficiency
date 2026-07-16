# DDEV Command Surface

Read project instructions, `.ddev/config.yaml`, custom commands, docs, workflows, and observed RTK fallbacks before selecting filters.

- Filter finite project gates, tests, quality checks, builds, docs, bounded maintenance, and documented package-manager commands.
- Match the outer `ddev ...` command. Generic `ddev exec` uses a positive allowlist of finite inner commands.
- Database clients require explicit finite modes: MySQL/MariaDB `-e` or `--execute`; PostgreSQL `-c`, `--command`, `-f`, or `--file`.
- Prefer SQL projection, predicates, aggregation, and `LIMIT` over aggressive row filtering.
- Logs require an explicit tail, time, or line bound and must not follow.
- Exclude lifecycle/configuration changes, import/export, tunnels, UI launchers, interactive clients, watchers, servers, shells, SSH, and streaming commands.
- Preserve service status, URLs, versions, warnings, SQL errors, stack traces, paths, timestamps when useful, summaries, and non-zero context.

After trust, use `RTK_TOML_DEBUG=1 rtk ddev <safe-finite-command>` for representative output shapes and inspect RTK history for unexpected fallback.
