helloWorld:
	echo "Hello world!"

dev:
	docker compose --env-file .env.dev up --build

preprod:
	docker compose --env-file .env.preprod -f docker-compose.preprod.yml up --build

prod:
	docker compose --env-file .env.prod -f docker-compose.prod.yml up --build

build-frontend:
	docker build -t $(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG) ./frontend

publish-frontend:
	docker push $(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG)

deploy-frontend:
	ssh $(VPS_USER)@$(VPS_HOST) "docker pull $(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG) && docker run -d -p 3002:3003 $(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG)"