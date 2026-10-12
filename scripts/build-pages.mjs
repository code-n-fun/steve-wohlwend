import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const html = readFileSync('dist/index.html', 'utf8');
const pages = {
  contact: { title: 'Contact Steve Wohlwend — Senior Software Engineer', description: 'Contact Steve Wohlwend for software engineering opportunities, project discussions, and technical collaboration.' },
  'projects/pet-moment-shop': { title: 'Pet Moment Shop — Steve Wohlwend', description: 'Pet Moment Shop, a collaborative team commerce project featured in Steve Wohlwend’s portfolio. Explore the live site and desktop and mobile screenshots.' }
};
for (const [route, page] of Object.entries(pages)) {
  mkdirSync('dist/' + route, { recursive: true });
  writeFileSync('dist/' + route + '/index.html', html.replace(/<title>.*?<\/title>/, '<title>' + page.title + '</title>').replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + page.description + '">'));
}
console.log('Built ' + Object.keys(pages).length + ' dedicated pages.');
