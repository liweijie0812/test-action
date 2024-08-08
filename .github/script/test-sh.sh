#!/bin/bash

git status > ~/git-status.txt
cat ~/git-status.txt
cat ~/git-status.txt | grep -c 'modified:'
cat ~/git-status.txt | grep -c 'both modified:'
cat ~/git-status.txt | grep -c 'committed:'
conflict_count=$(cat ~/git-status.txt | grep -c 'both modified:') 
working_tree_clean=$(cat ~/git-status.txt | grep -c 'nothing to commit, working tree clean')
csr_snap_conflict=$(cat ~/git-status.txt | grep 'both modified:' | grep -c 'csr.test.jsx.snap') 
ssr_snap_conflict=$(cat ~/git-status.txt | grep 'both modified:' | grep -c 'ssr.test.jsx.snap')
common_conflict=$(cat ~/git-status.txt | grep 'both modified:' | grep -c '_common')
conflicts_sum=$((csr_snap_conflict + ssr_snap_conflict + common_conflict))
echo "conflict_count: $conflict_count"
echo "working_tree_clean: $working_tree_clean"
echo "csr_snap_conflict: $csr_snap_conflict"
echo "ssr_snap_conflict: $ssr_snap_conflict"
echo "common_conflict: $common_conflict"
echo "conflicts_sum: $conflicts_sum"