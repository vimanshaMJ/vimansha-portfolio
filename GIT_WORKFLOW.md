# Git Workflow Cheat Sheet

## Setup

| Remote     | Points to                                          | Purpose                          |
|------------|----------------------------------------------------|----------------------------------|
| `origin`   | `github.com/vimanshaj/vimanshaMJ` (office)         | Development work                 |
| `personal` | `github-personal:vimanshaMJ/vimanshamj.github.io`  | Personal repo (live GitHub Pages)|
| `upstream` | `github.com/vimanshaMJ/vimanshamj.github.io` (HTTPS) | Same personal repo, read-mostly |

Branches: `development` (daily work) and `main` (published site).

Pushing to personal `main` publishes the site.

## Daily workflow

```bash
git checkout development
# ...edit files...
git status
git add -A
git commit -m "Describe change"

git push origin development            # backup to office repo
git push personal development          # update development on personal repo
git push personal development:main     # publish to personal main (live site)
```

## Check state

```bash
git remote -v                # list remotes
git branch -a                # list local + remote branches
git log --oneline -5         # recent commits
git diff                     # unstaged changes
git rev-parse main development   # compare branch commits
```

## Sync / fix rejected pushes

```bash
git fetch personal
git log development..personal/main --oneline   # commits you don't have
git merge personal/main                        # or: git rebase personal/main
```

Avoid `git push --force` unless you are sure what you are overwriting.

## Commit identity

Commits use the repo's `user.email`. Check and change it:

```bash
git config user.name
git config user.email
git config user.email "insharptech4@gmail.com"   # personal identity
```

Old commits keep their original author.

## SSH for the personal account

`~/.ssh/config`:

```
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_personal
  IdentitiesOnly yes
```

Test the connection (should say `Hi vimanshaMJ!`):

```bash
ssh -T git@github-personal
```

Public key lives at `~/.ssh/id_personal.pub`; it must be added at
https://github.com/settings/keys on the personal account.
Do not regenerate the key with `ssh-keygen` unless you re-add the new
public key on GitHub.

## Common errors

| Error                                   | Cause / fix                                                      |
|-----------------------------------------|------------------------------------------------------------------|
| `src refspec dev does not match any`    | Branch name is wrong; use `git branch` (it's `development`)      |
| `Could not resolve hostname github-personal` | SSH config missing the `Host github-personal` block         |
| `Permission denied (publickey)`         | Public key not added to the personal GitHub account              |
| `non-fast-forward` rejected             | Remote has commits you lack; `git fetch` then merge/rebase       |
| `Everything up-to-date`                 | Nothing new to push; commit your changes first                   |
