# MuroGames Website

MuroGames is a simple static site that showcases a collection of free HTML5 games sourced from itch.io.
It uses plain HTML, CSS and JavaScript with no backend server so it can be hosted on any static web service.

## Running Locally

Because it is a static site you can open `index.html` directly in your browser or serve the folder with a small web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` to browse the games.

## Adding Games

Games are listed in `js/script.js` in the `games` array. Each entry defines the page id, title, description, thumbnail, source URL and genre. After adding to the array you should generate a game page in the `games/` directory. You can manually copy `games/template.html` or use the admin generator located at `admin/generator.html`.

Thumbnails for games live in `images/games/`. Make sure to add a suitable image for each game.

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


