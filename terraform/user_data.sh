#!/bin/bash
set -eux

export DEBIAN_FRONTEND=noninteractive

apt-get update -y
apt-get install -y docker.io curl awscli

systemctl enable docker
systemctl start docker

usermod -aG docker ubuntu || true

systemctl enable snap.amazon-ssm-agent.amazon-ssm-agent.service 2>/dev/null || true
systemctl start snap.amazon-ssm-agent.amazon-ssm-agent.service 2>/dev/null || true

echo "Cloud-Native CI/CD EC2 bootstrap completed in ${aws_region}" \
  > /var/log/cloud-native-cicd-bootstrap.log
