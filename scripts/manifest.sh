#!/bin/sh

ln -fs subgraph.$1.yaml subgraph.yaml

BLOCK=`yq -r '.graft.block-1' subgraph.yaml 2> /dev/null`
if [ "$?" -eq "0" ]; then
  yq -y ".graft.block=$BLOCK" subgraph.yaml > subgraph.backup.yaml
else
  cp subgraph.yaml subgraph.backup.yaml
fi
