import os
from flask import Flask, jsonify, render_template

app = Flask(__name__)

VERSION = os.getenv("APP_VERSION", "dev")
ENVIRONMENT = os.getenv("APP_ENV", "development")


@app.get("/")
def home():
    return render_template(
        "index.html",
        version=VERSION,
        environment=ENVIRONMENT,
    )


@app.get("/api/status")
def status():
    return jsonify(
        {
            "service": "cloud-native-cicd-platform",
            "status": "running",
            "version": VERSION,
            "environment": ENVIRONMENT,
        }
    )


@app.get("/health")
def health():
    return jsonify({"status": "healthy", "version": VERSION})


@app.get("/ready")
def ready():
    return jsonify({"status": "ready"})


@app.get("/version")
def version():
    return jsonify({"version": VERSION, "environment": ENVIRONMENT})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
