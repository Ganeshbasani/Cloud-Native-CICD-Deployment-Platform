<div align="center">

# ☁️ Cloud-Native CI/CD Deployment Platform

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=28&duration=3000&pause=900&color=2563EB&center=true&vCenter=true&width=980&lines=Cloud-Native+CI%2FCD+Deployment+Platform;Containerized+Application+Delivery;Jenkins+%7C+Docker+%7C+Terraform+%7C+AWS;GitHub+%7C+Trivy+%7C+Amazon+ECR+%7C+EC2" alt="Typing Animation"/>
</p>

<p align="center">

[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-REST%20API-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![Terraform](https://img.shields.io/badge/Terraform-Infrastructure-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Amazon ECR](https://img.shields.io/badge/Amazon%20ECR-Registry-FF9900?style=for-the-badge&logo=amazonecr&logoColor=white)](https://aws.amazon.com/ecr/)
[![Pytest](https://img.shields.io/badge/Pytest-Testing-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)](https://pytest.org/)

</p>

<p align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Application-2563EB?style=for-the-badge&logo=render&logoColor=white)](https://cloud-native-cicd-deployment-platform.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ganeshbasani/Cloud-Native-CICD-Deployment-Platform)

</p>

</div>

---

## 🚀 Live Demo — Recruiter Access

### 🌐 Try the Deployed Application

**🔗 Live Demo:** https://cloud-native-cicd-deployment-platform.onrender.com/

The live application presents a clean, light enterprise-style dashboard for monitoring application health, environment, version, pipeline stages, builds, deployments, and runtime information.

### 🖥️ Live Application Preview

> Click the screenshot to open the live application.

<p align="center">
  <a href="https://cloud-native-cicd-deployment-platform.onrender.com/">
    <img src="Screenshots/08-live-application.png" alt="Live Application" width="920">
  </a>
</p>

---

## 📸 Product UI Showcase

### 📊 Dashboard

<p align="center">
  <img src="Screenshots/01-dashboard.png" alt="Dashboard" width="920">
</p>

### 🔁 Pipelines

<p align="center">
  <img src="Screenshots/02-pipelines.png" alt="Pipelines" width="920">
</p>

### 📁 Projects

<p align="center">
  <img src="Screenshots/03-projects.png" alt="Projects" width="920">
</p>

### 🧱 Builds

<p align="center">
  <img src="Screenshots/04-builds.png" alt="Builds" width="920">
</p>

### 🚀 Deployments

<p align="center">
  <img src="Screenshots/05-deployments.png" alt="Deployments" width="920">
</p>

### 🌍 Environments

<p align="center">
  <img src="Screenshots/06-environments.png" alt="Environments" width="920">
</p>

### 🧾 Logs

<p align="center">
  <img src="Screenshots/07-logs.png" alt="Logs" width="920">
</p>

### ⚙️ Settings

<p align="center">
  <img src="Screenshots/09-settings.png" alt="Settings" width="920">
</p>

---

## 📌 Table of Contents

- [Live Demo](#-live-demo--recruiter-access)
- [Product UI Showcase](#-product-ui-showcase)
- [Overview](#-overview)
- [What This Project Solves](#-what-this-project-solves)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [CI/CD Workflow](#-cicd-workflow)
- [Project Structure](#-project-structure)
- [Application API](#-application-api)
- [Installation](#️-installation)
- [Running the Application](#️-running-the-application)
- [Docker](#-docker)
- [AWS Deployment](#️-aws-deployment)
- [Infrastructure as Code](#-infrastructure-as-code)
- [Security](#-security)
- [Testing](#-testing)
- [Design System](#-design-system)
- [Future Improvements](#-future-improvements)
- [Repository](#-repository)
- [License](#-license)

---

# 📖 Overview

The **Cloud-Native CI/CD Deployment Platform** is a DevOps-focused application designed to demonstrate an end-to-end software delivery workflow for containerized applications.

The platform combines a Flask application with CI/CD, containerization, security scanning, cloud infrastructure, artifact management, and deployment automation.

The core idea is simple:

```text
Source Code
    ↓
Test
    ↓
Build
    ↓
Security Scan
    ↓
Container Registry
    ↓
Cloud Deployment
    ↓
Health Verification
```

Instead of treating deployment as a sequence of unrelated manual commands, the project organizes the delivery process into a repeatable engineering workflow.

---

# 🎯 What This Project Solves

A development team should not have to manually repeat the same deployment steps every time a new application version is released.

Without a CI/CD platform, deployment can involve:

```text
Pull source code
    ↓
Install dependencies
    ↓
Run tests
    ↓
Build container
    ↓
Scan container
    ↓
Push image
    ↓
Connect to server
    ↓
Pull image
    ↓
Restart application
    ↓
Check application health
```

This project demonstrates how those activities can be structured into a consistent cloud delivery process.

---

# ✨ Features

- ✅ Professional light enterprise-style deployment dashboard
- ✅ Flask application backend
- ✅ REST-style application endpoints
- ✅ Docker containerization
- ✅ Gunicorn application server
- ✅ Pytest automated testing
- ✅ Trivy container vulnerability scanning
- ✅ Amazon ECR image registry
- ✅ Amazon EC2 deployment
- ✅ AWS Systems Manager deployment access
- ✅ Terraform infrastructure as code
- ✅ IAM role based EC2 access
- ✅ Docker health checks
- ✅ Application version reporting
- ✅ Environment reporting
- ✅ Pipeline, build, deployment, environment, and log views
- ✅ Responsive UI
- ✅ Technical log viewer
- ✅ Live cloud deployment demonstration

---

# 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Language | Python 3.12 |
| Backend | Flask |
| Application Server | Gunicorn |
| Frontend | HTML, CSS, JavaScript |
| UI Typography | Inter |
| Technical Typography | JetBrains Mono |
| Testing | Pytest |
| Containerization | Docker |
| Security Scanning | Trivy |
| CI/CD | Jenkins |
| Source Control | Git, GitHub |
| Cloud | AWS |
| Compute | Amazon EC2 |
| Container Registry | Amazon ECR |
| Remote Operations | AWS Systems Manager |
| Access Control | AWS IAM |
| Infrastructure | Terraform |
| Operating System | Ubuntu Linux |

---

# 🏗️ Architecture

```text
                              INTERNET
                                  |
                                  v
                      +-------------------------+
                      |   Application Dashboard |
                      +-----------+-------------+
                                  |
                                  v
                      +-------------------------+
                      |      Flask + Gunicorn   |
                      +-----------+-------------+
                                  |
                              Docker
                                  |
                                  v
                              AWS EC2
                                  |
                                  |
                    +-------------+-------------+
                    |                           |
                    v                           v
              AWS Systems Manager         Amazon ECR
                    ^                           ^
                    |                           |
                    +------------+--------------+
                                 |
                                 |
                              Jenkins
                                 ^
                                 |
                               GitHub
```

### Delivery Path

```text
Developer
   |
   v
GitHub
   |
   v
Jenkins
   |
   +---- Pytest
   |
   +---- Docker Build
   |
   +---- Trivy Scan
   |
   v
Amazon ECR
   |
   v
AWS Systems Manager
   |
   v
Amazon EC2
   |
   v
Docker Container
   |
   v
Gunicorn + Flask
   |
   v
Health Check
```

---

# 🔄 CI/CD Workflow

## 1. Source Control

Application source code is maintained in GitHub.

```bash
git add .
git commit -m "Update application"
git push origin main
```

## 2. Automated Testing

Pytest validates the application before packaging.

```bash
python -m pytest tests -v
```

## 3. Docker Build

The application is packaged into a reproducible container image.

```bash
docker build -f docker/Dockerfile -t cloud-native-cicd-platform .
```

## 4. Security Scan

Trivy scans the container image for high and critical vulnerabilities.

## 5. Artifact Publishing

The validated Docker image is pushed to Amazon ECR.

```text
Amazon ECR
└── cloud-native-cicd-platform
```

## 6. Cloud Deployment

The EC2 deployment can be performed through AWS Systems Manager without requiring an interactive SSH deployment workflow.

## 7. Health Verification

The deployed container exposes:

```text
/health
```

and the application verifies that the service is responding correctly.

---

# 📂 Project Structure

```text
Cloud-Native-CICD-Deployment-Platform/
│
├── app/
│   ├── app.py
│   ├── requirements.txt
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   └── static/
│       ├── styles.css
│       └── app.js
│
├── docker/
│   └── Dockerfile
│
├── jenkins/
│   └── Jenkinsfile
│
├── terraform/
│   ├── main.tf
│   └── user_data.sh
│
├── tests/
│   └── test_app.py
│
├── Screenshots/
│   ├── 01-dashboard.png
│   ├── 02-pipelines.png
│   ├── 03-projects.png
│   ├── 04-builds.png
│   ├── 05-deployments.png
│   ├── 06-environments.png
│   ├── 07-logs.png
│   ├── 08-live-application.png
│   └── 09-settings.png
│
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# 🌐 Application API

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/` | Dashboard UI |
| `GET` | `/api/status` | Application status information |
| `GET` | `/health` | Health check |
| `GET` | `/ready` | Readiness check |
| `GET` | `/version` | Version and environment |

### `/health`

```json
{
  "status": "healthy",
  "version": "v1"
}
```

### `/api/status`

```json
{
  "service": "cloud-native-cicd-platform",
  "status": "running",
  "version": "v1",
  "environment": "aws"
}
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Ganeshbasani/Cloud-Native-CICD-Deployment-Platform.git
cd Cloud-Native-CICD-Deployment-Platform
```

## Create Virtual Environment

### Windows

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
```

## Install Dependencies

```bash
pip install -r app/requirements.txt
```

---

# ▶️ Running the Application

```bash
python app/app.py
```

Open:

```text
http://127.0.0.1:5000
```

---

# 🐳 Docker

## Build

```bash
docker build -f docker/Dockerfile -t cloud-native-cicd-platform .
```

## Run

```bash
docker run -d \
  --name cloud-native-cicd-platform \
  -p 5000:5000 \
  cloud-native-cicd-platform
```

## Health Check

```bash
curl http://localhost:5000/health
```

---

# ☁️ AWS Deployment

The project uses AWS services for cloud deployment:

```text
Terraform
   |
   +---- Amazon EC2
   |
   +---- IAM Role
   |
   +---- Security Group
   |
   +---- Amazon ECR
   |
   +---- AWS Systems Manager
```

### Container Registry

Example image:

```text
cloud-native-cicd-platform:v1
```

### Deployment Pattern

```text
Docker Image
     ↓
Amazon ECR
     ↓
AWS Systems Manager
     ↓
EC2
     ↓
Docker Container
     ↓
Health Check
```

---

# 🧱 Infrastructure as Code

Terraform is used to define and provision the cloud infrastructure.

### Initialize

```bash
cd terraform
terraform init
```

### Validate

```bash
terraform validate
```

### Plan

```bash
terraform plan
```

### Apply

```bash
terraform apply
```

Terraform manages the project infrastructure as code rather than relying entirely on manually configured cloud resources.

---

# 🔐 Security

Security-focused practices demonstrated in the project include:

- Container vulnerability scanning with Trivy
- Non-root application user inside the Docker image
- IAM role based EC2 access
- AWS Systems Manager based remote operations
- IMDSv2 requirement for EC2
- Application health checks
- AWS credentials excluded from source control
- Terraform environment-specific values excluded from Git
- Minimal public exposure required for the running demo
- No application secrets hardcoded into source files

---

# 🧪 Testing

Run:

```bash
python -m pytest tests -v
```

The project includes tests around the application routes and service behavior.

The health and readiness endpoints are also suitable for deployment verification.

---

# 🎨 Design System

The dashboard follows a deliberate light enterprise SaaS design system.

### Color System

```text
Application Background    #F8FAFC
Surface                    #FFFFFF
Primary                    #2563EB
Primary Hover              #1D4ED8
Primary Soft               #EFF6FF
Primary Text               #172033
Secondary Text             #475569
Muted Text                 #64748B
Border                     #E2E8F0
Success                    #16A34A
Warning                    #D97706
Error                      #DC2626
Info                       #0284C7
Terminal                   #0F172A
```

### Typography

```text
Inter
JetBrains Mono
```

Inter is used for the normal interface.

JetBrains Mono is reserved for:

```text
Build IDs
Commit hashes
Branches
Version numbers
Commands
Deployment metadata
Logs
```

### UI Principles

- Light first
- Compact information density
- Restrained color usage
- Subtle borders
- Minimal shadows
- Consistent spacing
- Consistent component hierarchy
- Responsive layout
- Accessible focus states
- Technical dark surface only for terminal/log output

---

# 📈 What This Project Demonstrates

This project is primarily a **DevOps and cloud deployment project**, with a Flask application used as the deployable workload.

It demonstrates practical understanding of:

```text
Source Control
      ↓
Automated Testing
      ↓
Containerization
      ↓
Security Scanning
      ↓
Artifact Management
      ↓
Infrastructure as Code
      ↓
Cloud Deployment
      ↓
Health Verification
```

The project therefore goes beyond simply creating a Flask application. Its main purpose is to demonstrate how software can be moved from source code into a running cloud environment through a structured delivery process.

---

# 🚀 Future Improvements

- HTTPS and custom domain
- Application Load Balancer
- CloudWatch monitoring and alerting
- Centralized application logs
- AWS Secrets Manager integration
- Automated rollback
- Blue/green or rolling deployment strategy
- EC2 Auto Scaling
- Multi-AZ deployment
- Dashboard authentication and RBAC
- Persistent deployment history
- Deployment notifications
- Expanded integration and UI tests

---

# 🔗 Repository

### GitHub

https://github.com/Ganeshbasani/Cloud-Native-CICD-Deployment-Platform

### Live Application

https://cloud-native-cicd-deployment-platform.onrender.com/

---

<div align="center">

# 👨‍💻 Developer

### **Basani Ganesh**

B.Tech — Computer Science & Engineering

[GitHub](https://github.com/Ganeshbasani)

</div>

---

# 📜 License

This project is intended for educational, portfolio, and technical demonstration purposes.
