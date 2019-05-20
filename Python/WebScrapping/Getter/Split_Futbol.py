# -*- coding: utf-8 -*-

def splitfutbol(data):
    ### Variables para agrupar Ã­ndices deportes/partidos
    apuestas=[]
    temp=[]
    lista=[]
    league=''
    j=0
    i=0
    c_ok = 0
    c_fail = 0
    lastcol=False
    for find in data:
        #comprovamos si estamos en liga
        if(str(find).find("ipo-CompetitionButton_NameLabel ipo-CompetitionButton_NameLabelHasMarketHeading")!=-1):
            #Campo liga
            if(len(apuestas) != 0):
                if(len(apuestas) < 16 and apuestas[-1:] != [-1]):
                    c_fail += 1
                else:
                    lista.append(apuestas[:16])
                    c_ok += 1
                apuestas = []
                temp=[]
            league = str(find.get_text())
            apuestas.append(league)
            temp.append(find)
        #comprovamos si estamos en hora actual partido
        elif(str(find).find("ipo-InPlayTimer")!=-1):
            if(len(apuestas) != 1):
                if(len(apuestas) < 16 and apuestas[-1:] != [-1]):
                    c_fail += 1
                else:
                    lista.append(apuestas[:16])
                    c_ok += 1
                apuestas = []
                temp = []
                apuestas.append(league)
            #Campo hora actual partido
            apuestas.append(str(find.get_text()))
            temp.append(find)
        #comprovamos si estamos en algun equipo
        elif(str(find).find("ipo-TeamStack_TeamWrapper")!=-1):
            #Campo equipos
            if(str(find.get_text()).find("Empate")!=-1):
                pass
            else:
                if(str(find.get_text().find("\u0130"))==True):
                    team=str(find.get_text().replce("\u0130",""))
                else:
                    team=str(find.get_text())
                apuestas.append(team)
                temp.append(find)
        #comprovamos si estamos en los goles del equipo 1
        elif(str(find).find("ipo-TeamPoints_TeamScore ipo-TeamPoints_TeamScore-teamone")!=-1):
           #Campo gol/es equipo 1
            apuestas.append(int(find.get_text()))
            temp.append(find)
        #comprovamos si estamos en los goles del equipo 2
        elif(str(find).find("ipo-TeamPoints_TeamScore ipo-TeamPoints_TeamScore-teamtwo")!=-1):
            #Campo gol/es equipo 2
            apuestas.append(int(find.get_text()))
            temp.append(find)
        #aÃ±adir id
        #estamos en apuestas
        else:
            #comprovamos que hay algo en la cadena
            if((find.get_text())!='' and str(find).find("gl-ParticipantCentered_Odds")!=-1):
                try:
                    apuestas.append(float(find.get_text()))
                    temp.append(find)
                except:
                    apuestas.append(-1)
                    temp.append(find)
            elif(str(find).find("gl-ParticipantCentered_Odds")!=-1 or str(find).find("ipo-MainMarketRenderer_BlankParticipant")!=-1):
                apuestas.append(-1)
                temp.append(find)
            elif((find.get_text())!='' and str(find).find("gl-ParticipantCentered_Handicap")!=-1):
                apuestas.append(str(find.get_text()))
                temp.append(find)
            else:
                apuestas.append('')
                temp.append(find)
    if(len(apuestas) < 16 and apuestas[-1:] != [-1]):
        c_fail += 1
    else:
        lista.append(apuestas[:16])
        c_ok += 1
    return lista, c_ok, c_fail