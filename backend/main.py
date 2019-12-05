from flask import Flask, flash, url_for, request
from flask import jsonify
from flask import render_template
from flask import redirect

from forms import RegistrationForm

app = Flask(__name__, template_folder='.')
app.config['SECRET_KEY'] = 'dupa.8'


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    print('submit' + str(form.submit.data))
    if form.submit.data:
        flash(form.errors)

    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        saveUser(str(form.username.data), str(form.email.data), str(form.password.data), str(form.remember_me.data))
        return redirect('/registered')
    else:
        for fieldName, errorMessages in form.errors.items():
            for err in errorMessages:
                print(err)
        print(form.errors)

        return render_template('sign_up.html', form=form, error=form.errors)


def saveUser(username, email, password, remember):
    f = open('data/' + username + '.txt', "w+")
    f.write(username + ';' + email + ';' + password + ';' + remember)
    f.close()


@app.route('/registered', methods=['GET', 'POST'])
def loggedIn():
    return render_template("registered.html")


# @app.route('/factorial/<a>')
@app.route('/factorial/<int:f>')
def factorial(f):
    return jsonify(factorial=recur_factorial(int(f)))


def recur_factorial(n):
    if n == 1:
        return n
    elif n < 1:
        return 'NA'
    else:
        print(n)
        return n * recur_factorial(n - 1)
