# Security Policy

## Supported Versions

Only the latest patch of each major version receives security fixes.

| Version | Supported |
|---------|-----------|
| 3.x     | ✅ Active (legacy tag) |
| < 3.0   | ❌ No longer supported |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**


Include:
- A description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

We aim to acknowledge reports within **48 hours** and issue a patch
within **7 days** for critical issues.

## Scope

This package makes HTTP requests to third-party APIs and scraping targets.
It does **not** store credentials, personal data, or user tokens unless
you pass them explicitly (e.g. `bitly(url, yourToken)`).

The hardcoded Bitly default token in `bitly()` is a **public demo token** —
you should supply your own for production use.
