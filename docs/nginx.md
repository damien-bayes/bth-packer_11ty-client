# Nginx

```bash
# Test the nginx configuration file for any errors
nginx -t -c nginx/nginx.default.conf

# Create encrypted password strings
openssl passwd <secret-password>
```