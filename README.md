# Movie-Based API

This is a movie-based API that allows users to perform operations related to movies, such as managing movie data. The application is containerized using Docker, making it easy to build, run, and deploy.

---

## Steps to Run the Application API on Local

### Step 1: Build the Docker Image
Run the following command to build the Docker image:
```bash
docker build -t movie-app:V1.0 .
```

### Step 2: Run the Container from the Image
Run the following command to start a container from the built image:
```bash
docker run -p 3000:3000 movie-app:V1.0
            OR
docker compose up            
```

Your application will now be accessible at `http://localhost:3000`.

## Helpful Docker Commands


### General Commands
- **Check Docker Version**:
  ```docker version
  docker info
  ```
---
### Image Commands
- **List All Docker Images**:
  ```bash
  docker images
  ```
- **Build an Image**:
  ```bash
  docker build -t <image-name:tag> .
  ```
- **Remove a Specific Image**:
  ```bash
  docker rmi <image-id-or-name>
  ```
- **Remove All Unused Images**:
  ```bash
  docker image prune
  ```
---

### Container Commands
- **List Running Containers**:
  ```bash
  docker ps
  ```
- **List All Containers (Including Stopped)**:
  ```bash
  docker ps -a
  ```
- **Run a Container**:
  ```bash
  docker run -p <host-port>:<container-port> <image-name>
  ```
- **Stop a Running Container**:
  ```bash
  docker stop <container-id-or-name>
  ```
- **Start a Stopped Container**:
  ```bash
  docker start <container-id-or-name>
  ```
- **Remove a Container**:
  ```bash
  docker rm <container-id-or-name>
  ```
---

### Logs and Debugging
- **View Logs of a Container**:
  ```bash
  docker logs <container-id-or-name>
  ```
- **Run a Command Inside a Running Container**:
  ```bash
  docker exec -it <container-id-or-name> <command>
  ```
- **Open an Interactive Shell Inside a Running Container**:
  ```bash
  docker exec -it <container-id-or-name> /bin/bash
  ```
---

### Volume Commands
- **List All Volumes**:
  ```bash
  docker volume ls
  ```
- **Remove a Specific Volume**:
  ```bash
  docker volume rm <volume-name>
  ```
- **Remove All Unused Volumes**:
  ```bash
  docker volume prune
  ```
---

### Network Commands
- **List All Networks**:
  ```bash
  docker network ls
  ```
- **Inspect a Network**:
  ```bash
  docker network inspect <network-name>
  ```
- **Remove a Specific Network**:
  ```bash
  docker network rm <network-name>
  ```
- **Remove All Unused Networks**:
  ```bash
  docker network prune
  ```
---

### System Cleanup Commands
- **Remove All Unused Data (Images, Containers, Networks, etc.)**:
  ```bash
  docker system prune
  ```
- **Remove All Unused Data (with confirmation)**:
  ```bash
  docker system prune -a
  ```