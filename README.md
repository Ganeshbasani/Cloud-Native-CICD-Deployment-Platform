# Cloud-Native CI/CD Deployment Platform

A containerized Flask application with an automated CI/CD workflow using GitHub, Jenkins, Docker, Terraform, and AWS EC2.

## Architecture

Developer -> GitHub -> Jenkins -> Docker -> AWS EC2 -> Flask Application

## Tech Stack

- Python
- Flask
- Docker
- Jenkins
- Terraform
- AWS EC2
- Git and GitHub
- Linux

## Project Structure

```text
Cloud-Native-CICD-Deployment-Platform/
+-- app/
|   +-- app.py
|   +-- requirements.txt
+-- docker/
|   +-- Dockerfile
+-- jenkins/
|   +-- Jenkinsfile
+-- terraform/
|   +-- main.tf
|   +-- user_data.sh
+-- .dockerignore
+-- .gitignore
+-- README.md
```

## CI/CD Workflow

1. Developer pushes code to GitHub.
2. Jenkins checks out the repository.
3. Jenkins builds the Docker image.
4. Jenkins starts the Docker container.
5. Jenkins performs a health check.
6. Terraform provisions AWS infrastructure.
7. The Flask application runs on AWS EC2.

## Application Endpoints

**Home**

GET /

**Health Check**

GET /health

Response:

```json
{"status": "healthy"}
```

## Run Locally

```bash
python -m venv .venv
```

Windows:

```cmd
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r app/requirements.txt
```

Run:

```bash
python app/app.py
```

## Run with Docker

```bash
docker build -f docker/Dockerfile -t cloud-native-cicd-platform .
docker run -d --name cloud-native-cicd-platform -p 5000:5000 cloud-native-cicd-platform
```

## Terraform

```bash
cd terraform
terraform init
terraform validate
terraform plan
terraform apply
```

AWS credentials should be provided through the AWS CLI, environment variables, or an IAM role. Never commit AWS credentials to GitHub.

## Security

- Restrict SSH access to trusted IP addresses.
- Use IAM roles instead of static AWS credentials.
- Store secrets securely.
- Use HTTPS for production deployments.
- Avoid exposing unnecessary ports.

## Author

**Basani Ganesh**

Computer Science and Engineering

GitHub: https://github.com/Ganeshbasani

## License

This project is intended for educational and portfolio purposes.
