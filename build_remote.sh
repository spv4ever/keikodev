#cd keikodv --> Lo quito porque en principio estamos en la raiz
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
rm -rf public
reflex init
API_URL=https://api.keikodev.es reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
deactivate



