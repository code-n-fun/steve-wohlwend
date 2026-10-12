# Steve Wohlwend portfolio

A buildless portfolio grounded in Steve's supplied resume, with a dedicated Pet Moment Shop case study and original resume PDF.

## Run locally or on a LAN

Run: node scripts/serve-lan.mjs

The server binds to the first private IPv4 address (10.x, 172.16–31.x, or 192.168.x) and prints the URL. Without a private address, it serves localhost only. Keep the process running. PORT changes the default port 8000; PORTFOLIO_HOST explicitly selects a local interface. Other devices need network access to the host and may need a scoped Windows Firewall rule.

After editing dist/index.html, run: node scripts/build-pages.mjs

Dedicated routes: /contact/ and /projects/pet-moment-shop/. Old illustrative project and demo pages have been removed.

## Content sources

Career, education, skills, name, location, and receiving email come from the supplied Steve Wohlwend Resume.pdf. The original PDF is served unchanged at /assets/steve-wohlwend-resume.pdf.

Pet Moment Shop was confirmed by the owner as a team project. Project descriptions reflect the publicly visible experience at https://petmomentshop.com/. Screenshots were captured from the live site on October 11, 2026. No team size, individual responsibilities, backend stack, conversion metrics, or implementation claims are inferred from those screenshots.

The owner portrait is retained in assets/steve-portrait.jpg outside the published dist directory. The Contact page has no portrait or visitor upload.

## Contact form

The receiving email is configured in dist/config.js. The form sends name, email, subject, and message through FormSubmit's standard POST endpoint. There is no photo upload.

The receiving owner must confirm the activation email from the first submission if this address is not already activated. Native validation and the outgoing POST are checked with a browser-intercepted request; real email delivery is not claimed or tested without sending a real message.

Provider documentation: https://formsubmit.co/documentation

## Publishing

.openai/hosting.json retains the existing Site identity and dist static output. Use the Sites source workflow to commit, push, package, and publish the exact checked source. Preserve the existing private audience.
