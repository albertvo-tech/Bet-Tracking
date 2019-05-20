# -*- coding: utf-8 -*-
# Fútbol
print("Fútbol")
import Split_Futbol
import Split_Tenis
import Split_Baloncesto
import Split_Balonmano
import Parse_Futbol as pf
import getweb
import DB_Handler as db
from selenium import webdriver
from selenium.webdriver.firefox.options import Options	
from selenium.webdriver.common.action_chains import ActionChains
from bs4 import BeautifulSoup
import sys
import time

sys.getdefaultencoding()
geckodriver = 'geckodriver'
exit = False
#modo headlsess
options = Options()
options.add_argument('-headless')
while exit == False:
    try:
        browser = webdriver.Firefox(firefox_options=options)
        browser.implicitly_wait(20)
        browser.get('https://www.bet365.es')


        #cargamos pagina de inicio e idioma
        if(browser.current_url=='https://www.bet365.es/es/'):
            browser.find_element_by_class_name('lpdgl').click()

        #seleccionamos secciÃ³n directo
        if(browser.current_url=='https://www.bet365.es/'):
            browser.find_element_by_xpath("//a[contains(text(),'Directo')]").click()

        num_links = len(browser.find_elements_by_link_text('Watch'))
        for i in range(num_links):
            # navigate to link
            button = browser.find_elements_by_class_name("btn-primary")[i]
            button.click()

        browser.execute_script("window.open('about:blank', 'F_Static');")
        browser.switch_to.window("F_Static")

        browser.get("https://www.bet365.es/#/AC/B1/C1/D13/E38119368/F2/")

        #funciÃ³n para que observer el contenido de todos los botones de la web que seleccionamos
        num_links = len(browser.find_elements_by_link_text('Watch'))
        for i in range(num_links):
            # navigate to link
            button = browser.find_elements_by_class_name("btn-primary")[i]
            button.click()

        browser.execute_script("window.open('https://www.bet365.es/#/IP/', 'baloncesto');")
        browser.switch_to.window("baloncesto")

        try:
            if(browser.current_url=='https://www.bet365.es/#/IP/'): 
                browser.find_element_by_xpath("//div[contains(text(),'Baloncesto')]").click()
            #funciÃ³n para que observer el contenido de todos los botones de la web que seleccionamos
            num_links = len(browser.find_elements_by_link_text('Watch'))
            for i in range(num_links):
                # navigate to link
                button = browser.find_elements_by_class_name("btn-primary")[i]
                button.click()    
            baloncesto = True
        except:
            baloncesto = False
            print("BASKETBALL: OFFLINE")

        browser.execute_script("window.open('https://www.bet365.es/#/IP/', 'tenis');")
        browser.switch_to.window("tenis")

        try:
            if(browser.current_url=='https://www.bet365.es/#/IP/'): 
                browser.find_element_by_xpath("//div[contains(text(),'Tenis')]").click()
            #funciÃ³n para que observer el contenido de todos los botones de la web que seleccionamos
            num_links = len(browser.find_elements_by_link_text('Watch'))
            for i in range(num_links):
                # navigate to link
                button = browser.find_elements_by_class_name("btn-primary")[i]
                button.click()    
            tenis = True
        except:
            tenis = False
            print("TENNIS: OFFLINE")
        browser.switch_to_window(browser.window_handles[0])

        print("Script enters loop.")
        x = 0
        while True:
            try:
                start = time.time()

                #------------------------------
                #Fútbol Directo
                #------------------------------
                div = browser.find_element_by_xpath("//div[contains(text(),'Fútbol')]").get_attribute('outerHTML')
                print(str(div))
                if(div.find('style=""') == -1):
                    print("TAB SWITCHING ERROR - FOOTBALL")
                    break

                futbol = browser.page_source
                futbol = BeautifulSoup(futbol, "html.parser")
                datos = []
                datos=futbol.find_all(attrs={'class':['ipo-CompetitionButton_NameLabel','ipo-InPlayTimer','ipo-TeamStack_TeamWrapper','ipo-TeamPoints_TeamScore-teamone','ipo-TeamPoints_TeamScore-teamtwo','gl-ParticipantCentered_Handicap','gl-ParticipantCentered_Odds', 'ipo-MainMarketRenderer_BlankParticipant']})
                lista, c_ok, c_fail = [], 0, 0
                try:
                    lista, c_ok, c_fail = Split_Futbol.splitfutbol(datos)
                    #Funcion para separar clasificar datos
                
                    db.loop_direct(lista)
                    print("FOOTBALL - Success: {}, FAILED: {}".format(c_ok, c_fail))
                except Exception as e:
                    print("ERROR - FOOTBALL - " + str(e))
                    break
                

                if(baloncesto):
                    #------------------------------
                    #Baloncesto
                    #------------------------------
                    browser.switch_to_window("baloncesto")
                    div = browser.find_element_by_xpath("//div[contains(text(),'Baloncesto')]").get_attribute('outerHTML')
                    if(div.find('style=""') == -1):
                        print("TAB SWITCHING ERROR - BASKETBALL")
                        break
                    baloncesto = browser.page_source
                    baloncesto = BeautifulSoup(baloncesto, "html.parser")
                    datos = []
                    datos=baloncesto.find_all(attrs={'class':['ipo-CompetitionButton_NameLabelHasMarketHeading', 'ipo-InPlayTimer', 'ipo-PeriodInfo',   'ipo-TeamStack_TeamWrapper', 'ipo-TeamPoints_TeamScore', 'gl-ParticipantCentered_Handicap', 'gl-ParticipantCentered_Odds', 'ipo-MainMarketRenderer_BlankParticipant']})
                    #Funcion para separar clasificar datos
                    lista, c_ok, c_fail = [], 0, 0
                    try:
                        lista, c_ok, c_fail = Split_Baloncesto.splitbaloncesto(datos)
                        db.loop_direct_bas(lista)
                        print("BASKETBALL - Success: {}, FAILED: {}".format(c_ok, c_fail))
                    except Exception as e:
                        print("ERROR - BASKETBALL - " + str(e))
                        break
                    browser.switch_to_window(browser.window_handles[0])
                else:
                    print("BASKETBALL: OFFLINE")

                if(tenis):
                    browser.switch_to_window("tenis")
                    div = browser.find_element_by_xpath("//div[contains(text(),'Tenis')]").get_attribute('outerHTML')
                    if(div.find('style=""') == -1):
                        print("TAB SWITCHING ERROR - TENNIS")
                        break
                    tenis = browser.page_source
                    tenis = BeautifulSoup(tenis, "html.parser")
                    datos = []
                    datos=tenis.find_all(attrs={'class':["ipo-CompetitionButton_NameLabel", "ipo-TeamStack_TeamWrapper", "ipo-SetScore_SetResult", "ipo-TeamPoints_TeamScore", "gl-ParticipantCentered_Odds", "ipo-MainMarketRenderer_BlankParticipant"]})
                    #Funcion para separar clasificar datos
                    lista, c_ok, c_fail = [], 0, 0
                    try:
                        lista, c_ok, c_fail = Split_Tenis.split_tenis(datos)
                        db.loop_direct_ten(lista)
                        print("TENNIS - Success: {}, FAILED: {}".format(c_ok, c_fail))
                    except Exception as e:
                        print("ERROR - TENNIS - " + str(e))
                        break
                    browser.switch_to_window(browser.window_handles[0])
                else:
                    print("TENNIS: OFFLINE")



                if(x % 15 == 0):
                    #------------------------------
                    #Fï¿œtbol Statico 1ra Div. cada 15'
                    #------------------------------  
                    browser.switch_to_window("F_Static")
                    browser.get("https://www.bet365.es/SportsBook.API/web?lid=3&zid=0&pd=%23AC%23B1%23C1%23D13%23E38119368%23F2%23&cid=171&ctid=171")
                    futbol = browser.page_source
                    futbol = BeautifulSoup(futbol, "html.parser")
                    browser.execute_script("window.history.go(-1)")
                    try:
                        db.loop_static(pf.parse(futbol))
                    except Exception as e:
                        print("ERROR - STATIC - " + str(e))
                        break
                    browser.switch_to_window(browser.window_handles[0])

                    if(baloncesto == False):
                        try:
                            browser.switch_to_window("baloncesto")
                            if(browser.current_url=='https://www.bet365.es/#/IP/'): 
                                browser.find_element_by_xpath("//div[contains(text(),'Baloncesto')]").click()

                            #funciÃ³n para que observer el contenido de todos los botones de la web que seleccionamos
                            num_links = len(browser.find_elements_by_link_text('Watch'))
                            for i in range(num_links):
                                # navigate to link
                                button = browser.find_elements_by_class_name("btn-primary")[i]
                                button.click()
                            baloncesto = True
                        except:
                            baloncesto = False
                        browser.switch_to_window(browser.window_handles[0])
                    if(tenis == False):
                        browser.switch_to_window("tenis")
                        try:
                            if(browser.current_url=='https://www.bet365.es/#/IP/'): 
                                browser.find_element_by_xpath("//div[contains(text(),'Tenis')]").click()
                            #funciÃ³n para que observer el contenido de todos los botones de la web que seleccionamos
                            num_links = len(browser.find_elements_by_link_text('Watch'))
                            for i in range(num_links):
                                # navigate to link
                                button = browser.find_elements_by_class_name("btn-primary")[i]
                                button.click()    
                            tenis = True
                        except:
                            tenis = False
                            print("TENNIS: OFFLINE")
                        browser.switch_to_window(browser.window_handles[0])

                if(x % 30 == 0):
                    try:
                        db.deactivate_match()
                    except Exception as e:
                        print("ERROR - DEACTIVATE - " + str(e))
                        break
                
                if(x == 60):
                    break
                browser.switch_to_window(browser.window_handles[0])
                print('Loop: '+str(x)+'; ELAPSED TIME: '+str(time.time() - start))
                td = abs(time.time() - start)
                if(td > 0 and td < 60):
                    time.sleep(60 - td)
            except KeyboardInterrupt:
                exit = True
                break
            x +=1
        browser.quit()
    except KeyboardInterrupt:
        browser.quit()
        break