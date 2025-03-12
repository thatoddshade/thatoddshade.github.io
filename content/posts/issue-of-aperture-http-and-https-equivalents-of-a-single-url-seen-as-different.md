+++
date = 2025-03-12T15:38:00+01:00
title = "`http` and `https` equivalents of a single URL seen as different"

[extra]
[[in_reply_to]]
name = "Issues · aaronpk/Aperture"
url = "https://github.com/aaronpk/Aperture/issues"

[[syndication]]
name = "GitHub Issues"
url = "https://github.com/aaronpk/Aperture/issues/130"
+++

I first authenticated with `thatoddshade.is-a.dev`, which got turned into `http://thatoddshade.is-a.dev/` by indieauth.com.
I can authenticate with either `thatoddshade.is-a.dev` or `http://thatoddshade.is-a.dev/`.

when authenticating with `https://thatoddshade.is-a.dev`, the channels are not the same, as if I were logged in with a different website.
when authenticating with `https://thatoddshade.is-a.dev` from a reader, an error occurs. Monocle shows this as the Microsub endpoint's response:

```
{
    "code": 403,
    "header": "HTTP/1.1 403 Forbidden\r\nServer: nginx/1.14.0\r\nContent-Type: application/json\r\nTransfer-Encoding: chunked\r\nConnection: keep-alive\r\nX-Powered-By: PHP/7.2.7-1+ubuntu16.04.1+deb.sury.org+1\r\nCache-Control: no-cache, private\r\nDate: Wed, 12 Mar 2025 13:39:43 GMT",
    "body": {
        "error": "invalid_user",
        "error_description": "This token was issued to a different user",
        "debug": {
            "expected": "http://thatoddshade.is-a.dev/",
            "from_token": "https://thatoddshade.is-a.dev/"
        }
    },
    "error": "",
    "error_description": "",
    "url": "https://aperture.p3k.io/microsub/1024?action=channels",
    "debug": "HTTP/1.1 403 Forbidden\r\nServer: nginx/1.14.0\r\nContent-Type: application/json\r\nTransfer-Encoding: chunked\r\nConnection: keep-alive\r\nX-Powered-By: PHP/7.2.7-1+ubuntu16.04.1+deb.sury.org+1\r\nCache-Control: no-cache, private\r\nDate: Wed, 12 Mar 2025 13:39:43 GMT\r\n\r\n{\"error\":\"invalid_user\",\"error_description\":\"This token was issued to a different user\",\"debug\":{\"expected\":\"http:\\/\\/thatoddshade.is-a.dev\\/\",\"from_token\":\"https:\\/\\/thatoddshade.is-a.dev\\/\"}}",
    "headers": {
        "Server": "nginx/1.14.0",
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "X-Powered-By": "PHP/7.2.7-1+ubuntu16.04.1+deb.sury.org+1",
        "Cache-Control": "no-cache, private",
        "Date": "Wed, 12 Mar 2025 13:39:43 GMT"
    },
    "rels": []
}
```

`http://thatoddshade.is-a.dev/` and `https://thatoddshade.is-a.dev/` seem to share the same token but are each considered as a different user.

this seems to be related to [#116](https://github.com/aaronpk/Aperture/issues/116) and [#52](https://github.com/aaronpk/Aperture/issues/52).
