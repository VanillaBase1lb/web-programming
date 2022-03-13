import csv
import xml.etree.ElementTree

tree = xml.etree.ElementTree.parse("example.xml")
root = tree.getroot()

cols = ["site_id", "site_name", "site_location", "host_id", "host_name", "ip_address", "operative_system", "load_avg_1min", "load_avg_5min", "load_avg_15min"]

csvfile = open("example.csv", "w", newline = '')
csvwriter = csv.writer(csvfile)
csvwriter.writerow(cols)

for i in root:
    sid = i.get("id")
    sname = i.get("name")
    sloc = i.get("location")
    for j in i.find("Hosts"):
        hid = j.get("id")
        hname = j.find("Host_Name").text
        ip = j.find("IP_address").text
        os = j.find("OS").text
        l1 = j.find("Load_avg_1min").text
        l5 = j.find("Load_avg_5min").text
        l15 = j.find("Load_avg_15min").text

        csvwriter.writerow([sid, sname, sloc, hid, hname, ip, os, l1, l5, l15])
