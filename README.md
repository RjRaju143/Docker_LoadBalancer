### web

```sh
docker build .
docker run -it -p5001:8000 -d IMAGE_NAME
docker run -it -p5002:8000 -d IMAGE_NAME
```

### nginx

```sh
docker build .
docker run -it -p80:80 -d IMAGE_NAME
```
