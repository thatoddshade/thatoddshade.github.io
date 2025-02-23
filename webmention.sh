#!/usr/bin/env bash

# `$1` is for the source,
# `$2` is for the target and
# `$3` is for the endpoint.
curl -i -d source=$1 -d target=$2 $3
