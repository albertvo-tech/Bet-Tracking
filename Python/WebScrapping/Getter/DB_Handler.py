###### PYTHON 3
from datetime import datetime, timedelta
from dateutil.parser import parse
import re
import mysql.connector

db = mysql.connector.connect(host="localhost", user="ws", passwd="ws", db="BetTracking")
cur = db.cursor()

def c(name):
	return re.sub(r"[-()\"#/@;:<>{}`+=~|.!?,]", "", name)

def get_SPORT_id(name):
	query = """SELECT SPORT_ID FROM SPORTS WHERE SPORT_NAME = "{}";""".format(str(c(name)))
	cur.execute(query)
	temp = cur.fetchall()
	if(temp):
		return temp[0][0]
	else:
		return -1

def get_LEAGUE_id(name):
	query = """SELECT LEAGUE_ID FROM LEAGUES WHERE LEAGUE_NAME = "{}";""".format(str(c(name)))
	cur.execute(query)
	temp = cur.fetchall()
	if(temp):
		return temp[0][0]
	else:
		return -1

def get_TEAM_id(name):
	query = """SELECT TEAM_ID FROM TEAMS WHERE TEAM_NAME = "{}";""".format(str(c(name)))
	cur.execute(query)
	temp = cur.fetchall()
	if(temp):
		return temp[0][0]
	else:
		return -1

def get_MATCH_id(t1, t2):
	query = """SELECT MATCH_ID FROM MATCHES WHERE MATCH_ACTIVE = 1 AND  MATCH_TEAM1_ID = {} AND MATCH_TEAM2_ID = {};""".format(get_TEAM_id(t1), get_TEAM_id(t2))
	cur.execute(query)
	temp = cur.fetchall()
	if(temp):
		return temp[0][0]
	else:
		return -1

def insert_SPORT(name):
	query = """INSERT INTO SPORTS 
				(SPORT_ID, SPORT_NAME) VALUES
				(NULL, %s);"""
	var = [str(c(name))]
	cur.execute(query, var)
	db.commit()

def check_SPORT(name):
	sid = get_SPORT_id(name)
	if(sid == -1):
		insert_SPORT(name)
		sid = get_SPORT_id(name)
	return sid

def insert_LEAGUE(name, sport):
	query = """INSERT INTO LEAGUES 
				(LEAGUE_ID, LEAGUE_NAME, LEAGUE_SPORT_ID) VALUES
				(NULL, %s, %s);"""
	var = (str(c(name)), check_SPORT(sport))
	cur.execute(query, var)
	db.commit()

def check_LEAGUE(name, sport):
	lid = get_LEAGUE_id(name)
	if(lid == -1):
		insert_LEAGUE(name, sport)
		lid = get_LEAGUE_id(name)
	return lid

def insert_TEAMS(name, league, sport):
	query = """INSERT INTO TEAMS 
				(TEAM_ID, TEAM_LEAGUE_ID, TEAM_NAME, TEAM_SPORT_ID) VALUES
				(NULL, %s, %s, %s);"""
	var = (check_LEAGUE(league, sport), str(name), check_SPORT(sport))
	cur.execute(query, var)
	db.commit()

def check_TEAMS(name, league, sport):
	tid = get_TEAM_id(name)
	if(tid == -1):
		insert_TEAMS(name, league, sport)
		tid = get_TEAM_id(name)
	return tid

def insert_MATCHES(team1, team2, date, link, league, sport, active = 1):
	query = """INSERT INTO MATCHES 
				(MATCH_ID, MATCH_TEAM1_ID, MATCH_TEAM2_ID, MATCH_DATE, MATCH_LINK, MATCH_LEAGUE_ID, MATCH_ACTIVE) VALUES
				(NULL, %s, %s, %s, %s, %s, %s);"""
	var = (check_TEAMS(team1, league, sport), check_TEAMS(team2, league, sport), date, str(link), check_LEAGUE(league, sport), active)
	cur.execute(query, var)
	db.commit()

def deactivate_match():
	query = """ UPDATE MATCHES SET MATCH_ACTIVE = 0 WHERE MATCH_DATE < '{}' AND MATCH_ACTIVE = 1;""".format((datetime.now()-timedelta(hours=3)).strftime('%Y-%m-%d %H:%M:%S'))
	cur.execute(query)
	db.commit()	

def check_MATCHES(team1, team2, date, link, league, sport):
	mid = get_MATCH_id(team1, team2)
	if(mid == -1):
		insert_MATCHES(team1, team2, date, link, league, sport)
		mid = get_MATCH_id(team1, team2)
	return mid

def insert_direct_ODD(team1, team2, date, league, sport, o1, oX, o2, goal1, goal2):
	query = """INSERT INTO ODDS_1X2 
				(ODD_ID, ODD_IS_DIRECT, ODD_REC, ODD_MATCH_ID, ODD_1, ODD_X, ODD_2, ODD_GOALS_T1, ODD_GOALS_T2) VALUES
				(NULL, 1, %s, %s, %s, %s, %s, %s, %s);"""
	var = (str(date), check_MATCHES(team1, team2, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '', league, sport), o1, oX, o2, goal1, goal2)
	cur.execute(query, var)
	db.commit()

def insert_direct_ODD_NG(team1, team2, date, league, sport, t1, t2, none, goal1, goal2):
	query = """INSERT INTO ODDS_NEXT
				(ODD_ID, ODD_IS_DIRECT, ODD_REC, ODD_MATCH_ID, ODD_T1, ODD_T2, ODD_NONE, ODD_GOALS_T1, ODD_GOALS_T2) VALUES
				(NULL, 1, %s, %s, %s, %s, %s, %s, %s);"""
	var = (str(date), check_MATCHES(team1, team2, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '', league, sport), t1, t2, none, goal1, goal2)
	cur.execute(query, var)
	db.commit()

def insert_direct_ODD_OU(team1, team2, date, league, sport, val, o, u, goal1, goal2):
	query = """INSERT INTO ODDS_OU
				(ODD_ID, ODD_IS_DIRECT, ODD_REC, ODD_MATCH_ID, ODD_VAL, ODD_O, ODD_U, ODD_GOALS_T1, ODD_GOALS_T2) VALUES
				(NULL, 1, %s, %s, %s, %s, %s, %s, %s);"""
	var = (str(date), check_MATCHES(team1, team2, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '', league, sport), val, o, u, goal1, goal2)
	cur.execute(query, var)
	db.commit()

def insert_static_ODD(teams, date, web, sport, o1, oX, o2):
	query = """INSERT INTO ODDS_1X2 
				(ODD_ID, ODD_IS_DIRECT, ODD_REC, ODD_MATCH_ID, ODD_1, ODD_X, ODD_2, ODD_GOALS_T1, ODD_GOALS_T2) VALUES
				(NULL, 0, %s, %s, %s, %s, %s, %s, %s);"""
	var = (datetime.now().strftime('%Y-%m-%d %H:%M:%S'), check_MATCHES(teams.split(' v ')[0], teams.split(' v ')[1], (parse(date)+timedelta(hours=1)).strftime('%Y-%m-%d %H:%M:%S'), web, 'España - 1ª División', sport), o1, oX, o2, 0, 0)
	cur.execute(query, var)
	db.commit()

def insert_direct_ODD_BAS(team1, team2, date, league, sport, val, o, u, goal1, goal2, c, market):
	query = """INSERT INTO ODDS_BAS
				(ODD_ID, ODD_IS_DIRECT, ODD_REC, ODD_MATCH_ID, ODD_VAL, ODD_O, ODD_U, ODD_POINTS_T1, ODD_POINTS_T2, ODD_C, ODD_MARKET) VALUES
				(NULL, 1, %s, %s, %s, %s, %s, %s, %s, %s, %s);"""
	var = (str(date), check_MATCHES(team1, team2, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '', league, sport), val, o, u, goal1, goal2, c, market)
	cur.execute(query, var)
	db.commit()

def insert_direct_ODD_TEN(team1, team2, date, league, sport, t1, t2, game_stat, market):
	query = """INSERT INTO ODDS_TEN 
				(ODD_ID, ODD_IS_DIRECT, ODD_SET, ODD_REC, ODD_MATCH_ID, ODD_T1, ODD_T2, ODD_GAME_STAT, ODD_MARKET) VALUES
				(NULL, 1, %s, %s, %s, %s, %s, %s, %s);"""
	var = (str(date), datetime.now().strftime('%Y-%m-%d %H:%M:%S'), check_MATCHES(team1, team2, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '', league, sport), t1, t2, game_stat, market)
	cur.execute(query, var)
	db.commit()

def loop_direct(LIST):
	for item in LIST:
		league, date, team1, team2, goal1, goal2, o1, oX, o2 = item[:9]
		if(goal1 == -1 and goal2 == -1):
			continue

		if(o1 != -1 and oX != -1 and o2 != -1):
			insert_direct_ODD(team1, team2, date, league, 'Fútbol', o1, oX, o2, goal1, goal2)

		t1, t2, none = item[9:12]
		if(t1 != -1 and none != -1 and t2 != -1):
			insert_direct_ODD_NG(team1, team2, date, league, 'Fútbol', t1, t2, none, goal1, goal2)

		val, o = item[12:14]
		u = item[-1]
		if(val != -1 and o != -1 and u != -1):
			val = float(val.split(' ')[-1])
			insert_direct_ODD_OU(team1, team2, date, league, 'Fútbol', val, o, u, goal1, goal2)

def loop_direct_bas(LIST):
	for item in LIST:
		league, date, c, team1, team2, goal1, goal2, val, o, u = item[:10]
		if(goal1 == -1 and goal2 == -1):
			continue

		if(val != -1 and o != -1 and u != -1):
			insert_direct_ODD_BAS(team1, team2, date, league, 'Baloncesto', val, o, u, goal1, goal2, c, 0)

		val, o, u = item[10:13]
		if(val != -1 and o != -1 and u != -1):
			insert_direct_ODD_BAS(team1, team2, date, league, 'Baloncesto', val, o, u, goal1, goal2, c, 1)

		o, u = item[13:15]
		if(o != -1 and u != -1):
			insert_direct_ODD_BAS(team1, team2, date, league, 'Baloncesto', 'NULL', o, u, goal1, goal2, c, 2)

def loop_direct_ten(LIST):
	for item in LIST:
		if(len(item) == 11):
			league, team1, team2, sets, game_stat, t1, t2 = item[:7]

			if(t1 != -1 and t2 != -1):
				insert_direct_ODD_TEN(team1, team2, sets, league, 'Tenis', t1, t2, str(game_stat), 0)

			t1, t2 = item[7:9]
			if(t1 != -1 and t2 != -1):
				insert_direct_ODD_TEN(team1, team2, sets, league, 'Tenis', t1, t2, str(game_stat), 1)

			t1, t2 = item[9:11]
			if(t1 != -1 and t2 != -1):
				insert_direct_ODD_TEN(team1, team2, sets, league, 'Tenis', t1, t2, str(game_stat), 2)

def loop_static(LIST):
	for item in LIST:
		teams, date, web, o1, oX, o2 = item[1:]
		insert_static_ODD(teams, date, web, 'Fútbol', o1, oX, o2)