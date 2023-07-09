[![Library Tests](https://img.shields.io/github/actions/workflow/status/KennethTrecy/feo_template/library.yml?style=for-the-badge)](https://github.com/KennethTrecy/feo_template/actions/workflows/library.yml)
![GitHub lines](https://img.shields.io/github/license/KennethTrecy/feo_template?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/feo_template?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/feo_template?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/feo_template?style=for-the-badge)
<!-- ![Commits since latest version](https://img.shields.io/github/commits-since/KennethTrecy/feo_template/latest?style=for-the-badge) -->
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/feo_template?style=for-the-badge)

# Feo Template
This is a template repository of Kenneth Trecy Tobias. Its purpose is to be used for other
templates/projects either by forking this repository, copying its files, or merging its history to
other existing templates/projects.

This repository has multiple branches which you can use as template for your project. These are:
- `empty_toml`. Has most fields set to default.
- `empty_bare_metal`. Base from `empty_toml` branch. Adds `no_std` feature flag and related code.
- `filled_toml`. Base from `empty_toml` branch and has filled `authors` field.
- `filled_bare_metal`. Base from `empty_bare_metal` and `filled_toml` branches.

<!--
The `origin` section may be used to indicate where the project (that is using this template) came
from or based from.

## Origin
Some parts of the repository was based from [`master`] branch of [Feo Template].

-->

## Usage

### Initialization
If you want to contribute, the repository should be initialized to adhere in [Conventional Commits
specification] for organize commits and automated generation of change log.

#### Prerequisites
- [Node.js environment]
- [pnpm] (optional)

#### Instructions
By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
```
$ npm install
```

Or if you have installed [pnpm], run the following command:
```
$ pnpm install
```

To generate the change log automatically, run the command below:
```
$ npx changelogen --from=[tag name or branch name or commit itself] --to=master
```

### Syncing template
To synchronize the files in this repository's history from the
template, run `./setup_codebase.ps1 -branch [branch you want to use from the template]`.

## Notes
It is optional to attribute this repository in other template/projects.

### License
The repository is licensed under [MIT]. Since this is a template repository, you can remove license
file if you want to use other license, or you can use the template repository for a private
template/project. You can run one of the following commands below:
- Run `./revert_commits_to.ps1 strict` to revert the license back to MIT license.
- Run `./revert_commits_to.ps1 remove` to remove the license completely.
- Run `./revert_commits_to.ps1 retain` does nothing aside from informing you that license will be
  retained.

After that, *revert_commits_to.ps1* will be removed.

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

### Disclaimer
This personal project may contain references to trademarks, which are included in good faith. However, it is important to note that such references do not indicate any endorsement, affiliation, or sponsorship by the respective trademark holders unless explicitly stated.

<!--

[`initial`]: https://github.com/KennethTrecy/feo_template/tree/initial
[Feo Template]: https://github.com/KennethTrecy/feo_template

-->

[MIT]: https://github.com/KennethTrecy/feo_template/blob/master/LICENSE
[Node.js environment]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
