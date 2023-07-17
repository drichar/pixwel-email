const templates = [
  {
    name: 'Basic / Welcome',
    slug: 'basic'
  }
]

const tableBody = document.getElementById('templates')

templates.forEach((template) => {
  const row = document.createElement('tr')

  row.innerHTML = `
    <td class="flex items-center flex-wrap w-full py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:pl-0 lg:text-base">
			<span class="py-1 mr-4 sm:m-0">${template.name}</span>
			<div class="sm:hidden flex items-center space-x-2 py-1">
				<a href="https://github.com/drichar/pixwel-email/blob/main/templates/${template.slug}.mjml" class="rounded bg-white px-2 py-1 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					MJML
				</a>
				<a href="https://github.com/drichar/pixwel-email/blob/main/output/${template.slug}.html" class="rounded bg-white px-2 py-1 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					Output
				</a>
			</div>
		</td>
		<td class="hidden px-3 py-4 text-sm font-medium text-gray-500 sm:table-cell lg:text-base">
			<a href="https://github.com/drichar/pixwel-email/blob/main/templates/${template.slug}.mjml" class="text-indigo-600 hover:text-indigo-900">templates/${template.slug}.mjml</a>
		</td>
		<td class="hidden px-3 py-4 text-sm font-medium text-gray-500 sm:table-cell lg:text-base">
			<a href="https://github.com/drichar/pixwel-email/blob/main/output/${template.slug}.html" class="text-indigo-600 hover:text-indigo-900">output/${template.slug}.html</a>
		</td>
		<td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 lg:text-base">
			<a href="output/${template.slug}.html" class="inline-flex rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				Preview<span class="sr-only">, ${template.name}</span>
			</button>
		</td>
  `

  tableBody.appendChild(row)
})

// Copyright
const currentYear = new Date().getFullYear()
document.getElementById('year').innerHTML = currentYear
