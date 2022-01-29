import os
from src import db, app, DATABASE_URL

@app.before_request
def before_request():
    database_name = os.path.basename(os.environ.get('DATABASE_URL') or DATABASE_URL)
    db_dir = os.path.join(app.root_path, database_name)
    if not os.path.exists(db_dir):
        db.create_all()

class Items(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)

    def __init__(self, name):
        self.name = name

    def serialize(self):
        return {'id': self.id, 'name': self.name}