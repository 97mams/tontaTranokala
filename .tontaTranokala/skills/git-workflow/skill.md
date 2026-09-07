# Git Commit Workflow Skill

## Role

You are responsible for maintaining a clean and meaningful Git history while working on this project.

Your responsibility includes:

* Inspecting modified files.
* Reviewing changes before committing.
* Creating logical commits.
* Writing clear commit messages.
* Avoiding unnecessary commits.
* Ensuring the project remains in a working state.

Do not create random commits.

Every commit must represent a meaningful and coherent change.

---

# Commit Workflow

After completing an important modification, follow this workflow:

```text
Make changes
      ↓
Inspect changes
      ↓
Run validation
      ↓
Review git diff
      ↓
Determine logical commit
      ↓
Stage relevant files
      ↓
Create commit
```

Never commit immediately without reviewing the changes.

---

# Step 1: Inspect Git Status

Before creating a commit, run:

```bash
git status
```

Identify:

* Modified files.
* New files.
* Deleted files.
* Untracked files.

Do not automatically stage every changed file.

---

# Step 2: Review Changes

Before committing, inspect the changes.

Run:

```bash
git diff
```

For staged changes:

```bash
git diff --staged
```

Review the changes and verify that:

* The changes belong together.
* No unrelated files are included.
* No secrets are included.
* No generated files are accidentally included.
* No debugging code is accidentally committed.

---

# Step 3: Validate the Project

Before committing, run the relevant checks.

For Rust changes:

```bash
cd src-tauri
cargo check
```

For frontend changes, run the project's type checking command.

If available:

```bash
pnpm typecheck
```

For the complete application:

```bash
pnpm tauri dev
```

Do not create a commit if the project contains a newly introduced compilation error.

Existing unrelated errors should be reported but must not automatically block unrelated work.

---

# Step 4: Commit Boundaries

Create commits based on logical changes.

Good examples:

```text
feat(database): add SQLite meal schema

feat(meals): add meal repository

feat(preferences): implement favorite meal management

feat(recommendations): add personalized recommendation engine

feat(ui): add meal preferences screen

fix(database): prevent duplicate meals in weekly plans
```

Bad examples:

```text
update

fix

changes

work

final

asdf
```

Commit messages must explain what changed.

---

# Commit Message Format

Use Conventional Commits.

Format:

```text
type(scope): short description
```

Allowed types:

```text
feat
fix
refactor
docs
test
chore
style
build
ci
```

Examples:

```text
feat(meals): add custom meal creation

feat(database): add weekly plan tables

fix(recommendations): prevent duplicate meal selection

refactor(services): simplify meal scoring logic

test(recommendations): add duplicate prevention tests

docs(readme): update installation instructions
```

---

# Step 5: Stage Only Relevant Files

Do not automatically run:

```bash
git add .
```

Instead, inspect files and stage only files related to the logical commit.

Example:

```bash
git add src-tauri/src/models/meal.rs
git add src-tauri/src/repositories/meal_repository.rs
```

If multiple changes are unrelated, split them into separate commits.

---

# Step 6: Create the Commit

Before committing:

```bash
git diff --staged
```

Then create the commit:

```bash
git commit -m "feat(scope): clear description"
```

---

# Commit Rules

## One Logical Change Per Commit

Each commit should represent one logical change.

Good:

```text
Commit 1
Add SQLite database schema

Commit 2
Add meal repository

Commit 3
Add user preference service

Commit 4
Add recommendation algorithm
```

Avoid:

```text
One commit containing:

Database
+
Frontend
+
Recommendation algorithm
+
README changes
+
Unrelated formatting
```

Unless all changes are required for a single inseparable feature.

---

# Database Changes

When changing the database:

Commit together:

* Migration files.
* Database models.
* Repository changes.
* Relevant tests.

Example:

```text
feat(database): add user preferences schema
```

Do not commit migrations separately from required schema code if the project would become temporarily unusable.

---

# Rust Changes

For Rust changes:

1. Run:

```bash
cargo check
```

2. Run relevant tests:

```bash
cargo test
```

3. Review:

```bash
git diff
```

4. Create a logical commit.

---

# Frontend Changes

Before committing frontend changes:

Run the project's type checker.

Example:

```bash
pnpm typecheck
```

Review:

```bash
git diff
```

Then create a logical commit.

---

# New Files

Before committing a new file:

Verify:

* The file is required.
* The file belongs to the project.
* The file does not contain secrets.
* The file is not generated unnecessarily.

---

# Sensitive Files

Never commit:

```text
.env
.env.local
.env.production

Private keys
SSH keys

API keys

Database credentials

Tokens

Passwords
```

Check `.gitignore` when necessary.

If a secret is discovered:

Do not commit it.

Remove it from the changes and inform the developer.

---

# Generated Files

Do not commit generated or temporary files unless the project explicitly requires them.

Examples:

```text
node_modules/

target/

dist/

build/

*.log
```

Follow the project's existing `.gitignore`.

---

# Before Every Commit

Always perform:

```text
1. git status

2. git diff

3. Run relevant validation

4. Review changed files

5. Stage only relevant files

6. git diff --staged

7. Create a clear commit message
```

---

# After Every Commit

Verify:

```bash
git status
```

Confirm that:

* The intended commit was created.
* No accidental files were included.
* Remaining changes are understood.

Do not automatically commit remaining unrelated changes.

---

# Automatic Commit Policy

Create a commit after:

* Completing a feature.
* Fixing a bug.
* Completing a database migration.
* Completing a meaningful refactor.
* Adding an important test.
* Completing a UI feature.

Do not commit after:

* A single typo.
* Temporary debugging.
* Incomplete experiments.
* Broken code.
* Half-finished features.

---

# AI Behavior

When modifying this project:

1. Understand the requested change.
2. Make the necessary changes.
3. Run validation.
4. Review the Git diff.
5. Determine whether the changes form a logical commit.
6. Stage only relevant files.
7. Create a Conventional Commit.
8. Verify Git status after committing.

If unrelated modifications already exist:

Do not include them automatically.

Identify which files belong to the current task.

Stage only files related to the current task.

---

# Commit Examples For This Project

Database:

```text
feat(database): add SQLite meal schema
```

Meal management:

```text
feat(meals): add custom meal management
```

Preferences:

```text
feat(preferences): add favorite meal selection
```

Recommendation engine:

```text
feat(recommendations): add personalized meal scoring
```

Duplicate prevention:

```text
fix(recommendations): prevent duplicate weekly meals
```

Tauri commands:

```text
feat(tauri): add meal management commands
```

User interface:

```text
feat(ui): add meal preferences screen
```

Android:

```text
build(android): initialize Tauri Android support
```

Documentation:

```text
docs(readme): add Android setup instructions
```

Tests:

```text
test(recommendations): add meal diversity tests
```

---

# Final Rule

Never create a commit blindly.

Every commit must:

* Have a clear purpose.
* Contain related changes.
* Be reviewed before committing.
* Pass relevant validation.
* Use a meaningful Conventional Commit message.
* Avoid unrelated files.
* Avoid secrets and sensitive data.

A clean Git history is part of the project's code quality.
