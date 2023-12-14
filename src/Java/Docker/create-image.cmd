docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probatri-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probatri-java/app ../../..
