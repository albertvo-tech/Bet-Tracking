# -*- coding: utf-8 -*-
"""
@author: Lorenzo HG & Mephiles
"""

from selenium import webdriver
from bs4 import BeautifulSoup
import time
### Variables para agrupar índices deportes/partidos
resultado = {'Campeonato': [], 'Partido': [], 'Hora': [],'Equipos': [],'TeamOne': [], 'TeamTwo': [], '1x2': [], 'Proximo Gol': [], 'Goles Partido': [], 'ID': []}

browser = webdriver.Edge("C:/Users/raul_/OneDrive/Escritorio/webscraping/Nueva carpeta/MicrosoftWebDriver.exe")
browser.get('https://www.bet365.es/#/IP/')#Directo


browser.implicitly_wait(4)#añadimos un tiempo de espera para que cargue todo el contenido web

#función para que observer el contenido de todos los botones de la web que seleccionamos
num_links = len(browser.find_elements_by_link_text('Watch'))
for i in range(num_links):
    # navigate to link
    button = browser.find_elements_by_class_name("btn-primary")[i]
    button.click()
    
html = browser.page_source
html = BeautifulSoup(html, "html.parser")

#cerramos el navegador una vez acabamos de observar
#browser.close()
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
oddsname=html.find_all(attrs={'class':"gl-ParticipantCentered_Name"})#NombreApuestas
eventid=html.find_all(attrs={'class':"ipo-FixtureEventCountButton_EventCountWrapper"})#NombreApuestas
wrap=html.find_all(attrs={'class':['gl-ParticipantCentered_Handicap','gl-ParticipantCentered_Odds','gl-ParticipantCentered_Name']})#Idevento

#for find in wrap:
    #if(str(find.get_text().encode('utf-8')).find("U")):
    #print(str(find.get_text().encode('utf-8')).find("Sin"))

#recorremos todos los parametros deseador y los guardamos en un diccionario para su tratamiento
#get_text para extraer solo texto sin tags
for find in liga:resultado['Campeonato'].append(find.get_text().encode('utf-8'))
for find in champ:resultado['Partido'].append(find.get_text().encode('utf-8'))
for find in intimeplay:resultado['Hora'].append(find.get_text().encode('utf-8'))
for find in teamwrapper:resultado['Equipos'].append(find.get_text().encode('utf-8'))
for find in teamone:resultado['TeamOne'].append(find.get_text().encode('utf-8'))
for find in teamtwo:resultado['TeamTwo'].append(find.get_text().encode('utf-8'))
for find in eventid:resultado['ID'].append(find.get_text().encode('utf-8'))
#Para separar apuestas hay que contemplar el caso que esta vacio proque sinó lo guardarà si o sí

#variables para jugar entre las columnas y activar un columna u otra
j,i=0
lastcol=False

#función para separar las diferentes apuestas de fútbol
for find in wrap:
    #comprovamos si hay cadenas vacias de ser así las ignoramos
    if((find.get_text().encode('utf-8'))!=''):
        #como la última columna de apuestas es "O" comprovamos que no estamos en la ultima columna de ser así activamos
        #lastcol para saber dnd nos encontramos
        if(str(find.get_text().encode('utf-8')).find("O")==0): 
            #print("true")
            lastcol=True
        #si estamos en la útlima columna comprovamos que no se trata de un texto y lo ignoramos escriviendo solo las apuestas
        if(lastcol==True):
            if(((str(find.get_text().encode('utf-8')).find("U ")!=0) and (str(find.get_text().encode('utf-8')).find("O")!=0))):
                resultado['Goles Partido'].append(find.get_text().encode('utf-8'))  
                j+=1
                print("j",j)
        # en caso de que no sea la ultima columna gaurdamos en su respectivo lugar
        #hay que comprovar el hipotetico caso vacio de las 3 primeras columnas para esta versión
        #puesto que esto no se contempla i puede pasar este caso
        else:
            if(i<3): 
                resultado['1x2'].append(find.get_text().encode('utf-8'))
                print("i",i)
                #caso 2 columna y comprovamos la palabra sin para no guardarla
            if(((i>3) or (i<6))): 
                if(str(find.get_text().encode('utf-8')).find("Sin ")==0): 
                    i-=1
                else:
                    resultado['Proximo Gol'].append(find.get_text().encode('utf-8'))
                    print("i",i)
        if(j==2):
            lastcol=False 
            print("false")
            i=0
            j=0
        i+=1


txt = open("C:/Users/raul_/OneDrive/Escritorio/webscraping/Nueva carpeta/html5.txt","w")
#txt.write(str(ligas).replace("['","").replace("']","").encode('utf-8'))
txt.write(str(resultado))
txt.close()
