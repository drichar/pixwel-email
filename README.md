# Pixwel HTML Email Templates

This repository contains HTML Email templates for Pixwel, created using the [MJML](https://mjml.io/) email framework.

## Getting Started

These instructions will help you set up this project locally for development.

### Prerequisites

- Node.js and npm
- pnpm installed globally on your machine. If not, you can install it by running `npm install -g pnpm`.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/drichar/pixwel-email.git
```

2. Navigate into the project directory:

```bash
cd pixwel-email
```

3. Install the project dependencies:

```bash
pnpm install
```

## Usage

You can use the following command to compile an MJML template to HTML:

```bash
pnpm run output your-template-name
```

This command should be run from the root directory of the project, and `your-template-name` should be replaced with the name of the template you want to compile. This will create an HTML version of the MJML template and place it in the `output` directory.

## Resources

MJML documentation: https://documentation.mjml.io/

MJML in PHP: https://github.com/qferr/mjml-php
