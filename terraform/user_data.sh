#!/bin/bash
set -e

apt-get update -y
apt-get install -y docker.io curl

systemctl enable docker
systemctl start docker

docker --version
