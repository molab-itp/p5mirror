#!/bin/bash

# removing derived files

# prompt to prevent accidental delete

read -p "Enter y to remove derived files: " response
if [[ "$response" != "y" ]]; then
  exit 0 
fi

echo removing derived files

rm -rf downloads
rm -rf p5projects
rm -rf p5projects-index.md
