<<<<<<< HEAD
cd keikodev
=======
cd keikodv
>>>>>>> 91bfe5d103c52d1b9edf0e0e4e5ee012ab214506
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



