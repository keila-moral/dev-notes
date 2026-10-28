---
title: How to write a post on this blog
subtitle: A cheat sheet for future me.
date: 2026-10-27
tags: [meta, markdown]
draft: true
---

This post is a **draft**, so it only shows up when running `npm run dev`.
Delete `draft: true` from the front matter to publish it.

## Creating a post

```bash
npm run new "My post title"
```

That creates `src/content/posts/my-post-title.md` with the front matter filled in.

## Front matter

| Field      | Required | Notes                                  |
| ---------- | -------- | -------------------------------------- |
| `title`    | yes      | Shown as the headline                  |
| `subtitle` | no       | The grey line under the title          |
| `date`     | yes      | `YYYY-MM-DD`                           |
| `tags`     | no       | e.g. `[python, git]`                   |
| `draft`    | no       | `true` hides it from the built site    |

## Images

Put images in `public/images/` and reference them as `/images/name.png`
(prefix with the repo name if the blog lives under a sub-path).
