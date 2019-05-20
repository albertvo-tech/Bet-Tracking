# -*- coding: utf-8 -*-

def split_tenis(data):
    apuestas=[]
    temp=[]
    sets = []
    points =[]
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
                if(len(apuestas) < 11 and apuestas[-1:] != [-1]):
                    c_fail += 1
                else:
                    lista.append(apuestas[:11])
                    c_ok += 1
                apuestas = []
            league = str(find.get_text())
            apuestas.append(league)
        #comprovamos si estamos en hora actual partido
        elif(str(find).find("ipo-TeamStack_TeamWrapper")!=-1):
            if(len(apuestas) > 4 ):
                if(len(apuestas) < 11 and apuestas[-1:] != [-1]):
                    c_fail += 1
                else:
                    lista.append(apuestas[:11])
                    c_ok += 1
                apuestas = []
                apuestas.append(league)
            if(str(find.get_text().find("\u0130"))==True):
                team=str(find.get_text().replce("\u0130",""))
            else:
                team=str(find.get_text())
            apuestas.append(team)
        #comprovamos si estamos en hora actual partido
        elif(str(find).find("ipo-SetScore_SetResult")!=-1):
            try:
                sets.append(int(find.get_text()))
            except:
                sets.append(find.get_text())
        #comprovamos si estamos en algun equipo
        elif(str(find).find("ipo-TeamPoints_TeamScore")!=-1):
            try:
                points.append(int(find.get_text()))
            except:
                points.append(find.get_text())
                
        #comprovamos si estamos en los goles del equipo 1
        elif(str(find).find("gl-ParticipantCentered_Odds")!=-1):
            if(points or sets):
                sets.append(points)
                apuestas.append(sets)
                sets, points = [], []

            if(find.get_text() != ''):
                try:
                    apuestas.append(float(find.get_text()))
                except:
                    apuestas.append(-1)
            else:
                apuestas.append(-1)
        else:
            apuestas.append(-1)

    if(len(apuestas) < 11 and apuestas[-1:] != [-1]):
        c_fail += 1
    else:
        lista.append(apuestas[:11])
        c_ok += 1

    return lista, c_ok, c_fail