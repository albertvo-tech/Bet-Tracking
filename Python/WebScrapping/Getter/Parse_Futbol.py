def parse(soup):
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
					organized[0] = array[0]
					organized[1] = array[1]
					organized[2] = array[2][6:8]+'/'+array[2][4:6]+'/'+array[2][:4]+' '+array[2][8:10]+':'+array[2][10:12]
					organized[3] = array[3]
					output.append(organized)
				### Si el elemento contiene información ODD las guarda en su posición
				else:        
					output[counter][odd] = round((float(array[4].split('/')[0])/float(array[4].split('/')[1]))+1, 2)
					counter += 1
					if(counter >= len(output)):
						counter = 0
						odd +=1
	return output