# -*- coding: utf-8 -*-
"""
@author: Lorenzo HG & Mephiles
"""

from selenium import webdriver
from bs4 import BeautifulSoup

### Variables para agrupar índices deportes/partidos
resultado = {'Campeonato': [], 'Partido': [], 'Hora': [],'Equipos': [],'TeamOne': [], 'TeamTwo': [], 'Odds': []}

browser = webdriver.Edge("C:/Users/raul_/OneDrive/Escritorio/webscraping/Nueva carpeta/MicrosoftWebDriver.exe")
browser.get('https://www.bet365.es/#/IP/')#Directo


browser.implicitly_wait(2)#añadimos un tiempo de espera para que cargue todo el contenido web

#función para que observer el contenido de todos los botones de la web que seleccionamos
num_links = len(browser.find_elements_by_link_text('Watch'))
for i in range(num_links):
    # navigate to link
    button = browser.find_elements_by_class_name("btn-primary")[i]
    button.click()
    
html = browser.page_source
html = BeautifulSoup(html, "html.parser")

#cerramos el navegador una vez acabamos de observar
browser.close()
html.prettify()

txt = open("C:/Users/raul_/OneDrive/Escritorio/webscraping/Nueva carpeta/htmlDinamic.txt","w")
txt.write((html).encode('utf-8'))
txt.close()

#con find_all seleccionamos todos los elementos que contienen lo deseado
#ñadiendo attrs podemos especificar que elemento deseamos seleccionar
liga=html.find_all(attrs={'class':"ipo-CompetitionButton_NameLabel"})#Campeonato
champ=html.find_all(attrs={'class':"ipo-ScoreDisplayStandard_Wrapper"})#Partido
intimeplay=html.find_all(attrs={'class':"ipo-InPlayTimer"})#Hora
teamwrapper=html.find_all(attrs={'class':"ipo-TeamStack_TeamWrapper"})#Equipos 1 y 2
teamone=html.find_all(attrs={'class':"ipo-TeamPoints_TeamScore-teamone"})#Equipo 1 Goles
teamtwo=html.find_all(attrs={'class':"ipo-TeamPoints_TeamScore-teamtwo"})#Equipo 2 Goles
odds=html.find_all(attrs={'class':"gl-ParticipantCentered_Odds"})#Apuestas

#recorremos todos los parametros deseador y los guardamos en un diccionario para su tratamiento
#get_text para extraer solo texto sin tags
for find in liga:resultado['Campeonato'].append(find.get_text())
for find in champ:resultado['Partido'].append(find.get_text())
for find in intimeplay:resultado['Hora'].append(find.get_text())
for find in teamwrapper:resultado['Equipos'].append(find.get_text())
for find in teamone:resultado['TeamOne'].append(find.get_text())
for find in teamtwo:resultado['TeamTwo'].append(find.get_text())
for find in odds:resultado['Odds'].append(find.get_text())



txt = open("C:/Users/raul_/OneDrive/Escritorio/webscraping/Nueva carpeta/html5.txt","w")
#txt.write(str(ligas).replace("['","").replace("']","").encode('utf-8'))
txt.write(str(resultado).encode('utf-8'))
txt.close()
