from pybtex.database.input import bibtex
from collections import defaultdict
import html

def escape(s):
    return html.escape(s, quote=True)

def generate_publications_by_year(bib_data):
    years = defaultdict(list)
    for entry_key, entry in bib_data.entries.items():
        fields = entry.fields
        year = fields.get('year', 'Unknown')
        years[year].append((entry_key, entry))

    return dict(sorted(years.items(), reverse=True))  # Newest year first

def generate_html(bib_data):
    years = generate_publications_by_year(bib_data)
    output = ['<div class="publications">']

    for year, entries in years.items():
        output.append(f'<h2>{year}</h2>')
        for i, (key, entry) in enumerate(entries):
            fields = entry.fields
            title = escape(fields.get('title', 'No Title'))
            authors = ', '.join(str(person) for person in entry.persons.get('author', []))
            abstract = escape(fields.get('abstract', ''))
            url = fields.get('url', '')
            entry_type = escape(entry.type)
            bibtex_block = escape(entry.to_string('bibtex'))

            # Use collapsible details/summary
            output.append('<details style="margin-bottom:1rem;">')
            output.append(f'  <summary><strong>{title}</strong><br><em>{authors}</em></summary>')
            output.append('  <div style="margin-top:0.5rem;">')

            if abstract:
                output.append(f'<p><strong>Abstract:</strong> {abstract}</p>')
            if url:
                output.append(f'<p><a href="{url}" target="_blank">🔗 View Paper</a></p>')

            # Copyable BibTeX block
            output.append('<pre><code>')
            output.append(bibtex_block)
            output.append('</code></pre>')

            output.append('  </div>')
            output.append('</details>')

    output.append('</div>')
    return '\n'.join(output)

if __name__ == '__main__':
    import sys
    parser = bibtex.Parser()
    bib_data = parser.parse_file(sys.argv[1])
    print(generate_html(bib_data))