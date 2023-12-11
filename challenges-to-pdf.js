import fs from 'fs-extra'
import path from 'path'
import markdownpdf from 'markdown-pdf'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dirPath = path.join(__dirname, './src/lib/challenges')
const outputPath = 'merged.pdf'

function naturalSort(a, b) {
	return a.localeCompare(b, undefined, {
		numeric: true,
		sensitivity: 'base',
	})
}

async function mergeMarkdownToPDF() {
	try {
		const files = (await fs.readdir(dirPath)).sort(naturalSort)
		let markdownContent = ''

		for (const file of files) {
			if (path.extname(file) === '.svx') {
				const content = await fs.readFile(
					path.join(dirPath, file),
					'utf-8',
				)
				markdownContent += `# ${file}\n\n${content}\n\n`
			}
		}

		markdownpdf()
			.from.string(markdownContent)
			.to(outputPath, () => {
				console.log(`Merged PDF created at ${outputPath}`)
			})
	} catch (err) {
		console.error('Error:', err)
	}
}

mergeMarkdownToPDF()
