FROM python:3.8
ADD requirements.txt /code/
WORKDIR /code
RUN pip install -r requirements.txt
ADD . /code
WORKDIR /code/app
CMD ["python", "app.py"]
RUN chmod u+x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]