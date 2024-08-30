# npm-shared-module
Simple project to demonstrate how to make your own npm module for shared data that you can install on you other related project ( situable for microservices architecture or client / server shared data ).

This allows you to write you code in single place and import it from this shared module.

Each branch will have its own version that will look like "v1.0.0-branch_name" each commit will patch version ( update last version digit )

Main branch is "release" that have version without branch name on it

By default you have to create "build-artifacts", "release" branches

This npm module can be hosted as public or private github repository.

If you are using private repository for your shared npm module you will have to create fine grained personal access token with read access to be able to install it by your CI / CD or hosting.
