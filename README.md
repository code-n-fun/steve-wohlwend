# Steve Wohlwend portfolio

A buildless portfolio grounded in Steve's corrected resume content, with a dedicated collaboration case study and a generated, text-searchable resume PDF.

## Run locally or on a LAN

Run: node scripts/serve-lan.mjs

The server binds to the first private IPv4 address (10.x, 172.16–31.x, or 192.168.x) and prints the URL. Without a private address, it serves localhost only. Keep the process running. PORT changes the default port 8000; PORTFOLIO_HOST explicitly selects a local interface. Other devices need network access to the host and may need a scoped Windows Firewall rule.

After editing dist/index.html, run: node scripts/build-pages.mjs

Dedicated routes: /contact/ and /projects/pet-moment-shop/. Old illustrative project and demo pages have been removed.

## Content sources

Career, education, skills, name, location, and receiving email come from the supplied Steve Wohlwend Resume.pdf, with the owner's subsequent corrections taking precedence. Enterprise Java is the primary focus; Python is a supporting language. Chase includes the IBM DSAR microservice work and Terraform/AWS experience, not FastAPI or TypeScript. Wells Fargo emphasizes MCP tools and agent API endpoints, not React interfaces, Terraform, or AWS. The corrected PDF is served at /assets/steve-wohlwend-resume.pdf, so the existing View Resume buttons open the updated file.

## Resume PDF

The editable, print-ready source is resume/steve-wohlwend.html. It preserves the original contact information, education, employment dates, and accurate AEP, Lexon, McGraw-Hill, and Fiserv bullet points, while applying the owner's corrections to the summary, Chase, and Wells Fargo.

To regenerate the PDF locally, run: node scripts/build-resume.mjs

This optional export requires Playwright and Chrome. The script uses the existing qa/node_modules/playwright installation on this machine. If necessary, install local export tools with npm install --prefix qa --no-save playwright. Set RESUME_CHROME_PATH to select another Chrome executable, or install Playwright's Chromium browser.

The generated PDF is committed in dist/assets; Vercel needs only the existing node scripts/build-pages.mjs build command. Do not add the browser-based PDF export to Vercel's build. Include resume/ and scripts/build-resume.mjs in GitHub if you want to retain the editable source and export tool.

The original PDF is backed up locally at .resume-backup/steve-wohlwend-resume-original.pdf. That folder is ignored by Git and is outside the served dist directory.

Pet Moment Shop is labeled as a team collaboration and presented separately from Steve's enterprise Java experience. Project descriptions reflect the publicly visible experience at https://petmomentshop.com/. Screenshots were captured from the live site on October 11, 2026. No team size, individual responsibilities, backend stack, conversion metrics, or implementation claims are inferred from those screenshots.

The owner portrait is retained in assets/steve-portrait.jpg outside the published dist directory. The Contact page has no portrait or visitor upload.

## Contact form

The receiving email is configured in dist/config.js. The form sends name, email, subject, and message through FormSubmit's standard POST endpoint. There is no photo upload.

The receiving owner must confirm the activation email from the first submission if this address is not already activated. Native validation and the outgoing POST are checked with a browser-intercepted request; real email delivery is not claimed or tested without sending a real message.

Provider documentation: https://formsubmit.co/documentation

## Publishing

.openai/hosting.json retains the existing Site identity and dist static output. Use the Sites source workflow to commit, push, package, and publish the exact checked source. Preserve the existing private audience.
