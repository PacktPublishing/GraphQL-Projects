#/bin/sh
export HASURA_GRAPHQL_DATABASE_URL=$DATABASE_URL
env
/bin/docker-entrypoint.sh