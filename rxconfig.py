import reflex as rx

config = rx.Config(
    app_name="keikodev",
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000"
    ]
)
