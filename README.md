# npm-shared-module

## Description
Simple project to demonstrate how to make your own npm module for shared data that you can install on you other related project ( situable for microservices architecture or client / server shared data ).

This allows you to write you code in single place and import it from this shared module.

## Versioning
Each branch will have its own version that will look like "v1.0.0-branch_name" each commit will patch version ( update last version digit ) by Github Actions and add new tag with this version.

Main branch is "release" that have version without branch name on it.

### Merging into branches
When you merge your current branch to some other it will automatically pick your current feature branch package.json version and even if you will pick wrong version on merge conflict git hooks will run and replace it to correct one.

On commit Github Actions will patch current version and create new version tag.

> [!CAUTION]
> Merging by pull requests is not tested.
>
> Possible troubles with versions.

## Instalation
By default you have to create "build-artifacts", "release" branches.

- Create "build-artifacts" and "release" branches.
- Install npm modules and hooks by running "npm install".

To install this module by npm run this command:
```
npm install github:your_name_or_organization/your_shared_module_repository#v1.0.0
```

- Replace "your_username_or_organization" with your actual github username or organization name.
- Replace "your_shared_module_repository" with your actual github repository where this module will be hosted.
- Replace "v1.0.0" with your actual version tag

> [!IMPORTANT]
> If you are hosting this module on private repository then do this steps.
>
>> Force git to fetch by link with fine grained personal access token to be able to access this private repository.
>>
>> ```
>> git config --global url."https://your_personal_access_token@github.com/your_username_or_organization/your_shared_module_repository.git".insteadOf "https://github.com/your_username_or_organization/your_shared_module_repository.git"
>> ```
>> - Replace "your_username_or_organization" with your actual github username or organization name.
>> - Replace "your_shared_module_repository" with your actual github repository where this module will be hosted.

## Hosting
This npm module can be hosted as public or private github repository.

### Private
If you are using private repository for your shared npm module you will have to create "fine grained personal access token" with read access ( Contens ) to be able to install it by your CI / CD or hosting.
