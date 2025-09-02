# El Birret de l'Estany - Event Website

A modern, responsive website for the "El Birret de l'Estany" event, built with HTML, CSS, and JavaScript.

## Features

- 📱 Fully responsive design
- 🎨 Modern and appealing visual design
- ⚡ Smooth animations and interactions
- 🚀 Fast loading and optimized performance
- 🌍 Multilingual support (Catalan primary)
- 📧 Contact form functionality
- 🎫 Ticket purchasing interface
- 📍 Location and map integration ready
- ⏰ Event countdown timer

## Structure

```
web_birret/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Images, icons, and other media
└── README.md           # This file
```

## Quick Start

1. Open `index.html` in a web browser
2. The website is ready to use!

## Customization Guide

### Adding Images

Place your images in the `assets/` folder and update the image placeholders:

```html
<!-- Replace image placeholders with actual images -->
<img src="assets/hero-image.jpg" alt="El Birret de l'Estany">
<img src="assets/estany-location.jpg" alt="L'Estany">
```

### Updating Content

#### Event Details
- Modify dates in the hero section
- Update program schedule in the Program section
- Change location details in the Location section

#### Contact Information
- Update email, phone, and social media links in the Contact section
- Modify the contact form action to point to your form handler

#### Ticket Prices
- Update prices in the Tickets section
- Modify ticket features and benefits

### Map Integration

Replace the map placeholder with a real map:

```html
<!-- Google Maps -->
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>

<!-- Or OpenStreetMap -->
<iframe 
    src="https://www.openstreetmap.org/export/embed.html?..." 
    width="100%" 
    height="300" 
    style="border:0;">
</iframe>
```

### Color Scheme

The website uses a cohesive color palette:

- Primary Blue: `#2c5aa0`
- Accent Orange: `#ff6b6b` / `#ee5a24`
- Light Blue Gradient: `#667eea` to `#764ba2`
- Success Green: `#27ae60`
- Background Grey: `#f8f9fa`

### Typography

Uses Google Fonts - Poppins:
- Light (300)
- Regular (400)
- Semi-bold (600)
- Bold (700)

## Content Suggestions

### Hero Section
- Professional event photography
- Drone shots of the location
- Previous event highlights

### About Section
- Event history and background
- Organizer information
- Community impact stories
- Sustainability initiatives

### Program Section
- Detailed artist lineup
- Workshop descriptions
- Food vendor information
- Activity schedules

### Location Section
- Interactive map
- Parking information
- Public transport details
- Accessibility information
- Nearby accommodations

### Additional Content Ideas

1. **Gallery Section**
   - Previous event photos
   - Artist spotlights
   - Location beauty shots

2. **Sponsors Section**
   - Partner logos
   - Sponsor benefits
   - Community supporters

3. **FAQ Section**
   - Weather policy
   - Refund information
   - What to bring
   - Age restrictions

4. **News/Blog Section**
   - Event updates
   - Artist announcements
   - Behind-the-scenes content

5. **Testimonials**
   - Previous attendee reviews
   - Artist testimonials
   - Community feedback

## SEO Optimization

- Add meta descriptions
- Include Open Graph tags for social media
- Optimize images with alt text
- Add structured data markup
- Create XML sitemap

## Performance Tips

- Optimize images (WebP format)
- Minimize CSS and JavaScript
- Use CDN for external resources
- Enable GZIP compression
- Implement caching strategies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.
