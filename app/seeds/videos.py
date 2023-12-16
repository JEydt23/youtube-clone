from app.models import db, Video, environment, SCHEMA
# from sqlalchemy.sql import text


def seed_videos():
    video1 = Video(
        id='1', title='Foul Breeze', description='Unreleased track by Nas', video_url='https://www.youtube.com/watch?v=Y-GICW2TibE', tags='music', user_id='1'
    )
    video2 = Video(
        id='2', title='Booska Pré', description='Freestyle Booska Pré by Lesram', video_url='https://www.youtube.com/watch?v=kl7h7FYc5C0', tags='music', user_id='1'
    )
    video3 = Video(
        id='3', title='103 fever', description="Absolute madness from Conner O'Mally", video_url='https://www.youtube.com/watch?v=pQs26c1klAU', tags='comedy', user_id='1'
    )
    video4 = Video(
        id='4', title='MY NEW FAVORITE FRIED CHICKEN SANDWICH', description='Air fried chicken sandwich recipe from Same the Cooking Guy', video_url='https://www.youtube.com/watch?v=Qu2meQb53Xs', tags='cooking', user_id='1'
    )
    video5 = Video(
        id='5', title="True Size of Napoleon's Army", description='Invicta breaks down his army', video_url='https://www.youtube.com/watch?v=qR0sODDUT8U', tags='history', user_id='3'
    )
    video6 = Video(
        id='6', title='The Most Awkward Moments | Seasons 1-4 Best Bits | Peep Show', description='Read the title, you jerk', video_url='https://www.youtube.com/watch?v=CvcEaf7brdU', tags='comedy', user_id='1'
    )
    video7 = Video(
        id='7', title='69.9 FM: The Bust', description='Stream of old CT Episodes', video_url='https://www.youtube.com/watch?v=jRHwfxu9GVo', tags='comedy', user_id='2'
    )
    video8 = Video(
        id='8', title='Year of the Dragon FULL SPECIAL', description='Nick Mullen special', video_url='https://www.youtube.com/watch?v=jRHwfxu9GVo', tags='comedy', user_id='1'
    )
    video9 = Video(
        id='9', title='Here is why the Yamaha R1 sounds SO GOOD!', description='Yammie Noob R1', video_url='https://www.youtube.com/watch?v=nVnobxLgakE', tags='motorcycles', user_id='3'
    )
    video10 = Video(
        id='10', title="Why Removing a Rhino's Horn Might Just Save It", description='BBC Earth', video_url='https://www.youtube.com/watch?v=SgqboXqZ99c', tags='nature', user_id='2'
    )

    db.session.add(video1)
    db.session.add(video2)
    db.session.add(video3)
    db.session.add(video4)
    db.session.add(video5)
    db.session.add(video6)
    db.session.add(video7)
    db.session.add(video8)
    db.session.add(video9)
    db.session.add(video10)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.

def undo_videos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.videos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM videos")

    db.session.commit()
