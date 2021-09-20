FROM node:alpine
COPY . /app
WORKDIR /app
CMD yarn android /android

# done
#
