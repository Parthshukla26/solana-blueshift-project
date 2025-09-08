#!/usr/bin/env bash
set -euo pipefail
echo ">>> Building Anchor workspace…"
anchor build
echo ">>> Deploying to localnet…"
anchor deploy
echo ">>> Done."
