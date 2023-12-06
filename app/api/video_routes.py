from flask import Flask, jsonify, Blueprint, redirect, request
from sqlalchemy.sql import func, select
from ..models import db, Video, User
from ..forms import VideoForm
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from .aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)


video_route = Blueprint("videos", __name__)

# GET ALL VIDEOS ROUTE

@video_route.route('/')
def get_all_photos():

    videos = Video.query.all()
    result = []
    for video in videos:

        videoUser = User.query.get(video["user_id"])

        result.append({
            "id": video.id,
            "title": video.title,
            "description": video.description,
            "video_url": video.video_url,
            "date_uploaded": video.date_uploaded,
            "tags": video.tags,
            "user_id": video.user_id,
            "User": {
                "id": videoUser.id,
                "username": videoUser.username,
                "first_name": videoUser.first_name,
                "last_name": videoUser.last_name,
                "profile_pic": videoUser.profile_pic,
                "bio": videoUser.bio
            }
        })

    return jsonify({"Videos": result})

# GET VIDEO BY ID

@video_route.route('/<int:video_id')
def get_video_by_id(video_id):
    video = Video.query.get(video_id).to_dict()
    user_info = User.query.get(video["user_id"])

    video["user_info"] = user_info.to_dict()

    return video
