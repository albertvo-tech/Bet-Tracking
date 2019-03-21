# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import pandas as pd

# Permite conectarnos después a la API sin que nos de error.
url = 'https://www.bet365.es/#/AC/B1/C1/D13/E38119368/F2/'
response = requests.get(url)

### Hace la llamada para conseguir los datos que nos interesan
url = "https://www.bet365.es/SportsBook.API/web?lid=3&zid=0&pd=%23AC%23B1%23C1%23D13%23E38119368%23F2%23&cid=171&ctid=171"
response = requests.get(url)

### Parsea la respuesta
soup = BeautifulSoup(response.text, "html.parser")

### Declaración de las variables que vamos a necesitar
###      0     1     2     3     4
save = ['FI', 'NA', 'BC', 'EX', 'OD']
### Diccionario para sacar las posiciones del array
position = {'FI':0, 'NA':1, 'BC':2, 'EX':3, 'OD':4}
array = ['','','','','']
temp = []
### Orden en el que quedarán finalmente todos los valores
###          0  1  2  3  4  5  6
###          FI NA BC EX 1  X  2
organized = ['','','','','','','']
output = []
### Variables para agrupar correctamente las odds
counter = 0
odd = 4

### Variables para agrupar índices deportes/partidos
resultado = {'ID': [], 'Partido': [], 'Hora': [],'Web': [], '1': [], 'X': [],'2': []}


### Separa toda la información recivida en diferentes arrays separándolas por '|'
for i in soup.text.split('|'):
	array = ['','','','','']
	### Escoge sólo las líneas que empiezan por PA
	if(i[:2] == 'PA'):
		### Separa la lista por ';'
		for a in i.split(';'):
			### Comprueba si el identificador del elemento se ha de guardar
			if( a[:2] in save):
				### Parsea el elemento 'EX' para conseguir una url útil y guarda los elementos en su posición
				if(a[:2] == 'EX'):
					array[position.get(a[:2])] = a[3:].split('~')[1]
				else:
					array[position.get(a[:2])] = a[3:]
		### Guarda los elementos que son de interés
		if(array[0] != '' and (array[2] != '' or array[4] != '')):
			### Si el elemento contiene información del partido lo guarda
			if(array[4] == ''):
				organized = ['','','','','','','']
				organized[0] = array[0].encode('utf-8')
				organized[1] = array[1].encode('utf-8')
				organized[2] = array[2][6:8].encode('utf-8')+'/'+array[2][4:6].encode('utf-8')+'/'+array[2][:4].encode('utf-8')+' '+array[2][8:10].encode('utf-8')+':'+array[2][10:12].encode('utf-8')
				organized[3] = array[3].encode('utf-8')
				output.append(organized)
			### Si el elemento contiene información ODD las guarda en su posición
			else:        
				output[counter][odd] = (float(array[4].split('/')[0])/float(array[4].split('/')[1]))+1
				counter += 1
				if(counter >= len(output)):
					counter = 0
					odd +=1
                   

#Mediante los datos extraidos los guardamos con sus índices respectivos
for i in output:

    resultado['ID'].append(str(i[0]))
    resultado['Partido'].append(str(i[1]))
    resultado['Hora'].append((i[2]))
    resultado['Web'].append((i[3]))
    resultado['1'].append(i[4])
    resultado['X'].append(i[5])
    resultado['2'].append(i[6])
    #print(i)

        


print(resultado)
#Para guardar en un csv se supone que deveria guardarlo en columnas pero no lo hace correctamente
df = pd.DataFrame(resultado)
#para ordenar los indices que tampoco lo hace correctamente
index=['ID','Partido','Hora','Web','1','X','2']
df.to_csv('output.csv',index=index,sep=":")
