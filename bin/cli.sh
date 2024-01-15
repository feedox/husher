#!/bin/bash

# Get dir of executable
dir=$( dirname $(realpath "$0") )/../

# Execute the main script and pass the args
node $dir/build/cli.js "$@"