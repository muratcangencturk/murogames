# MuroGames Website

MuroGames is a lightweight static site that showcases a growing collection of free HTML5 games sourced from itch.io.
Everything runs in the browser with plain HTML, CSS and JavaScript so it can be hosted on any static web service.

## Features

* Responsive Tailwind based layout
* Dynamic category filtering and search
* Admin tools to generate individual game pages
* Python script for building the site logo

## Running Locally

Because it is a static site you can open `index.html` directly in your browser or serve the folder with a small web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` to browse the games.

## Adding Games

Games are listed in `js/games.json` as an array of objects. Each entry defines the page id, title, description, thumbnail, source URL and genre. After updating the JSON you should generate a game page in the `games/` directory. You can manually copy `games/template.html` or use the admin generator located at `admin/generator.html`.

Thumbnails for games live in `images/games/`. Make sure to add a suitable image for each game.

## Game Categories

Categories are generated automatically from the game list. Click a category button or use the search box on the homepage to filter the catalog.


## Logo Generator

The `logo_creator.py` script builds the site logo and favicon. It requires Python 3 and the Pillow library:

```bash
pip install Pillow
python3 logo_creator.py
```

The images will be written to the `images/` directory.

## Contributing

1. Fork the repository and create a new branch for your feature or fix.
2. Test the site locally by running a web server as shown above.
3. Ensure HTML, CSS and JavaScript follow the existing style of the project.
4. Submit a pull request describing your changes.


## License

This project is licensed under the [MIT License](LICENSE).
