#!/bin/sh

ln -fs subgraph.$1.yaml subgraph.yaml

BLOCK=`yq -r '.graft.block-1' subgraph.yaml`
yq -y ".graft.block=$BLOCK" subgraph.yaml > subgraph.backup.yaml
