from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# Determine output directory relative to this script
SCRIPT_DIR = Path(__file__).resolve().parent
IMAGES_DIR = SCRIPT_DIR / 'images'

# Create directory for logo if it doesn't exist
IMAGES_DIR.mkdir(exist_ok=True)

# Set up the image
width, height = 400, 100
background_color = (44, 62, 80)  # Dark blue background
text_color = (236, 240, 241)  # White text
accent_color = (52, 152, 219)  # Light blue accent

# Create the image
img = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(img)

# Draw the game controller icon
controller_width = 40
controller_height = 30
controller_x = 30
controller_y = height // 2 - controller_height // 2

# Controller body
draw.rounded_rectangle(
    [(controller_x, controller_y), 
     (controller_x + controller_width, controller_y + controller_height)],
    radius=10,
    fill=accent_color
)

# Controller buttons
button_size = 8
draw.ellipse(
    [(controller_x + controller_width - 15, controller_y + 5),
     (controller_x + controller_width - 15 + button_size, controller_y + 5 + button_size)],
    fill=text_color
)
draw.ellipse(
    [(controller_x + controller_width - 25, controller_y + 15),
     (controller_x + controller_width - 25 + button_size, controller_y + 15 + button_size)],
    fill=text_color
)

# Draw the text "MuroGames"
try:
    # Try to use a system font
    font = ImageFont.truetype("Arial", 40)
except IOError:
    # Fall back to default font
    font = ImageFont.load_default()

# Draw text
text = "MuroGames"
text_x = controller_x + controller_width + 20
text_y = height // 2 - 20
draw.text((text_x, text_y), text, font=font, fill=text_color)

# Save the logo
logo_path = IMAGES_DIR / 'logo.png'
img.save(logo_path)

# Create a smaller version for favicon
favicon_size = (32, 32)
favicon = Image.new('RGB', favicon_size, background_color)
favicon_draw = ImageDraw.Draw(favicon)

# Draw a simplified controller for favicon
favicon_draw.rounded_rectangle(
    [(8, 8), (24, 24)],
    radius=5,
    fill=accent_color
)
favicon_draw.ellipse([(16, 12), (20, 16)], fill=text_color)
favicon_draw.ellipse([(12, 16), (16, 20)], fill=text_color)

# Save the favicon
favicon_path = IMAGES_DIR / 'favicon.ico'
favicon.save(favicon_path)

print(f"Logo created at {logo_path}")
print(f"Favicon created at {favicon_path}")
