# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup

def getweb(html,file):
    web = html #.prettify("utf-8")
    file=str(file)+".html"
    txt = open(file,"w")
    txt.write(str(web))
    txt.close()