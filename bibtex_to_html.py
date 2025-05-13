import os
from pybtex.database import parse_file
from bs4 import BeautifulSoup

def bibtex_to_html(bibtex_file, output_file):
    # Parse the .bib file
    bib_data = parse_file(bibtex_file)
    
    # Open the output HTML file
    with open(output_file, 'w') as out_file:
        out_file.write('<div class="publication-cards">\n')

        # Loop over each entry in the BibTeX file
        for entry in bib_data.entries.values():
            title = entry.fields.get('title', 'No Title')
            authors = entry.persons.get('author', [])
            year = entry.fields.get('year', 'No Year')
            journal = entry.fields.get('journal', 'No Journal')
            url = entry.fields.get('url', '')
            
            # Format authors as a comma-separated string
            author_names = ', '.join(str(author) for author in authors)
            
            # Generate the BibTeX entry for the copy button
            bibtex_entry = f"@article{{{entry.key},\n    title={{ {title} }},\n    author={{ {author_names} }},\n    year={{ {year} }},\n    journal={{ {journal} }}\n}}"
            
            # HTML structure for each publication card
            html_card = f'''
            <div class="publication-card">
                <h3 class="pub-title">{title}</h3>
                <p class="pub-authors">{author_names}</p>
                <p class="pub-year">{year}</p>
                <p class="pub-journal">{journal}</p>
                <button class="copy-bibtex" data-bibtex="{bibtex_entry}">Copy BibTeX</button>
                {'<a href="' + url + '" class="paper-link" target="_blank">Read Paper</a>' if url else ''}
            </div>\n
            '''
            
            # Write the HTML card to the file
            out_file.write(html_card)

        out_file.write('</div>\n')

# Define the paths for the BibTeX file and output HTML file
bibtex_file = 'publications.bib'  # Input BibTeX file
output_file = '_includes/publications.html'  # Output HTML file (for inclusion in Jekyll)

# Generate the HTML file
bibtex_to_html(bibtex_file, output_file)
