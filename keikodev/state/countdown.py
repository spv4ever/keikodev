import asyncio
import reflex as rx
from datetime import datetime

class CountdownState(rx.State):
    countdown: str = "Loading countdown..."
    days: str
    hour: str
    minute: str
    seconds: str

    @rx.background
    async def start_countdown(self):
        target_date = datetime(2024, 3, 13, 23, 59, 59)
        while True:
            now = datetime.now()
            delta = target_date - now
            if delta.total_seconds() <= 0:
                async with self:  # Enter context block to update state
                    self.countdown = "Countdown finished!"
                break
            else:
                async with self:  # Enter context block to update state
                    days, seconds = delta.days, delta.seconds
                    hour = seconds // 3600
                    minute = (seconds % 3600) // 60
                    seconds = (seconds % 60)
                    self.countdown = f"{days} días, {hour} horas, {minute} minutos, {seconds} segundos"
                    self.days = str(days)
                    self.hour = str(hour)
                    self.minute = str(minute)
                    self.seconds = str(seconds)

            await asyncio.sleep(1)  # Update every second without blocking