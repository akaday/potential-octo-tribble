FROM ubuntu:24.04@sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782

VOLUME /node

RUN buildDeps='binutils build-essential vim nasm git' \
  && apt-get update \
  && apt-get install -y --no-install-recommends --force-yes $buildDeps \
  && apt-get clean \
  && apt-get autoremove -y \
  && cpan install Text::Template \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /node
