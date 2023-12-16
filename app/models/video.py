from .db import db, environment, SCHEMA, add_prefix_for_prod

class Video(db.Model):
    __tablename__ = "videos"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    video_url = db.Column(db.String(), nullable=False)
    # date_uploaded = db.Column(db.DateTime, server_default=db.func.now())
    tags = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)


    # Relationships

    users = db.relationship("User", back_populates="videos")

    # To Dict

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "video_url": self.video_url,
            # "date_uploaded": self.date_uploaded,
            "tags":  self.tags,
            "user_id": self.user_id
        }
