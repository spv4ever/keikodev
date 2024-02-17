import reflex as rx

def tutiempo()->rx.Component:
    
    return rx.box(
        rx.html("""<!-- www.tutiempo.net - Ancho:304px - Alto:40px -->
            <div id="TT_JC6wLxtBtDB6YFMUpfuEEEkkk7aULWaEkCZysy5yyEzBxzJBK">El tiempo - Tutiempo.net</div>
            <script type="text/javascript" src="https://www.tutiempo.net/s-widget/l_JC6wLxtBtDB6YFMUpfuEEEkkk7aULWaEkCZysy5yyEzBxzJBK"></script>""",
        ),
    )