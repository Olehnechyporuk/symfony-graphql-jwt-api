FROM php:7.3.6-fpm
MAINTAINER Oleh Nechyporuk <olhe.nechyporuk@gmail.com>

#install container's packages
RUN apt-get upgrade -y \
    && apt-get -f -y install \
    && apt-get update \
    && apt-get install -y curl \
    && apt-get install -y git \
    && apt-get install -y libssl-dev \
    && apt-get install -y --no-install-recommends apt-utils \
    && apt-get install -y software-properties-common \
    && apt-get install -y libxml2-dev libxslt1-dev python-dev \
    && apt-get install -y systemd \
    && apt-get -y autoclean

# composer installer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#xDebug and config
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

RUN apt-get install -y \
            libzip-dev \
            zip

RUN docker-php-ext-configure zip --with-libzip

RUN docker-php-ext-install -j$(nproc) json mbstring opcache pdo pdo_mysql mysqli zip

#Redis
RUN pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis

#Smtp
RUN apt-get install -y ssmtp

#install node
ENV NVM_DIR      /usr/local/nvm
ENV NODE_VERSION v10.16.0
ENV NODE_PATH    $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH         $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash \
    && /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION" \
    && ln $NVM_DIR/versions/node/$NODE_VERSION/bin/node /usr/bin/node

EXPOSE 8080
