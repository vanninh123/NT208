FROM capsulecode/singlefile
USER root

RUN apk add --no-cache python3 py3-pip py3-flask

COPY webserver.py .

ENTRYPOINT ["python3", "webserver.py"]
