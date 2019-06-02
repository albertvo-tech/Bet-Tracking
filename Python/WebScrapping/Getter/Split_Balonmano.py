# -*- coding: utf-8 -*-
"""
Created on Tue Apr 16 12:30:05 2019

@author: raul_
"""

def splitbalonmano(data,file):
    ### Variables para agrupar Ã­ndices deportes/partidos
    #apuestas={'Campeonato': [], 'Hora': [],'Equipos': [],'Local': [], 'Visitante': [], '1x2': [], 'Proximo Gol': [], 'Goles Partido': [],'ID': []}
    apuestas=[]
    lista=[]
    j=0
    i=0
    file=str(file)+"_odds.txt"
    lastcol=False
    for find in data:
        #time.sleep(1)
        #comprovamos si estamos en liga
        if(str(find).find("ipo-CompetitionButton_NameLabel ipo-CompetitionButton_NameLabelHasMarketHeading")!=-1):
            #apuestas['Campeonato'].append(find.get_text().encode('utf-8'))
            #Campo liga
            apuestas.append(str(find.get_text()))
        #comprovamos si estamos en hora actual partido
        elif(str(find).find("ipo-InPlayTimer")!=-1):
            #apuestas['Hora'].append(find.get_text().encode('utf-8'))
            #Campo hora actual partido
            apuestas.append(str(find.get_text()))
        #comprovamos si estamos en algun equipo
        elif(str(find).find("ipo-TeamStack_TeamWrapper")!=-1):
            #apuestas['Equipos'].append(find.get_text().encode('utf-8'))
            #Campo equipos
            if(str(find.get_text().find("\u0130"))==True):
                team=str(find.get_text().replce("\u0130",""))
            else:
                team=str(find.get_text())
            apuestas.append(team)
        #comprovamos si estamos en los goles del equipo 1
        elif(str(find).find("ipo-TeamPoints_TeamScore ipo-TeamPoints_TeamScore-teamone")!=-1):
           # apuestas['Local'].append(find.get_text().encode('utf-8'))
           #Campo gol/es equipo 1
            apuestas.append(str(find.get_text()))
        #comprovamos si estamos en los goles del equipo 2
        elif(str(find).find("ipo-TeamPoints_TeamScore ipo-TeamPoints_TeamScore-teamtwo")!=-1):
            #apuestas['Visitante'].append(find.get_text().encode('utf-8'))
            #Campo gol/es equipo 2
            apuestas.append(str(find.get_text()))
        #aÃ±adir id
    #    elif(str(find).find("ipo-FixtureEventCountButton_EventCountWrapper")):
    #        apuestas['ID'].append(aid)
    #        aid+=1
        #estamos en apuestas
        else:
            #comprovamos que hay algo en la cadena
            if((find.get_text())!=''):
                #como la Ãºltima columna de apuestas es "O" comprovamos que no estamos en la ultima columna de ser asÃ­ activamos
                #lastcol para saber dnd nos encontramos
                if(str(find.get_text()).find("O")==0): 
                    #print("true")
                    lastcol=True
                #si estamos en la Ãºtlima columna comprovamos que no se trata de un texto y lo ignoramos escriviendo solo las apuestas
                if(lastcol==True):
                    if(((str(find.get_text()).find("U")!=0) and (str(find.get_text()).find("O")!=0))):
                        if(str(find.get_text()).replace(".", "").isdigit()):
                            #apuestas['Goles Partido'].append(find.get_text().encode('utf-8'))  
                            #apuestas ultima columna
                            apuestas.append(str(find.get_text()))
                        j+=1
                        #print("j",j)
                # en caso de que no sea la ultima columna gaurdamos en su respectivo lugar
                #hay que comprovar el hipotetico caso vacio de las 3 primeras columnas para esta versiÃ³n
                #puesto que esto no se contempla i puede pasar este caso
                else:
                    if(i<3):  
                        if(str(find.get_text()).replace(".", "").isdigit()):
                            #apuestas['1x2'].append(find.get_text().encode('utf-8'))
                            #apuestas 1 columna
                            apuestas.append(str(find.get_text()))
                        #print("i",i)
                        #caso 2 columna y comprovamos la palabra sin para no guardarla
                    if(((i>=3) and (i<7))): 
                        
                        if(str(find.get_text()).find("Sin")==0): 
                            i-=1
                        else:
                            if(str(find.get_text()).replace(".", "").isdigit()):
                                #apuestas['Proximo Gol'].append(find.get_text().encode('utf-8'))
                                #apuestas 2 columna
                                apuestas.append(str(find.get_text()))
                            #print("i",i)
                
                    #apuestas['Datos'].append(resultado)
                i+=1
                if(j==2):
                    lastcol=False 
                    #print("false")
                    i=0
                    j=0
                    lista.append(apuestas)

    #guardamos el resultado     
    txt = open(file,"w")
    txt.write(str(lista))
    txt.close()