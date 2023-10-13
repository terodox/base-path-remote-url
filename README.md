# Demo pages

- /pillars - show the difference between static import of image vs referencing image vs remote url

## Base path

A base path of `/andy-base-path` has been configured on this repo. This means all routes must be prefixed with `/andy-base-path`.

## Allowed domains for remote urls

The following domains have been allow listed for remote images:

- images.unsplash.com
- source.unsplash.com
- main.d45dn2ti2s07n.amplifyapp.com ([Repo](https://github.com/aws-aemilia/CacheControlAhio-IntegrationTest-DoNotTouch))
  - Good for testing cache-control headers

This means you can load any image from those domains through the `_next/image` path by providing the image in the `url` query parameter of the request.

Example:

- `/andy-base-path/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1520283451192-c3b05d7db25b&w=1080&q=75`
