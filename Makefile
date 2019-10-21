MARKUP = markup
MARKUP_BUILD = markup

npm-i:
	cd $(MARKUP) && npm i && cd $(CURDIR)

npm-build:
	cd $(MARKUP) && npm run build && $(CURDIR)

pull:
	git pull

deploy: pull && npm-i && npm-build


