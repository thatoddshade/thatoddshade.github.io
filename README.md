# thatoddshade.github.io

this is the git repository for [thatoddshade.is-a.dev](https://thatoddshade.is-a.dev/), a personal website that, because of every Rust project's totally objective superiority, is made with [zola](https://www.getzola.org).

if offensive content, misinformation or any mistake gets on this website, issues and pull requests are welcome.

this `README.md` file mainly serves as documentation for myself.

## pages

pages are any file found in ./content/.

pages' template can be found at ./templates/page.html

### microformatting through frontmatter 

- to set `p-name`, set `title` to a string;
- to like, set `extra.like_of` to an array of objects, each having `url` and potentially `name`;
- to repost, set `extra.repost_of` to an array of objects each having:
	- `url`, a string;
	- `name`, a string;
	- `author`, an object which can have `url` and must have `name`; and
	- `content`.
- to like, set `extra.like_of` to an object that has / array of objects each having:
	- `url`, a string; and
	- `name`, a string.
- to reply, set `extra.in_reply_to` to an object that has / array of objects each having:
	- `url`, a string; and
	- `name`, a string.
- to automatically POSSE via brid.gy, set `extra.publish_on` to an object which can have, to set what platform to publish on, the following set to true:
    - `bluesky`;
    - `flickr`;
    - `github`; and
    - `mastodon`.
- to set `p-summary`, set `description`;
- to set `dt-published`, set `date` to a date; and
- to set `dt-updated`, set `updated to a date.
