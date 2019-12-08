from flask import flash
from flask import jsonify
from flask import render_template
from flask import redirect
from forms import RegistrationForm
from AppConfig import app


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()

    if form.submit.data:
        form.validate()
        flash(form.errors)

    if form.validate_on_submit():
        save_user(str(form.username.data), str(form.email.data), str(form.password.data), str(form.remember_me.data))
        return redirect('/registered')
    else:
        return render_template('sign_up.html', form=form, error=form.errors)


def save_user(username, email, password, remember):
    f = open('data/' + username + '.txt', "w+")
    f.write(username + ';' + email + ';' + password + ';' + remember)
    f.close()


@app.route('/registered', methods=['GET', 'POST'])
def logged_in():
    return render_template("registered.html")


@app.route('/factorial/<int:f>')
def factorial(f):
    if f > 968:
        return "Nie tak pochopnie kawalerze"
    return jsonify(factorial=recur_factorial(int(f)))


def recur_factorial(n):
    if n == 1:
        return n
    elif n < 1:
        return 'NA'
    else:
        return n * recur_factorial(n - 1)