from scholarly import scholarly
import bibtexparser
from datetime import datetime

# Search for a scholar's publications
search_query = scholarly.search_author('Harsh Kasyap')  # Replace with your name or search query
author = next(search_query)  # Retrieve the first author match

# Fetch author details
author_details = scholarly.fill(author)

# Open or create a BibTeX file to write the results
bib_entries = []

for pub in author_details['publications']:
    publication = scholarly.fill(pub)
    
    # Create a BibTeX entry for each publication
    bib_entry = {
        'ENTRYTYPE': 'article',
        'author': publication.get('author', 'Unknown Author'),
        'title': publication.get('bib', {}).get('title', 'No Title'),
        'journal': publication.get('bib', {}).get('journal', 'Unknown Journal'),
        'year': publication.get('bib', {}).get('pub_year', 'Unknown Year'),
        'url': publication.get('pub_url', ''),
        'abstract': publication.get('bib', {}).get('abstract', 'No Abstract Available')
    }
    
    # Format the entry as a BibTeX entry string
    bib_entries.append(bib_entry)

# Convert the bib_entries to BibTeX format
bib_database = bibtexparser.bibdatabase.BibDatabase()
bib_database.entries = bib_entries

# Output the BibTeX string to a file
with open('publications.bib', 'w') as bibfile:
    bibtexparser.dump(bib_database, bibfile)

print("BibTeX file generated successfully.")