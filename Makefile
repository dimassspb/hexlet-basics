install:
	npm install
even:
	npx node src/bin/brain-even.js
publish:
	npm publish --dry-run
make lint:
	npx eslint.

