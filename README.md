# blainebee.github.io

My IT and cybersecurity portfolio, built with Jekyll and hosted on GitHub Pages.

## The easy way: Writeup Studio

Writeup Studio (the desktop app, or `writeup-studio.html`) manages this whole site:
writeups, series, categories, the home page, About page, profile links, and resume.
Edits collect in its **Changes** list; with your GitHub key connected, **Publish**
sends them all as one commit. Use **Connection → Load latest from GitHub** to make
sure the studio is working from the current version of the site.

## Add a writeup by hand

1. On github.com, open `_labs/` and then the category folder (`it-labs`, `cybersecurity-labs`, …).
2. Click **Add file → Create new file** and name it with dashes, ending in `.md`
   (for example `htb-blackfield.md`). The URL becomes `/cybersecurity-labs/htb-blackfield/`.
3. Paste in `_templates/new-writeup.md`, fill in the top section, and write underneath.
4. Click **Commit changes**. The site updates in about a minute.

### The info block at the top

| Field | What it does | Required |
| --- | --- | --- |
| `section` | Which category it belongs to: must match its folder name | Yes |
| `title` | Page title and card heading | Yes |
| `date` | Sorts the list, newest first (`YYYY-MM-DD`) | Yes |
| `summary` | One line shown on the card | Yes |
| `difficulty` | Colored badge + filter (Easy, Medium, Hard, Insane) | Yes |
| `platform` | Where you did it (TryHackMe, Home Lab, …) | Yes |
| `tools` | Tags on the card + tool filter | Yes |
| `skills` | "Skills demonstrated" checklist | Recommended |
| `tldr` | Highlighted summary box at the top | Recommended |
| `image` | Card thumbnail (path to a screenshot) | Optional |
| `environment`, `time_spent` | "At a glance" box | Optional |
| `series`, `part`, `short_title` | Groups multi-part guides (see below) | For series |

### Screenshots

Upload images to `assets/img/writeups/<folder>/` and add them with
`![What the image shows](/assets/img/writeups/<folder>/my-screenshot.png)`.
Avoid spaces in image file names.

## Series

Give each part the same `series:` name, a `part:` number, and a `short_title:`.
The category page groups them, the home page features the series, and each part
gets a sidebar listing every part. Put `series_summary:` on part 1.

## Categories

Each category is two small files:

- `_data/categories/<slug>.yml`: title, nav order, icon, intro text
- `<slug>.html`: the category's list page (`layout: labs-index`, `category: <slug>`)

Writeups go in `_labs/<slug>/`. The nav bar, home page cards, and stats pick up new
categories automatically. Writeup Studio can create both files for you.

## Change site-wide things

| To change… | Edit |
| --- | --- |
| Name, job title, location, contact links | `_data/profile.yml` |
| Home page intro text and extra stat | `_data/home.yml` |
| Site title and description (browser tab, search) | `_config.yml` |
| Nav bar: order, labels, and links | `_data/navigation.yml` (or the studio's Home page & nav tab) |
| A category's name, order, or intro | `_data/categories/<slug>.yml` |
| Colors and fonts | top of `assets/css/main.css` |
| About text | `about.md` |
| Resume | upload a new `assets/files/Elijah-Bennett-Resume.pdf` |
| Home page | `index.html` |

## Before going live

- Add your LinkedIn (and email if you want it in the footer) in `_data/profile.yml`, or in the studio under Profile & resume.
- Old links keep working: `AD-startup.html`, `AD-step-2.html` … `AD-step-6.html`,
  `winad.html`, `winsh.html`, `about.html`, `resume.html`, `projects.html`, and
  `cybersecuritylabs.html` are small redirect files that forward to the new pages.
- Once this is live you can delete the old `images/` folder, `style.css`, and
  `Resume.pdf` from the repo root. Their contents now live in `assets/`.

## How it fits together

```
_config.yml              site settings
_data/navigation.yml     nav bar links, in order
_data/profile.yml        name, contact links, resume PDF path
_data/home.yml           home page intro text
_data/categories/        one file per lab category
_layouts/                page templates (design lives here)
_includes/               head, nav, footer, write-up card
_labs/<category>/        writeups, one .md file each
_templates/              copy-paste starter for new writeups (not published)
assets/                  CSS, JavaScript, images, resume PDF
index.html               home page
it-labs.html, cybersecurity-labs.html   category list pages
about.md, resume.md      standalone pages
```

## Preview on your own computer (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
