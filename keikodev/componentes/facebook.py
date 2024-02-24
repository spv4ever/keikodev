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

def facebook_sdk_init():
    return rx.script("""
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '596710462672056',  // Replace with your actual app ID
                cookie     : true,
                xfbml      : true,
                version    : 'v19.0'  // Replace with the actual API version
            });
            
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    """)

# def footer():
#     return rx.vstack(
#         facebook_sdk_init(),
#         # ... other footer components
#     )

# Include the footer() function where you want to display the footer in your application layout.
