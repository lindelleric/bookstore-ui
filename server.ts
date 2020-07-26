import { createProxyMiddleware } from 'http-proxy-middleware';
import * as Bundler from 'parcel-bundler';
import * as express from 'express';

const bundler = new Bundler('src/index.html');
const app = express();

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    })
);

app.use(
    '/assets',
    createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
            '^/assets': '/'
        }
    })
);

app.use(bundler.middleware());

app.listen(1234);