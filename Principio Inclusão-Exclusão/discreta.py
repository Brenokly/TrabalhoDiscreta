#UNIVERSIDADE FEDERAL DO SEMI-ÀRIDO
#CENTRO DE CIÊNCIAS EXATAS E NATURAIS(CECEN)
#PROFESSOR: PAULO CESAR LINHARES DA SILVA
#EXA0149 - MATEMATICA DISCRETA - T01 (2023.1 - 35M12)
#ALUNOS:
#AFONSO SIMAO DE GOIS NETO;
#BRENO KLYWER OLEGARIO DE MOURA;
#PEDRO FIGUEIRA BOA VIAGEM;
#LUCAS GABRIEL DE MELO RODRIGUES;
#VINICIUS GABRIEL LIMA DE OLIVEIRA.

#pega a quantidade de conjuntos:
n = int(input ("Digite o número de conjuntos: ")) 
listConjunto = []
print("Digite a quantidade de elementos de cada conjunto: ")

s1 = 0
#pega a quantidade de delementos em cada aconjunto:
for i in range (1,n+1):
    listConjunto.append (int(input(f"Conjunto {i}: ")))
    s1+=listConjunto[i-1]

listIntersecao = []
s2 = 0
print("Digite quantidade de elementos de cada interseção: ")
#pega os elementos das interseções:
for i in range (1, n): #(n-1)
    for j in range (i+1, n+1 ):
        listIntersecao.append (int(input(f"Interseção do conjunto {i} ∩ {j}: "))) 
        s2+=listIntersecao[i-1]

s3 = 0
#se forem apenas dois conjuntos, irá retirar o s3 da fórmula
if (n > 2):
    intersecaoGeral = int(input("Digite a quantidade de elementos da interseção geral: "))
    s3 = ((-1)**(n-1))*intersecaoGeral

#escreve a fórmula apor extenso:
porEscrito = "|"
k = 65
for i in range (1,n+1):
    porEscrito += ((chr(k)))
    if i != (n): 
        k += 1
        porEscrito += " u "
porEscrito += "| = "
porEscrito2 = porEscrito

#escreve a parte dos conjuntos
for i in range (1, n+1):
    porEscrito += str((listConjunto[i-1]))
    if i != (n):
        porEscrito += (" + ")

porEscrito += (" - ")

#escreve as subtrações das tuplas de conjuntos
for i in range (0, len(listIntersecao)):
    porEscrito += str((listIntersecao[i]))
    if i != (len(listIntersecao)-1):
        porEscrito += (" - ")

if n > 2:
    if (n % 2) == 0:
        porEscrito += (" + ")
    else:
        porEscrito += (" - ")
    porEscrito += str(intersecaoGeral)

if s2 > s1:
    s0 = s1 - s2 + s3
    print(porEscrito)
    print(f"{porEscrito2}{s1} - {s2 - s3} ")
    print(f"{porEscrito2}{s0}")
    print("A cardinalidade da união dos conjuntos é : ", s0)    
else:
    print("O valor da soma das interseções é maior que a soma dos elementos dos conjuntos.")



