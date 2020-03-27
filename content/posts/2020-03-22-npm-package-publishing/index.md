---
title: Publishing a Javascript Package automatically with Github Actions
author: Alec Brunelle
hero: ./images/photo1.jpg
date: "2020-03-24T22:12:03.284Z"
logoUrl: ""
canonical_url: "https://medium.com/better-programming/how-to-publish-a-javascript-package-to-npm-automatically-with-github-actions-1acde7b908d6"
excerpt: Maintaining an open-source package can be a time-consuming task.
slug: "/publishing-javascript-package-automatically-with-github-actions/"
---

Maintaining an open-source package can be a time-consuming task. Issues to be triaged, pull requests to be reviewed and changelogs to write. Publishing new versions of the code is usually done manually and making it automated is often on the back-burner of the maintainers' to-do list. There are a couple of key features of a rock-solid release process, the [changelog](https://www.techopedia.com/definition/13934/changelog), [Git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging), [NPM versions](https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package), and enforcing [Semantic Versioning](https://semver.org/). Keeping all these in sync makes it so users understand changes in a release and understand how to keep up-to-date. Maintainers who fail to perform all of these steps will have a hard time triaging issues, which leads to more time debugging and less time spent coding. I recently came across a combo of tools, [semantic-release](https://github.com/semantic-release/semantic-release) and [Github Actions](https://github.com/features/actions), which made the entire release process automated, transparent, and simple to understand.

## How It Works

Before we talk about implementation, it's important to understand what work our tools will perform. That way, if there are problems or modifications, we can fix them. semantic-release is going to do the majority of the work here, they say it best on their README.

> It automates the whole package release workflow including determining the next version number, generating the release notes and publishing the package.

### The Next Version Number

During a release, to determine the next version number, the tool reads commits since the last release. It knows your last release by looking at your Git tags. Based on the type of commit, it can determine how to bump up the version of the package. For this to work, commits need to be written in a certain way. By default, semantic-release uses the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). This is critical because consumers of the package need to know if a new version releases a new feature, introduces breaking changes or both. For example, if someone commits `fix(pencil): stop graphite breaking when too much pressure applied`, semantic-release knows this contains a fix and to create a patch release. This will increase the version in the minor version range (0.0.x).

> Never seen this type of versioning before? [Check out Semantic Versioning](https://semver.org/).

After analyzing all the commits, it takes the highest priority type of change and makes sure that is the one that is applied. For example, if two commits were introduced since the last release, one breaking (x.0.0) and one minor (0.0.x), it would know to just up the version by breaking range.

### Generating Release Notes

Once it has done finding out what type of release the next version is, changelog notes are generated based on the commits. semantic-release doesn't use conventional CHANGELOG.md file to notify users of what has changed, it does so with a [Github Release](https://help.github.com/en/github/administering-a-repository/about-releases) which is attached to a Git tag.

> [An example of a Github Release that semantic-release generates and pushes on builds.](https://github.com/Yolk-HQ/next-utils/releases/tag/v1.0.3)

## Automating With Github Actions

So semantic-release will be the tool to perform most of the work, but we still need a service to run the tool on. That is where [Github Actions](https://github.com/features/actions) comes into play. When pull-requests are merged into master (or any base branch you configure), Github Actions will run a job that simply runs semantic-release with your configuration. All of the work we described previously will be performed.

> [An example of a Github Actions run using semantic-release to publish a new release.](https://github.com/Yolk-HQ/next-utils/runs/463521573?check_suite_focus=true)

## Steps to Take

We will be using as many defaults as possible to make configuration dead simple. semantic-release uses a plugins system to enhance functionality. [Here are the default plugins semantic-release uses.](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/plugins.md#default-plugins)

Let's go over the steps which will make this all run smoothly.

1.  Add a dummy version property to the package.json of package. Released code will have the proper version written to this file by semantic-release.

        "version": "0.0.0-development",

2.  Add a new property to the package.json, `publishConfig`. This will be the home of our semantic-release configuration.

        "publishConfig": { "access": "public", "branches": ['master'] }

3.  The last step is to create a Github Action YAML file. This will tell Github Actions what to do when a commit is made to the repository.

        # .github/workflows/test-and-release.yaml

        name: Test and Release
        on: [push]

        jobs:
        test-and-release:
            name: Run tests and release
            runs-on: ubuntu-18.04
            steps:
            - name: Checkout
                uses: actions/checkout@v1
            - name: Setup Node.js
                uses: actions/setup-node@v1
                with:
                node-version: 12
            - name: Install dependencies
                run: npm ci
            - name: Run tests
                run: npm test
            - name: Release
                env:
                GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
                run: npm run semantic-release

4.  Add `NPM_TOKEN` to the secrets in the Github repos settings page. You can generate one of these from your NPM account at [`https://www.npmjs.com/settings/<username>/tokens`](https://www.npmjs.com/settings/alec.brunelle/tokens).

    ![screenshot of github repo settings screen](https://res.cloudinary.com/dscgr6mcw/image/upload/v1585055788/npm-publish-post/Screenshot_at_Mar_24_08-47-49.png)

And that's it! You have a fully automated package release process 🎉

## Bonus

I implemented this on a repo we recently open-sourced at Yolk AI. It's named [next-utils](https://github.com/Yolk-HQ/next-utils) and everything described here can be found there.

Another great thing about using semantic-release with Github Actions is that it has out-of-the-box support for bot comments. It will go into every issue and pull-request closed since the last release and comment to make sure everyone is aware. [Here is an example](https://github.com/Yolk-HQ/next-utils/issues/12#issuecomment-581484992).

![screenshot of github action comment by bot](https://res.cloudinary.com/dscgr6mcw/image/upload/v1585055882/npm-publish-post/Screenshot_at_Feb_24_09-23-58.png)
