from pybtex.database.input import bibtex
from pybtex.database import Person
import sys

parser = bibtex.Parser()
bib_data = parser.parse_file(sys.argv[1])

print('<ul class="pub-list">')
for key, entry in sorted(bib_data.entries.items(), reverse=True):
    fields = entry.fields
    authors = entry.persons['author']
    author_names = ', '.join([str(a) for a in authors])

    title = fields.get('title', 'No Title').replace('{', '').replace('}', '')
    journal = fields.get('journal', fields.get('booktitle', ''))
    year = fields.get('year', '')
    doi = fields.get('doi', '')
    url = fields.get('url', '')

    link = f'<a href="https://doi.org/{doi}">{title}</a>' if doi else f'<a href="{url}">{title}</a>' if url else title

    print(f"<li><strong>{link}</strong><br>")
    print(f"{author_names}. <em>{journal}</em>, {year}.</li>")
print('</ul>')
