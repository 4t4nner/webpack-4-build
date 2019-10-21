MARKUP = markup
MARKUP_BUILD = markup

npm-i:
	cd $(MARKUP) && npm i && cd ..

npm-build:
	cd $(MARKUP) && npm run build && cd ..

pull:
	git pull

deploy: pull npm-i npm-build


