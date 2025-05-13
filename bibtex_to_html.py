from pybtex.database.input import bibtex
from collections import defaultdict

# Load the BibTeX file
bib_data = bibtex.Parser().parse_file('publications.bib')

# Initialize a dictionary to store publications by year
publications_by_year = defaultdict(list)

# Group the publications by year
for entry in bib_data.entries.values():
    year = entry.fields.get('year', 'Unknown Year')
    title = entry.fields.get('title', 'No Title')
    author = entry.persons.get('author', 'Unknown Author')
    url = entry.fields.get('url', '')
    
    # Construct the publication details
    publication_details = {
        'title': title,
        'author': author,
        'url': url
    }
    
    publications_by_year[year].append(publication_details)

# Write HTML output grouped by year
with open('_includes/publications.html', 'w') as f:
    f.write('<h1>Publications</h1>')
    
    for year, publications in sorted(publications_by_year.items(), reverse=True):
        f.write(f'<h2>{year}</h2>')
        for pub in publications:
            f.write(f'<p><strong>{pub["title"]}</strong><br>{pub["author"]}<br>')
            if pub["url"]:
                f.write(f'<a href="{pub["url"]}" target="_blank">Link to Paper</a><br>')
            f.write('</p>')
