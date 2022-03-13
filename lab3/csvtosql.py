import mysql.connector
import csv

mydatabase = mysql.connector.connect(
    host = "localhost",
    username = "username",
    password = "password"
)

dbcursor = mydatabase.cursor()

dbcursor.execute("create database xmlparser")
dbcursor.execute("use xmlparser")
dbcursor.execute("create table parsed (site_id int, sitr_name varchar(20), site_location varchar(20), host_id int, host_name varchar(20), ip_address varchar(20), operative_system varchar(15), load_avg_1min varchar(5), load_avg_5min varchar(5), load_avg_15min varchar(5))")

csvdata = csv.reader(open('example.csv'))
header = next(csvdata)

for row in csvdata:
    print(row)
    dbcursor.execute("insert into parsed (site_id, sitr_name, site_location, host_id, host_name, ip_address, operative_system, load_avg_1min, load_avg_5min, load_avg_15min) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", row)

print("\n\nrun 'select * from parsed' to see the result table")

mydatabase.commit()
dbcursor.close()