FROM mhart/alpine-node:latest

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN yarn install --prod

# Copying source files
COPY . .

# Running the app
CMD [ "yarn", "start" ]