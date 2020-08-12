#!/bin/bash
today=$(date -I)
install_dir=$today
mkdir -p "$install_dir"
git clone git@github.com:rghose/chat-room-nodejs.git $install_dir
cd "$install_dir"
npm install
cd -
ln -sfn "$install_dir" latest
pm2 restart ecosystem.config.js --env production
