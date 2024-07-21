RUN_NPM = npm run
FRONTEND_PATH = --prefix application

install:
	npm install $(FRONTEND_PATH)

format:
	$(RUN_NPM) format $(FRONTEND_PATH)

run:
	$(RUN_NPM) dev $(FRONTEND_PATH)

build:
	$(RUN_NPM) build $(FRONTEND_PATH)
