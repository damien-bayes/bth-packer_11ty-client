# Git

## History

```bash
git log
```

## Branches

```bash
# Get the list of local branches
git branch

# Create a new branch with the name "development"
git branch development

ls .git/refs/heads

cat .git/refs/heads/master
cat .git/refs/heads/development

# Get the reference
cat .git/HEAD

# Move the HEAD pointer to the "development" branch
git checkout development
git checkout master

# Rename a branch
git branch -m development dev

# Delete a branch
git branch -d development
```

```bash
git checkout development

git add .
git commit -m "Some changes [skip ci]"
git push --set-upstream origin development
```

## References