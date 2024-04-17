## base stage
FROM node:20-alpine as base
WORKDIR /app
COPY package.json ./
ENV NODE_OPTIONS="--max_old_space_size=2048"
RUN npm install

## build stage
FROM base as build

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base as product
WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000

CMD [ "npm", "run", "start" ]
