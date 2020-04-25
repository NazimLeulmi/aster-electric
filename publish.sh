npm run build
rm -rf /var/www/html/*
cp -r ./out/* /var/www/html/
cp -r ./php/ /var/www/html/
systemctl restart apache2
echo "published"
