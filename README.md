# Suraj Home Care Ltd. — Website

A 5-page static website (HTML, CSS and JavaScript only, with no build step). To view it, open `index.html` in a browser, or upload the whole folder to any web host (cPanel, Netlify, Hostinger, GoDaddy and so on).

## Pages
| File | Page |
|---|---|
| `index.html` | Home: hero, highlights, about preview, 8 services, how it works, why choose us, call to action |
| `about.html` | About Us: story, mission and vision, values, caregiver standards, areas served, FAQ |
| `services.html` | Services: all 8 services in detail, with jump links and care schedule options |
| `careers.html` | Careers: reasons to join, 3 open positions, online application form |
| `contact.html` | Contact: contact details, consultation form, Google Map, areas served |

## Folder structure
```
css/style.css     all styling (brand colours are at the top, in :root)
js/main.js        menu, animations, counters, form handling
images/           photos and logo (logo.svg, logo-icon.svg)
logo/             logo files for the client: PDF, PNG (1200px) and SVG
```

## Before going live: things to update
1. **Email / domain.** The site uses **info@surajhomecare.ca** as a placeholder because the client asked us to buy the domain. Once the domain and email are set up, find and replace `info@surajhomecare.ca` in all 5 HTML files and in `js/main.js` (`BUSINESS_EMAIL`).
2. **TikTok link.** The site currently points to `https://www.tiktok.com/@surajhomecare`. Replace it with the client's real TikTok profile URL in all 5 HTML files.
3. **Forms.** On a static site, the Contact and Careers forms open the visitor's email app with the message already filled in. If you want forms that send directly from the page and accept resume uploads, connect a free service such as **Formspree** or **Netlify Forms**: add `action="https://formspree.io/f/XXXX" method="POST"` to each `<form>`, add `enctype="multipart/form-data"` to the careers form, and remove the `data-mailto` attribute.
4. **Job listings and areas served.** These are general examples. Confirm them with the client and edit them in `careers.html`, `about.html` and `contact.html`.

## Image credits
All photos come from **Unsplash** and are covered by the [Unsplash License](https://unsplash.com/license). It allows free commercial use, and no attribution or permission is needed. The original photos are:

| File | Unsplash photo ID |
|---|---|
| hero.jpg | photo-1765896387387-0538bc9f997e |
| personal-care.jpg | photo-1773227055624-07b515ba87c5 |
| companionship.jpg | photo-1762955911769-d652ceaa94bb |
| dementia-care.jpg | photo-1762955911431-4c44c7c3f408 |
| hospital-to-home.jpg | photo-1631815588090-d4bfec5b1ccb |
| overnight-care.jpg | photo-1587556930720-58ec521056a5 |
| palliative-care.jpg | photo-1584515933487-779824d29309 |
| meal-preparation.jpg | photo-1575467678930-c7acd65d6470 |
| homemaking.jpg | photo-1581578731548-c64695cc6952 |
| about-couple.jpg | photo-1554331292-735256644d5f |
| about-walk.jpg | photo-1592834448691-79fed8f0aae5 |
| careers-team.jpg | photo-1600880292203-757bb62b4baf |
| careers-activity.jpg | photo-1762955913084-96ea3f986468 |
| banner-senior.jpg | photo-1566616213894-2d4e1baee5d8 |
| contact-bench.jpg | photo-1508963493744-76fce69379c0 |

Icons come from Font Awesome Free and fonts from Google Fonts (Plus Jakarta Sans and Inter). Both are free for commercial use.
