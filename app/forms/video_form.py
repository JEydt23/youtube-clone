from flask_wtf import FlaskForm
from wtforms.fields import StringField
from wtforms.validators import DataRequired

class VideoForm(FlaskForm):
    title = StringField("Title", [DataRequired()])
    description = StringField("Description", [DataRequired()])
    video_url = StringField("Video_URL", [DataRequired()])
    tags = StringField("Tags", [DataRequired()])
