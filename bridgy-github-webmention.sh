#!/usr/bin/env bash

# `$1` is for the source.
curl -i -d source=$1 -d target=https://brid.gy/publish/github https://brid.gy/publish/webmention
