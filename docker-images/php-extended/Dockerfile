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


EXPOSE 8080
