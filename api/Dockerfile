# syntax=docker/dockerfile:1

FROM python:3.9.18-alpine

WORKDIR /api

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "run.py"]
