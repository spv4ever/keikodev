import reflex as rx



config = rx.Config(
    app_name="keikodev",
    api_url="https://api.keikodev.es:8000",
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000"
    ],
)


