
init:
	./node_modules/.bin/sequelize-cli init --force

migrate:
	./node_modules/.bin/sequelize-cli model:generate --name user --attributes fullname:string,email:string,majors:string --underscored --force

.PHONY: init migrate