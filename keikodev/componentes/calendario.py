import reflex

class Calendar(reflex.Component):
    def __init__(self):
        super().__init__()
        # Obtener la fecha actual
        self.current_date = reflex.now().date()

        # Crear los widgets de selección para día, mes y año
        self.day_select = reflex.Select(options=self.get_days(), value=str(self.current_date.day))
        self.month_select = reflex.Select(options=self.get_months(), value=str(self.current_date.month))
        self.year_select = reflex.Select(options=self.get_years(), value=str(self.current_date.year))

        # Actualizar la fecha cuando cambien las selecciones
        self.day_select.on_change(self.update_date)
        self.month_select.on_change(self.update_date)
        self.year_select.on_change(self.update_date)

    def get_days(self):
        return [(str(i), str(i)) for i in range(1, 32)]

    def get_months(self):
        return [(str(i), str(i)) for i in range(1, 13)]

    def get_years(self):
        current_year = self.current_date.year
        return [(str(i), str(i)) for i in range(current_year - 10, current_year + 11)]

    def update_date(self):
        day = int(self.day_select.value)
        month = int(self.month_select.value)
        year = int(self.year_select.value)
        self.current_date = reflex.Date(year, month, day)
        print("Fecha actualizada:", self.current_date)

    def render(self):
        return reflex.html.div([
            reflex.html.span("Año: "),
            self.year_select,
            reflex.html.br(),
            reflex.html.span("Mes: "),
            self.month_select,
            reflex.html.br(),
            reflex.html.span("Día: "),
            self.day_select,
        ])




