FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ADD ./target/shopcatalog-0.0.1-SNAPSHOT.jar shopcatalog.jar
ENTRYPOINT ["java","-jar","/shopcatalog.jar"]