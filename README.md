# Hao Ren Academic Homepage

This site is a small static homepage powered by the files in `index.html`, `news.html`, `research.html`, `publications.html`, `script.js`, and the data files under `_includes/`.

## How content is loaded

- `index.html` loads the latest content for the homepage.
- `news.html` shows all news items from `_includes/news.json`.
- `research.html` shows research cards from `_includes/research.json`.
- `publications.html` shows all publications from `_includes/publications.bib`.

## Add or edit news

Edit [_includes/news.json](_includes/news.json) and keep items sorted from newest to oldest.

Example:

```json
[
  {
    "date": "2026-09-12",
    "content": "I gave an oral presentation at ECCV2026 in Malmö, Sweden."
  },
  {
    "date": "2026-08-05",
    "content": "Unordered Landmark Visual Navigation has been selected as an oral paper at ECCV2026."
  }
]
```

Notes:

- Homepage news shows the latest 5 items.
- Attendance / travel-related items such as `attended`, `speaker of poster`, `参加`, or `出席` are limited to at most 1 item in the homepage top 5.
- The dedicated news page still shows all items.

## Add or edit research items

Edit [_includes/research.json](_includes/research.json).

Each item supports:

- `title`
- `description`
- `image`
- `link`

Example:

```json
[
  {
    "title": "Example Research Project",
    "description": "Short description of the project and its contribution.",
    "image": "./_data/example.png",
    "link": "https://example.com"
  }
]
```

## Add or edit publications

Edit [_includes/publications.bib](_includes/publications.bib).

Supported fields include:

- `title`
- `author`
- `journal` or `booktitle`
- `year`
- `volume`
- `number`
- `pages`
- `pdf`
- `code`
- `project`
- `highlight`
- `oral`
- `poster`
- `journal_badge`
- `annotations`

Example without annotations:

```bibtex
@article{ren2026example,
  title={Example Paper Title},
  author={Ren, Hao and Zhang, Someone},
  journal={Example Conference},
  year={2026},
  pdf={https://example.com/paper.pdf},
  code={https://github.com/example/repo},
  project={https://example.com/project},
  oral={true}
}
```

## Publication annotations

`annotations` is a JSON string stored inside the BibTeX entry. It can be a single object or an array.

Example with multiple annotations:

```bibtex
@article{ren2026annotated,
  title={Annotated Paper Title},
  author={Ren, Hao and Zhang, Someone},
  journal={Example Journal},
  year={2026},
  pdf={https://example.com/paper.pdf},
  annotations=[
    {"text":"Highlight","color":"#d4a017","position":"before-title","order":1},
    {"text":"Open Access","color":"#2e7d32","position":"after-title","order":2},
    {"text":"Code","color":"#1565c0","position":"after-links","order":1}
  ]
}
```

Available annotation positions:

- `top`
- `before-title`
- `after-title`
- `before-authors`
- `after-authors`
- `before-venue`
- `after-venue`
- `before-links`
- `after-links`
- `bottom`

Example with a single annotation object:

```bibtex
@article{ren2026single-note,
  title={Another Example Paper},
  author={Ren, Hao and Zhang, Someone},
  journal={Example Venue},
  year={2026},
  annotations={"text":"Featured","color":"#b31b1b","position":"before-title"}
}
```

## Practical tips

- For publications, put newer items earlier if you want them to appear near the top before sorting.
- Keep `year` numeric so sorting works correctly.
- If you use `annotations`, make sure the JSON syntax is valid.
- The homepage and publications page both read from the same publication data.