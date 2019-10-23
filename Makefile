MARKUP = markup
MARKUP_BUILD = markup

npm-i:
	cd $(MARKUP) && npm i && cd ..

npm-build:
	cd $(MARKUP) && npm run build && cd ..

pull:
	git pull

deploy: nvm-version pull npm-i npm-build

# as root
nvm-version:
	nvm use v12.12.0
