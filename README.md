
# Docker Compose Assignment
# This project demonstrates the use of Docker Compose for managing multi-container applications. It includes:
1. MySQL + PHPMyAdmin
2. PostgreSQL + pgAdmin4
3. ReactJS frontend + NodeJS backend, with scaling and load balancing
 # Task 1: MySQL + PHPMyAdmin
 Location:
mysql-phpmyadmin/docker-compose.yml
 Run:
cd mysql-phpmyadmin
docker-compose up -d
 Access:
- PHPMyAdmin: http://localhost:8081
- MySQL on port 3306
 Features:
- Environment variables for database setup
- Persistent data volume for MySQL
# Task 2: PostgreSQL + pgAdmin4
 Location:
postgres-pgadmin/docker-compose.yml
 Run:
cd postgres-pgadmin
docker-compose up -d
Access:
- pgAdmin: http://localhost:5050
- PostgreSQL on port 5432
 Features:
- pgAdmin auto login with environment credentials
- PostgreSQL database with persistent volume
 # Task 3 & 4: ReactJS + NodeJS + Nginx Load Balancer (Scaled)
 Location:
react-node-scaled/
 Run:
cd react-node-scaled
docker-compose up --scale frontend=3 -d
 Access:
- Nginx (ReactJS Load Balanced): http://localhost:8080
- NodeJS API: http://localhost:5000
 Features:
- Multi-stage builds for both Node and React
- ReactJS scaled to 3 containers using Docker Compose
- Nginx reverse proxy/load balancer config
 

