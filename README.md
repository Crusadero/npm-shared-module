# npm-shared-module

## Description
This project demonstrates how to create an npm module for sharing data across multiple projects. It's especially useful for microservices architectures or when sharing data between client and server.

With this module, you can centralize shared code in one place and easily import it into your other related projects.

## Versioning
Each branch will have its own version following the format `v1.0.0-branch_name`. Every commit triggers a patch update (incrementing the last digit) using GitHub Actions, which also tags the new version automatically.

The main branch, named `release`, will have versions without the branch name appended.

### Merging Between Branches
When merging branches, the `package.json` version will automatically be updated to match the version from the source branch. If there are merge conflicts related to the version, Git hooks will ensure the correct version is applied.

GitHub Actions will patch the version and create a new tag with each commit.

> **⚠️ Note:** Merging through pull requests has not been fully tested and may cause issues with versioning.

## Installation
### Prerequisites
Ensure you have two branches created: `build-artifacts` and `release`.

### Steps
1. Create the required branches:
    ```
    git branch build-artifacts
    git branch release
    ```

2. Install npm dependencies and set up the necessary hooks:
    ```
    npm install
    ```

### Installing the Module
To install the module in your project, run:
```
npm install github:your_name_or_organization/your_shared_module_repository#v1.0.0
```
- Replace `your_username_or_organization` with your GitHub username or organization.
- Replace `your_shared_module_repository` with the repository name where this module is hosted.
- Replace `v1.0.0` with the correct version tag.

> **Important:**
> If the repository is private, you must configure Git to use a fine-grained personal access token:
>
> ```
> git config --global url."https://your_personal_access_token@github.com/your_username_or_organization/your_shared_module_repository.git".insteadOf "https://github.com/your_username_or_organization/your_shared_module_repository.git"
> ```
> - Replace `your_personal_access_token` with your actual token.
> - Update `your_username_or_organization` and `your_shared_module_repository` with the appropriate values.

## Hosting
You can host this npm module in either a public or private GitHub repository.

### Private Repositories
If you're hosting the module in a private repository, you'll need a fine-grained personal access token with `read:contents` permission to allow your CI/CD pipelines or hosting services to install the module.
