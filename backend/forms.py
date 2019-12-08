
from flask_wtf import FlaskForm
from wtforms import SubmitField

from wtforms import BooleanField, StringField, PasswordField, validators


class RegistrationForm(FlaskForm):
    username = StringField('Username', [validators.Length(min=4, max=25, message="zjebales")])
    email = StringField('Email Address', [validators.Length(min=6, max=35)])
    password = PasswordField('New Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords must match')
    ])
    confirm = PasswordField('Repeat Password')
    remember_me = BooleanField('Remember Me')

    submit = SubmitField('Sign In')



