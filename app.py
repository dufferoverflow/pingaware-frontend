from flask import Flask, render_template, make_response, jsonify
from flaskext.mysql import MySQL
import configparser
import json
app = Flask(__name__)

conf = configparser.ConfigParser()
conf.read('config.ini')
app.config['MYSQL_DATABASE_USER'] = conf['DEV']['username']
app.config['MYSQL_DATABASE_PASSWORD'] = conf['DEV']['password']
app.config['MYSQL_DATABASE_HOST'] = conf['DEV']['host']
app.config['MYSQL_DATABASE_DB'] = conf['DEV']['db']

mysql = MySQL()
mysql.init_app(app)

@app.route('/', methods=['GET'])
@app.route('/gengdp', methods=['GET'])
def gengdp():
    tables = ['G1', 'G2', 'H1', 'H2']
    results = dict()
    cursor = mysql.get_db().cursor()
    for table in tables: 
        cursor.execute(f'SELECT * FROM {table}')
        result = cursor.fetchall()
        results[table] = result
    
    # return make_response(jsonify(results), 200)
    return render_template('gengdp.html', results=results)

@app.route('/gdp', methods=['GET'])
def gdp():
    tables = ['GDP-G1', 'GDP-G2', 'GDP-G3']
    results = dict()
    cursor = mysql.get_db().cursor()
    for table in tables: 
        cursor.execute(f'SELECT * FROM `{table}`')
        result = cursor.fetchall()
        results[table] = result
    return render_template('gdp.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)
