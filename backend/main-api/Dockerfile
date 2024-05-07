FROM python:3.8

COPY . /
RUN pip3 install \
    --no-cache-dir \
    --no-warn-script-location \
    -r requirements.txt

ENTRYPOINT ["python3", "app.py"]
