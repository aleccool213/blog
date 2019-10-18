---
title: "Why I use Fish Shell over Bash and Zsh 🐟"
date: "2019-07-03T22:12:03.284Z"
path: "/beautiful-dev-tools-fish-shell/"
logoUrl: "https://res.cloudinary.com/dscgr6mcw/image/upload/v1565389007/fish-post/eric-saunders-crUGdn1j-RE-unsplash.jpg"
devLink: ""
canonicalUrl: "https://medium.com/better-programming/why-i-use-fish-shell-over-bash-and-zsh-407d23293839"
---

<table class="image">
  <caption align="bottom">Photo by <a href="https://unsplash.com/@thesaunds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric Saunders</a> on <a href="https://unsplash.com/search/photos/porsche?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></caption>
  <tr><td><img src="https://res.cloudinary.com/dscgr6mcw/image/upload/v1565389007/fish-post/eric-saunders-crUGdn1j-RE-unsplash.jpg" alt="back of car with nice blue colour"/></td></tr>
</table>

<!--
> This is part one of my [Beautiful Developer Tools series](http://blog.alec.coffee/beautiful-dev-tools/) where I focus on apps that I heavily use. They all help me remain calm 🧘‍♂️, collected 📚, and productive 🛠️ when writing code. -->

> The things that make Fish great, the caveats and which (few) plugins you need to complete the experience.

One of the main allurements of Apple is that things "just work". Most of the people who use their products are covered with the features they release and Apple spends little time on anything else. The features they do ship, are **polished**, have **sensible defaults**, and are **intentional**. This is what I believe the [Fish shell](https://fishshell.com) has become. No wasted time scouring the web for config files others have shared, the best plugins to use, or how to get integrations working with your particular setup.

This shell is meant for **most** people, Fish stands for **Friendly Interactive Shell**, that's why I can recommend it to anyone I work with. They have a very detailed [design document](https://fishshell.com/docs/current/design.html). It's not meant for the likes of system admins who are constantly logging into multiple servers a day. It will never be the default installed shell on most operating systems.

Once you install it, `brew install fish`, you are off to the races. You have a shell where you can become super productive and your favourite tools work as intended. It doesn't try to be the best at everything, but nails the essential core features which make the user experience extremely enjoyable.

## TLDR

- Syntax highlighting
- Inline auto-suggestions based on history
- Tab completion using man page data
- Intuitive wildcard support
- Web based configuration

<table class="image">
  <tr><td style="text-align: center;"><img src="https://media.giphy.com/media/QC7Pr3M4gN0yuEDGgj/giphy.gif" alt=""/></td></tr>
</table>

### Let's break it down

#### Syntax highlighting

My worst memories of bash come from the absence of this feature, [syntax highlighting](https://fishshell.com/docs/current/tutorial.html#tut_syntax_highlighting). A simple thing which makes you think, "wow, now I am using a shell from the 90's"! You can notice it working in the below gif when I try to go to `folder_that_doesnt_exist`, the text turns red. The text then turns blue when it's a valid command.

![](https://res.cloudinary.com/dscgr6mcw/image/upload/v1565390429/fish-post/2019-08-09_18.40.08.gif)

#### Inline auto-suggestions based on history

Smart [auto-suggestions](https://fishshell.com/docs/current/index.html#autosuggestions) are seldom seen, let alone built-in. Instead of just beating the competition, the Fish team thought to demolish it. Using the history of your commands, it suggests commands which you can complete with the `right-arrow key`. You can also, as I do this gif, auto-complete one word or folder at a time with `option + right-arrow key`.

![](https://res.cloudinary.com/dscgr6mcw/image/upload/v1565390672/fish-post/2019-08-09_18.44.14.gif)

> Fun fact, if search results are huge, Fish shell will paginate!

#### Tab completion using man page data

This is because [Fish knows how to parse CLI tool man pages](https://fishshell.com/docs/current/index.html#completion) in many different formats. Git, Docker CLI, package.json, you name it, most commands you try, it will have auto-completions for it.

You can use `tab` to get all the options.

<table class="image">
  <caption align="bottom">All npm scripts for this package, with values of what they actually run, IN THE TERMINAL WUT
</caption>
  <tr><td><img src="https://res.cloudinary.com/dscgr6mcw/image/upload/v1565390833/fish-post/2019-08-09_18.46.53.gif" alt="example-of-fish-shell-tab-complete"/></td></tr>
</table>

#### Intuitive wildcard support

In bash, I never liked having to use different flags for selecting files or contents of a folder.

Regularly, this would be done with:

```bash
rm -r folder_1
```

I have always been a fan of familiarity, and [wildcards](https://fishshell.com/docs/current/tutorial.html#tut_wildcards) are just that. You can use them in any command filter down the exact files you need with ease.

e.g.

```
ls *.jpg
```

<table class="image">
  <caption align="bottom">How I feel while using Fish
</caption>
  <tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dscgr6mcw/image/upload/v1565392191/fish-post/giphy_1.gif" alt=""/></td></tr>
</table>

#### Web based configuration

Type in:

```
web_config
```

and you get an entire website dedicated to messing around with any config you do need to touch.

![](https://res.cloudinary.com/dscgr6mcw/image/upload/v1565391525/fish-post/Screenshot_at_Aug_09_18-58-33.png)

### A tiny customization needed to go the extra mile

There aren't a lot of extra packages needed for Fish. Personally, I only use 2, which is wild because at one point I know my Oh-My-Zsh plugins were past 10.

#### Oh My Fish

A homage to the great Oh My Zsh, `omf` is the most popular package manager for Fish. I use this to install just two packages, one for [nvm](https://github.com/derekstavis/plugin-nvm) and one for [spacefish](https://github.com/matchai/spacefish/).

#### SpaceFish

Special mention to [Spacefish](https://github.com/matchai/spacefish/) for being the best shell prompt I have ever used. Support for showing:

- Current Git branch and rich repo status
- Current Node.js version, through nvm
- Package version, if there is a package in the current directory (package.json for example)

<table class="image">
  <caption align="bottom">Spacefish example
</caption>
  <tr><td><img src="https://res.cloudinary.com/dscgr6mcw/image/upload/v1565391692/fish-post/spacefish_example.png" alt="spacefish-shell-prompt-example"/></td></tr>
</table>

#### Config file

You also have access to a config file at `.config/fish/config.sh`. This is where you can set aliases up or set some extra path extensions.

### Caveats

Not being POSIX compliant can scare some developers away. But really in my three years of usage (mostly Node.js, javascript, ruby, e.t.c.), I have not encountered any issues. Some commands I get from the internet which are Bash specific, I'll just `exit` and then come back to Fish when I finish. [This Stackoverflow post](https://stackoverflow.com/questions/48732986/why-how-fish-does-not-support-posix) goes into it more if you are so inclined.

#### But it's easy to be compatible...

Say you have a bash script to run, with Fish you still can:

```bash
bash script.sh
```

Another tip is that you can put this at the top of the file:

```bash
#!/usr/bin/env bash
```

and then make sure its an executable:

```bash
chmod +x script.sh
```

and voila, you can run it as a regular script:

```bash
./script.sh
```

## Resources:

- [Fish Shell Website](https://fishshell.com/)
- [Fish Shell Syntax Highlighting](https://fishshell.com/docs/current/tutorial.html#tut_syntax_highlighting)
- [Fish Shell Autosuggestions](https://fishshell.com/docs/current/index.html#autosuggestions)
- [Try out the Fish Shell tutorial online](https://rootnroll.com/d/fish-shell/)
- [Oh My Fish Package Manager](https://github.com/oh-my-fish/oh-my-fish)
- [NVM wrapper plugin](https://github.com/derekstavis/plugin-nvm)
- [Spacefish Fish Shell Theme](https://github.com/matchai/spacefish/)
- [List of awesome Fish related software](https://github.com/jorgebucaran/awesome-fish)
- [Fisher, another package manager with a file-based extension config](https://github.com/jorgebucaran/fisher)
  - [A friends fishfile for fisher](https://github.com/elliottsj/dotfiles/blob/master/common/.config/fish/fishfilehttps://github.com/elliottsj/dotfiles/blob/master/common/.config/fish/fishfile)
- [Support Bash scripts in Fish](https://github.com/edc/bass)
