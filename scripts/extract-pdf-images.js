/**
 * Extract images from PDF files
 * Usage: node scripts/extract-pdf-images.js [pdf-path]
 * 
 * This script extracts all pages from a PDF as PNG images
 * and saves them to public/images/infrastructure/
 */

const fs = require('fs');
const path = require('path');

// Note: This requires PyMuPDF (fitz) to be installed
// Run: pip install PyMuPDF
// Then run: python -c "import fitz; ..."

console.log(`
To extract images from PDF files, use Python with PyMuPDF:

1. Install PyMuPDF: pip install PyMuPDF
2. Run the extraction:

python -c "
import fitz
from pathlib import Path

pdf_path = Path('docs/palermo-infrastructure-entry-landscape-concepts-012126.pdf')
output_dir = Path('public/images/infrastructure')
output_dir.mkdir(parents=True, exist_ok=True)

if pdf_path.exists():
    doc = fitz.open(str(pdf_path))
    for page_num in range(len(doc)):
        page = doc[page_num]
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        output_file = output_dir / f'palermo-infrastructure-entry-landscape-concepts-012126-page-{page_num+1}.png'
        pix.save(str(output_file))
        print(f'Extracted page {page_num+1}')
    doc.close()
    print(f'Successfully extracted {len(doc)} pages')
else:
    print(f'PDF not found: {pdf_path}')
"

Or place the PDF in docs/ or public/docs/ and the images will be automatically detected.
`);
