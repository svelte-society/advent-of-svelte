# Advent of Svelte

A Svelte challenge for each day until Christmas Eve!

## Challenge Structure

All challenges are written in markdown and can be found in [`src/lib/challenges`](./src/lib/challenges/). The file name should follow `day-NUMBER.svx` (e.g. `day-24`), and contain the following frontmatter:

```yaml
# Challenge Title
title: Advent of Svelte

# The Link to the thread, can be null (will default to the channel)
discordLink: null

# The name of a png image in src/lib/challenges/images, can be null
image: name
```

### Data

The file/folder must follow the name `day-NUMBER-WORD` (e.g. `day-twenty-four`).

-   API routes for the challenges can be found in [`src/routes/data`](./src/routes/data)

-   Static files can be found in [`static/data`](./static/data)

## Illustrations

Illustrations in [`src/lib/challenges/images`](./src/lib/challenges/images/) are provided by [Icons 8](https://icons8.com/illustrations/author/zD2oqC8lLBBA) and [Elisabet Guba](https://icons8.com/illustrations/author/lZpGtGw5182N) from Ouch!
