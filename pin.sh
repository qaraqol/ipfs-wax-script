jq -r '.[]' ipfs.json | while read i; do
    ipfs pin add $i;
done
