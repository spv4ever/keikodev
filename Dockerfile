FROM python:3.11

WORKDIR /app
COPY . .

ENV VIRTUAL_ENV=/app/.venv_docker
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN python3.11 -m venv $VIRTUAL_ENV

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install reflex --upgrade
RUN reflex init
RUN reflex script keep-chakra
RUN reflex init



CMD reflex run --env prod --backend-only


