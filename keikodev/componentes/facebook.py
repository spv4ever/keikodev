import reflex as rx

def facebook_sdk():
    return rx.vstack(
        rx.html('<div id="fb-root"></div>'),
        rx.script(
            src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v19.0&appId=596710462672056",
            async_=True,
            defer=True,
            crossorigin="anonymous",
            nonce="DVkRVnA6"
        )
    )


def facebook_like_button():
    return rx.html(
        '<div class="fb-like" data-href="https://keikodev.es" data-width="" data-layout="button_count" data-action="" data-size="small" data-share="true"></div>'
    )
