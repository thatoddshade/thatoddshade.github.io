# THATODDSHADE’s PALACE

Welcome to a place of wonder and whimsy!!!

This is the Git repository for [thatoddshade.is-a.dev](https://thatoddshade.is-a.dev/), a personal website that, because of every Rust project's totally objective superiority, is made with [zola](https://www.getzola.org).

All opinions expressed there are endorsed by the Universe, Ennui and the Void.

This `README.md` file mainly serves as a cheatsheet for myself.

## Pages

Among the files located under `content/`, most are ‘pages’. Their template can be found at `templates/page.html`.

## Microformats in Frontmatter

- To set `p-name`, set `title` to a string;
- To like, set `extra.like_of` to an array of objects, each having a `url` key and optionally `name`;
- To repost, set `extra.repost_of` to an array of objects each with :
	- `url` as a string;
	- `name` as a string;
	- `author` as an object which can have `url` and must have `name`; and
	- `content` as a preferably multiline Markdown string that will be rendered.
- To like, set `extra.like_of` to an object that has / array of objects each having:
	- `url`, a string; and
	- `name`, a string.
- To reply, set `extra.in_reply_to` to an object that has / an array of objects each with :
	- `url`, a string; and
	- `name`, a string.
- To automatically POSSE via brid.gy, set `extra.publish_on` to an object which can have, to set what platform to publish on, the following set to true:
    - `bluesky`;
    - `flickr`;
    - `github`; and
    - `mastodon`.
- To set `p-summary`, set `description`;
- To set `dt-published`, set `date` to a date; and
- To set `dt-updated`, set `updated to a date.
