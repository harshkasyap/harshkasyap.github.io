# bibtex_to_html.py
from pybtex.database.input import bibtex

parser = bibtex.Parser()
bib_data = parser.parse_file("publications.bib")

html_output = []

for key, entry in sorted(bib_data.entries.items(), key=lambda x: x[1].fields.get('year', ''), reverse=True):
    title = entry.fields.get("title", "").replace("{", "").replace("}", "")
    authors = ", ".join([" ".join(person.first() + person.last()) for person in entry.persons["author"]])
    year = entry.fields.get("year", "")
    venue = entry.fields.get("booktitle", entry.fields.get("journal", ""))
    
    html_output.append(f"<p><strong>{title}</strong><br>{authors}<br><em>{venue}</em>, {year}</p>")

with open("publications.html", "w") as f:
    f.write("\n".join(html_output))
